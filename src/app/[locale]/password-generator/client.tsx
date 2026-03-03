"use client";

import { useState, useCallback, useEffect } from "react";
import CopyButton from "@/components/CopyButton";
import { useDictionary } from "@/i18n/DictionaryProvider";

const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`";

function secureRandom(max: number): number {
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  return array[0] % max;
}

function generatePassword(
  length: number,
  useUppercase: boolean,
  useLowercase: boolean,
  useNumbers: boolean,
  useSymbols: boolean
): string {
  let charset = "";
  const required: string[] = [];

  if (useUppercase) {
    charset += UPPERCASE;
    required.push(UPPERCASE[secureRandom(UPPERCASE.length)]);
  }
  if (useLowercase) {
    charset += LOWERCASE;
    required.push(LOWERCASE[secureRandom(LOWERCASE.length)]);
  }
  if (useNumbers) {
    charset += NUMBERS;
    required.push(NUMBERS[secureRandom(NUMBERS.length)]);
  }
  if (useSymbols) {
    charset += SYMBOLS;
    required.push(SYMBOLS[secureRandom(SYMBOLS.length)]);
  }

  if (charset.length === 0) return "";

  // Fill remaining length with random characters
  const remaining = length - required.length;
  const chars = [...required];
  for (let i = 0; i < remaining; i++) {
    chars.push(charset[secureRandom(charset.length)]);
  }

  // Shuffle using Fisher-Yates
  for (let i = chars.length - 1; i > 0; i--) {
    const j = secureRandom(i + 1);
    [chars[i], chars[j]] = [chars[j], chars[i]];
  }

  return chars.join("");
}

type Strength = "weak" | "fair" | "strong" | "very strong";

function evaluateStrength(
  length: number,
  useUppercase: boolean,
  useLowercase: boolean,
  useNumbers: boolean,
  useSymbols: boolean
): { strength: Strength; score: number } {
  let poolSize = 0;
  if (useUppercase) poolSize += 26;
  if (useLowercase) poolSize += 26;
  if (useNumbers) poolSize += 10;
  if (useSymbols) poolSize += SYMBOLS.length;

  // Entropy = length * log2(poolSize)
  const entropy = poolSize > 0 ? length * Math.log2(poolSize) : 0;

  if (entropy < 36) return { strength: "weak", score: 1 };
  if (entropy < 60) return { strength: "fair", score: 2 };
  if (entropy < 80) return { strength: "strong", score: 3 };
  return { strength: "very strong", score: 4 };
}

const strengthConfig: Record<Strength, { color: string; bg: string; width: string }> = {
  weak: { color: "text-red-500", bg: "bg-red-500", width: "w-1/4" },
  fair: { color: "text-orange-500", bg: "bg-orange-500", width: "w-2/4" },
  strong: { color: "text-green-500", bg: "bg-green-500", width: "w-3/4" },
  "very strong": { color: "text-green-600", bg: "bg-green-600", width: "w-full" },
};

const strengthLabelMap = {
  weak: "weak",
  fair: "fair",
  strong: "strong",
  "very strong": "veryStrong",
} as const;

export default function PasswordGeneratorClient() {
  const dict = useDictionary();
  const [length, setLength] = useState(16);
  const [useUppercase, setUseUppercase] = useState(true);
  const [useLowercase, setUseLowercase] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);
  const [password, setPassword] = useState("");
  const [multiplePasswords, setMultiplePasswords] = useState<string[]>([]);

  const hasCharset = useUppercase || useLowercase || useNumbers || useSymbols;

  const generate = useCallback(() => {
    if (!hasCharset) return;
    const pw = generatePassword(length, useUppercase, useLowercase, useNumbers, useSymbols);
    setPassword(pw);
    setMultiplePasswords([]);
  }, [length, useUppercase, useLowercase, useNumbers, useSymbols, hasCharset]);

  const generateMultiple = useCallback(() => {
    if (!hasCharset) return;
    const passwords = Array.from({ length: 5 }, () =>
      generatePassword(length, useUppercase, useLowercase, useNumbers, useSymbols)
    );
    setPassword(passwords[0]);
    setMultiplePasswords(passwords);
  }, [length, useUppercase, useLowercase, useNumbers, useSymbols, hasCharset]);

  // Generate initial password on mount
  useEffect(() => {
    generate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { strength } = evaluateStrength(
    length,
    useUppercase,
    useLowercase,
    useNumbers,
    useSymbols
  );
  const config = strengthConfig[strength];

  return (
    <div className="space-y-6">
      {/* Password Display */}
      <div className="p-4 bg-input-bg rounded-lg border border-input-border">
        <div className="flex items-center justify-between gap-3 mb-3">
          <p
            className="font-mono text-lg sm:text-xl break-all flex-1 select-all"
            aria-label="Generated password"
          >
            {password || "Select at least one character type"}
          </p>
          {password && <CopyButton text={password} />}
        </div>

        {/* Strength Indicator */}
        {hasCharset && (
          <div>
            <div className="h-2 w-full bg-card-border rounded-full overflow-hidden">
              <div
                className={`h-full ${config.bg} ${config.width} rounded-full transition-all duration-300`}
              />
            </div>
            <p className={`text-sm mt-1 font-medium capitalize ${config.color}`}>
              {dict.common[strengthLabelMap[strength]]}
            </p>
          </div>
        )}
      </div>

      {/* Length Slider */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="text-sm font-medium">{dict.common.length}</label>
          <span className="text-sm font-mono font-bold text-primary">{length}</span>
        </div>
        <input
          type="range"
          min={8}
          max={128}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full h-2 rounded-full appearance-none cursor-pointer bg-card-border accent-primary [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-md [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-primary [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-0"
        />
        <div className="flex justify-between text-xs text-muted mt-1">
          <span>8</span>
          <span>128</span>
        </div>
      </div>

      {/* Character Options */}
      <div>
        <label className="text-sm font-medium block mb-3">Character Types</label>
        <div className="grid grid-cols-2 gap-3">
          <label className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-input-bg transition-colors">
            <input
              type="checkbox"
              checked={useUppercase}
              onChange={(e) => setUseUppercase(e.target.checked)}
              className="w-4 h-4 rounded accent-primary cursor-pointer"
            />
            <span className="text-sm">{dict.common.uppercase} (A-Z)</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-input-bg transition-colors">
            <input
              type="checkbox"
              checked={useLowercase}
              onChange={(e) => setUseLowercase(e.target.checked)}
              className="w-4 h-4 rounded accent-primary cursor-pointer"
            />
            <span className="text-sm">{dict.common.lowercase} (a-z)</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-input-bg transition-colors">
            <input
              type="checkbox"
              checked={useNumbers}
              onChange={(e) => setUseNumbers(e.target.checked)}
              className="w-4 h-4 rounded accent-primary cursor-pointer"
            />
            <span className="text-sm">{dict.common.numbers} (0-9)</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-input-bg transition-colors">
            <input
              type="checkbox"
              checked={useSymbols}
              onChange={(e) => setUseSymbols(e.target.checked)}
              className="w-4 h-4 rounded accent-primary cursor-pointer"
            />
            <span className="text-sm">{dict.common.symbols} (!@#$%...)</span>
          </label>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={generate}
          disabled={!hasCharset}
          className="px-6 py-2.5 rounded-md bg-primary text-white hover:bg-primary-hover transition-colors cursor-pointer font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {dict.common.generate}
        </button>
        <button
          onClick={generateMultiple}
          disabled={!hasCharset}
          className="px-6 py-2.5 rounded-md bg-primary text-white hover:bg-primary-hover transition-colors cursor-pointer font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {dict.common.generateMultiple} (5)
        </button>
      </div>

      {/* Multiple Passwords */}
      {multiplePasswords.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold mb-3">Generated Passwords</h2>
          <div className="space-y-2">
            {multiplePasswords.map((pw, i) => (
              <div
                key={i}
                className="flex items-center justify-between gap-3 p-3 bg-input-bg rounded-lg border border-input-border"
              >
                <span className="font-mono text-sm break-all flex-1 select-all">{pw}</span>
                <CopyButton text={pw} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
