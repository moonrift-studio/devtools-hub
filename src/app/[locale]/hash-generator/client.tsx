"use client";

import { useState, useEffect } from "react";
import CopyButton from "@/components/CopyButton";
import { useDictionary } from "@/i18n/DictionaryProvider";

const HASH_ALGORITHMS = [
  { name: "SHA-1", algorithm: "SHA-1" },
  { name: "SHA-256", algorithm: "SHA-256" },
  { name: "SHA-384", algorithm: "SHA-384" },
  { name: "SHA-512", algorithm: "SHA-512" },
] as const;

async function computeHash(algorithm: string, text: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest(algorithm, data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

export default function HashGeneratorClient() {
  const [input, setInput] = useState("");
  const [hashes, setHashes] = useState<Record<string, string>>({});
  const dict = useDictionary();

  useEffect(() => {
    if (!input) {
      setHashes({});
      return;
    }

    let cancelled = false;

    async function generateHashes() {
      const results: Record<string, string> = {};
      for (const { name, algorithm } of HASH_ALGORITHMS) {
        try {
          results[name] = await computeHash(algorithm, input);
        } catch {
          results[name] = "Error computing hash";
        }
      }
      if (!cancelled) {
        setHashes(results);
      }
    }

    generateHashes();

    return () => {
      cancelled = true;
    };
  }, [input]);

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="hash-input" className="block text-sm font-medium mb-2">
          {dict.common.input}
        </label>
        <textarea
          id="hash-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text to generate hashes..."
          rows={4}
          className="w-full font-mono text-sm"
        />
      </div>

      <div className="space-y-3">
        {HASH_ALGORITHMS.map(({ name }) => (
          <div
            key={name}
            className="bg-card border border-card-border rounded-xl p-4"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-muted">{name}</span>
              {hashes[name] && <CopyButton text={hashes[name]} />}
            </div>
            <p className="font-mono text-sm break-all min-h-[1.25rem]">
              {hashes[name] || (
                <span className="text-muted">—</span>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
