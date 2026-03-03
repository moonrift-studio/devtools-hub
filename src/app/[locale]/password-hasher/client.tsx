"use client";

import { useState, useEffect, useCallback } from "react";
import CopyButton from "@/components/CopyButton";
import { useDictionary } from "@/i18n/DictionaryProvider";

type Algorithm = "argon2id" | "pbkdf2-sha256";

function generateSaltHex(): string {
  const saltBytes = crypto.getRandomValues(new Uint8Array(16));
  return Array.from(saltBytes)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function hexToUint8Array(hex: string): Uint8Array {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length; i += 2) {
    bytes[i / 2] = parseInt(hex.substring(i, i + 2), 16);
  }
  return bytes;
}

function isValidHex(str: string): boolean {
  return /^[0-9a-fA-F]*$/.test(str) && str.length > 0 && str.length % 2 === 0;
}

async function hashArgon2id(
  password: string,
  salt: Uint8Array,
  iterations: number,
  memorySize: number,
  parallelism: number,
  hashLength: number
): Promise<string> {
  const { argon2id } = await import("hash-wasm");
  return argon2id({
    password,
    salt,
    parallelism,
    iterations,
    memorySize,
    hashLength,
    outputType: "hex",
  });
}

async function hashPbkdf2(
  password: string,
  salt: Uint8Array,
  iterations: number,
  outputLength: number
): Promise<string> {
  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    "PBKDF2",
    false,
    ["deriveBits"]
  );
  const bits = await crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt: salt.buffer as ArrayBuffer,
      iterations,
      hash: "SHA-256",
    },
    keyMaterial,
    outputLength * 8
  );
  return Array.from(new Uint8Array(bits))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export default function PasswordHasherClient() {
  const dict = useDictionary();

  const [password, setPassword] = useState("");
  const [algorithm, setAlgorithm] = useState<Algorithm>("argon2id");
  const [salt, setSalt] = useState("");
  const [hashResult, setHashResult] = useState("");
  const [isComputing, setIsComputing] = useState(false);
  const [error, setError] = useState("");

  // Argon2id parameters
  const [argonIterations, setArgonIterations] = useState(3);
  const [memoryCost, setMemoryCost] = useState(65536);
  const [parallelism, setParallelism] = useState(1);
  const [argonOutputLength, setArgonOutputLength] = useState(32);

  // PBKDF2 parameters
  const [pbkdf2Iterations, setPbkdf2Iterations] = useState(100000);
  const [pbkdf2OutputLength, setPbkdf2OutputLength] = useState(32);

  // Auto-generate salt on mount
  useEffect(() => {
    setSalt(generateSaltHex());
  }, []);

  const handleGenerateSalt = useCallback(() => {
    setSalt(generateSaltHex());
  }, []);

  const handleHash = useCallback(async () => {
    if (!password) return;
    if (!isValidHex(salt)) {
      setError("Salt must be a valid hex string (even number of hex characters).");
      return;
    }

    setIsComputing(true);
    setError("");
    setHashResult("");

    try {
      const saltBytes = hexToUint8Array(salt);
      let result: string;

      if (algorithm === "argon2id") {
        result = await hashArgon2id(
          password,
          saltBytes,
          argonIterations,
          memoryCost,
          parallelism,
          argonOutputLength
        );
      } else {
        result = await hashPbkdf2(
          password,
          saltBytes,
          pbkdf2Iterations,
          pbkdf2OutputLength
        );
      }

      setHashResult(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred while hashing.");
    } finally {
      setIsComputing(false);
    }
  }, [
    password,
    salt,
    algorithm,
    argonIterations,
    memoryCost,
    parallelism,
    argonOutputLength,
    pbkdf2Iterations,
    pbkdf2OutputLength,
  ]);

  return (
    <div className="space-y-6">
      {/* Password Input */}
      <div>
        <label htmlFor="password-input" className="block text-sm font-medium mb-2">
          Password
        </label>
        <input
          id="password-input"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password to hash..."
          className="w-full font-mono text-sm"
        />
      </div>

      {/* Algorithm Selector */}
      <div>
        <label htmlFor="algorithm-select" className="block text-sm font-medium mb-2">
          {dict.common.algorithm}
        </label>
        <select
          id="algorithm-select"
          value={algorithm}
          onChange={(e) => {
            setAlgorithm(e.target.value as Algorithm);
            setHashResult("");
            setError("");
          }}
          className="w-full text-sm"
        >
          <option value="argon2id">Argon2id</option>
          <option value="pbkdf2-sha256">PBKDF2-SHA256</option>
        </select>
      </div>

      {/* Salt Section */}
      <div>
        <label htmlFor="salt-input" className="block text-sm font-medium mb-2">
          {dict.common.salt}
        </label>
        <div className="flex gap-2">
          <input
            id="salt-input"
            type="text"
            value={salt}
            onChange={(e) => setSalt(e.target.value)}
            placeholder="Hex string..."
            className="flex-1 font-mono text-sm"
          />
          <button
            onClick={handleGenerateSalt}
            className="px-4 py-2 rounded-md bg-primary text-white hover:bg-primary-hover transition-colors cursor-pointer text-sm font-medium whitespace-nowrap"
          >
            {dict.common.generateSalt}
          </button>
        </div>
      </div>

      {/* Algorithm-specific Parameters */}
      {algorithm === "argon2id" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="argon-iterations" className="block text-sm font-medium mb-2">
              {dict.common.iterations} (1-10)
            </label>
            <input
              id="argon-iterations"
              type="number"
              min={1}
              max={10}
              value={argonIterations}
              onChange={(e) =>
                setArgonIterations(Math.min(10, Math.max(1, Number(e.target.value))))
              }
              className="w-full font-mono text-sm"
            />
          </div>
          <div>
            <label htmlFor="memory-cost" className="block text-sm font-medium mb-2">
              {dict.common.memoryCost} (KB)
            </label>
            <input
              id="memory-cost"
              type="number"
              min={1024}
              max={65536}
              step={1024}
              value={memoryCost}
              onChange={(e) =>
                setMemoryCost(Math.min(65536, Math.max(1024, Number(e.target.value))))
              }
              className="w-full font-mono text-sm"
            />
          </div>
          <div>
            <label htmlFor="parallelism" className="block text-sm font-medium mb-2">
              Parallelism (1-4)
            </label>
            <input
              id="parallelism"
              type="number"
              min={1}
              max={4}
              value={parallelism}
              onChange={(e) =>
                setParallelism(Math.min(4, Math.max(1, Number(e.target.value))))
              }
              className="w-full font-mono text-sm"
            />
          </div>
          <div>
            <label htmlFor="argon-output-length" className="block text-sm font-medium mb-2">
              {dict.common.outputLength} (bytes)
            </label>
            <input
              id="argon-output-length"
              type="number"
              min={16}
              max={64}
              value={argonOutputLength}
              onChange={(e) =>
                setArgonOutputLength(Math.min(64, Math.max(16, Number(e.target.value))))
              }
              className="w-full font-mono text-sm"
            />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="pbkdf2-iterations" className="block text-sm font-medium mb-2">
              {dict.common.iterations} (10,000-1,000,000)
            </label>
            <input
              id="pbkdf2-iterations"
              type="number"
              min={10000}
              max={1000000}
              step={10000}
              value={pbkdf2Iterations}
              onChange={(e) =>
                setPbkdf2Iterations(
                  Math.min(1000000, Math.max(10000, Number(e.target.value)))
                )
              }
              className="w-full font-mono text-sm"
            />
          </div>
          <div>
            <label htmlFor="pbkdf2-output-length" className="block text-sm font-medium mb-2">
              {dict.common.outputLength} (bytes)
            </label>
            <input
              id="pbkdf2-output-length"
              type="number"
              min={16}
              max={64}
              value={pbkdf2OutputLength}
              onChange={(e) =>
                setPbkdf2OutputLength(Math.min(64, Math.max(16, Number(e.target.value))))
              }
              className="w-full font-mono text-sm"
            />
          </div>
        </div>
      )}

      {/* Hash Button */}
      <div>
        <button
          onClick={handleHash}
          disabled={!password || isComputing}
          className="px-6 py-2.5 rounded-md bg-primary text-white hover:bg-primary-hover transition-colors cursor-pointer font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isComputing ? dict.common.computing : "Hash"}
        </button>
      </div>

      {/* Error Display */}
      {error && (
        <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-500 text-sm">
          {error}
        </div>
      )}

      {/* Result Display */}
      {hashResult && (
        <div>
          <label className="block text-sm font-medium mb-2">
            {dict.common.hashResult}
          </label>
          <div className="bg-card border border-card-border rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-muted">
                {algorithm === "argon2id" ? "Argon2id" : "PBKDF2-SHA256"} (hex)
              </span>
              <CopyButton text={hashResult} />
            </div>
            <p className="font-mono text-sm break-all">{hashResult}</p>
          </div>
        </div>
      )}
    </div>
  );
}
