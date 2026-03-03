"use client";

import { useState, useMemo } from "react";
import { useDictionary } from "@/i18n/DictionaryProvider";

interface CharInfo {
  char: string;
  codePoint: number;
  codePointHex: string;
  utf8Bytes: string;
  category: string;
}

function getUnicodeCategory(codePoint: number): string {
  // Letters
  if (
    (codePoint >= 0x41 && codePoint <= 0x5a) ||
    (codePoint >= 0x61 && codePoint <= 0x7a) ||
    (codePoint >= 0xc0 && codePoint <= 0x024f) ||
    (codePoint >= 0x0370 && codePoint <= 0x03ff) ||
    (codePoint >= 0x0400 && codePoint <= 0x04ff) ||
    (codePoint >= 0x0530 && codePoint <= 0x058f) ||
    (codePoint >= 0x0600 && codePoint <= 0x06ff) ||
    (codePoint >= 0x3040 && codePoint <= 0x309f) ||
    (codePoint >= 0x30a0 && codePoint <= 0x30ff) ||
    (codePoint >= 0x4e00 && codePoint <= 0x9fff) ||
    (codePoint >= 0xac00 && codePoint <= 0xd7af) ||
    (codePoint >= 0x1100 && codePoint <= 0x11ff)
  ) {
    return "Letter";
  }
  // Numbers
  if (
    (codePoint >= 0x30 && codePoint <= 0x39) ||
    (codePoint >= 0x0660 && codePoint <= 0x0669) ||
    (codePoint >= 0x06f0 && codePoint <= 0x06f9) ||
    (codePoint >= 0xff10 && codePoint <= 0xff19)
  ) {
    return "Number";
  }
  // Whitespace
  if (
    codePoint === 0x20 ||
    codePoint === 0x09 ||
    codePoint === 0x0a ||
    codePoint === 0x0d ||
    codePoint === 0xa0 ||
    codePoint === 0x3000
  ) {
    return "Whitespace";
  }
  // Punctuation
  if (
    (codePoint >= 0x21 && codePoint <= 0x2f) ||
    (codePoint >= 0x3a && codePoint <= 0x40) ||
    (codePoint >= 0x5b && codePoint <= 0x60) ||
    (codePoint >= 0x7b && codePoint <= 0x7e) ||
    (codePoint >= 0x2000 && codePoint <= 0x206f) ||
    (codePoint >= 0x3000 && codePoint <= 0x303f)
  ) {
    return "Punctuation";
  }
  // Symbols
  if (
    (codePoint >= 0x2100 && codePoint <= 0x27ff) ||
    (codePoint >= 0x2900 && codePoint <= 0x2bff) ||
    (codePoint >= 0xfe30 && codePoint <= 0xfe4f)
  ) {
    return "Symbol";
  }
  // Emoji
  if (
    (codePoint >= 0x1f600 && codePoint <= 0x1f64f) ||
    (codePoint >= 0x1f300 && codePoint <= 0x1f5ff) ||
    (codePoint >= 0x1f680 && codePoint <= 0x1f6ff) ||
    (codePoint >= 0x1f900 && codePoint <= 0x1f9ff) ||
    (codePoint >= 0x1fa00 && codePoint <= 0x1fa6f) ||
    (codePoint >= 0x1fa70 && codePoint <= 0x1faff) ||
    (codePoint >= 0x2600 && codePoint <= 0x26ff) ||
    (codePoint >= 0x2700 && codePoint <= 0x27bf)
  ) {
    return "Emoji";
  }
  // Control
  if (
    (codePoint >= 0x00 && codePoint <= 0x1f) ||
    (codePoint >= 0x7f && codePoint <= 0x9f)
  ) {
    return "Control";
  }
  return "Other";
}

function getUtf8Hex(char: string): string {
  const encoder = new TextEncoder();
  const bytes = encoder.encode(char);
  return Array.from(bytes)
    .map((b) => b.toString(16).toUpperCase().padStart(2, "0"))
    .join(" ");
}

function getDisplayChar(char: string, codePoint: number): string {
  if (codePoint === 0x20) return "\u2423"; // open box for space
  if (codePoint === 0x09) return "\u2192"; // arrow for tab
  if (codePoint === 0x0a) return "\u21B5"; // return symbol for newline
  if (codePoint === 0x0d) return "CR";
  if (codePoint <= 0x1f || (codePoint >= 0x7f && codePoint <= 0x9f)) {
    return "\u2400"; // control picture
  }
  return char;
}

export default function TextInspectorClient() {
  const dict = useDictionary();
  const [input, setInput] = useState("");

  const stats = useMemo(() => {
    const chars = [...input];
    const charsWithSpaces = chars.length;
    const charsWithoutSpaces = chars.filter((c) => !/\s/.test(c)).length;
    const words = input.trim() ? input.trim().split(/\s+/).length : 0;
    const lines = input ? input.split("\n").length : 0;
    const utf8Bytes = new TextEncoder().encode(input).length;
    const utf16Bytes = input.length * 2;

    return { charsWithSpaces, charsWithoutSpaces, words, lines, utf8Bytes, utf16Bytes };
  }, [input]);

  const charInfos: CharInfo[] = useMemo(() => {
    const chars = [...input].slice(0, 200);
    return chars.map((char) => {
      const codePoint = char.codePointAt(0)!;
      return {
        char,
        codePoint,
        codePointHex: `U+${codePoint.toString(16).toUpperCase().padStart(4, "0")}`,
        utf8Bytes: getUtf8Hex(char),
        category: getUnicodeCategory(codePoint),
      };
    });
  }, [input]);

  const frequencyData = useMemo(() => {
    const chars = [...input];
    const counts = new Map<string, number>();
    for (const char of chars) {
      counts.set(char, (counts.get(char) || 0) + 1);
    }
    return [...counts.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 20)
      .map(([char, count]) => ({
        char,
        codePoint: char.codePointAt(0)!,
        count,
        percentage: chars.length > 0 ? ((count / chars.length) * 100).toFixed(1) : "0",
      }));
  }, [input]);

  const maxFrequency = frequencyData.length > 0 ? frequencyData[0].count : 1;

  return (
    <div className="space-y-6">
      {/* Input */}
      <div>
        <label htmlFor="text-input" className="block text-sm font-medium mb-2">
          {dict.common.input}
        </label>
        <textarea
          id="text-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter or paste text to inspect..."
          rows={6}
          className="w-full font-mono text-sm"
        />
      </div>

      {/* Statistics Grid */}
      <div>
        <h2 className="text-sm font-semibold mb-3">{dict.common.characters} &amp; {dict.common.words}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <div className="bg-card border border-card-border rounded-xl p-4 text-center">
            <p className="text-2xl font-bold font-mono">{stats.charsWithSpaces}</p>
            <p className="text-xs text-muted mt-1">{dict.common.characters} ({dict.common.withSpaces})</p>
          </div>
          <div className="bg-card border border-card-border rounded-xl p-4 text-center">
            <p className="text-2xl font-bold font-mono">{stats.charsWithoutSpaces}</p>
            <p className="text-xs text-muted mt-1">{dict.common.characters} ({dict.common.withoutSpaces})</p>
          </div>
          <div className="bg-card border border-card-border rounded-xl p-4 text-center">
            <p className="text-2xl font-bold font-mono">{stats.words}</p>
            <p className="text-xs text-muted mt-1">{dict.common.words}</p>
          </div>
          <div className="bg-card border border-card-border rounded-xl p-4 text-center">
            <p className="text-2xl font-bold font-mono">{stats.lines}</p>
            <p className="text-xs text-muted mt-1">{dict.common.lines}</p>
          </div>
          <div className="bg-card border border-card-border rounded-xl p-4 text-center">
            <p className="text-2xl font-bold font-mono">{stats.utf8Bytes}</p>
            <p className="text-xs text-muted mt-1">{dict.common.bytes} (UTF-8)</p>
          </div>
          <div className="bg-card border border-card-border rounded-xl p-4 text-center">
            <p className="text-2xl font-bold font-mono">{stats.utf16Bytes}</p>
            <p className="text-xs text-muted mt-1">{dict.common.bytes} (UTF-16)</p>
          </div>
        </div>
      </div>

      {/* Unicode Code Points Table */}
      {charInfos.length > 0 && (
        <div>
          <h2 className="text-sm font-semibold mb-3">
            {dict.common.codePoints}
            {[...input].length > 200 && (
              <span className="text-muted font-normal ml-2">(first 200 of {[...input].length})</span>
            )}
          </h2>
          <div className="overflow-x-auto border border-card-border rounded-xl">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-card-border bg-card">
                  <th className="text-left py-2 px-3 font-medium text-muted">#</th>
                  <th className="text-left py-2 px-3 font-medium text-muted">Char</th>
                  <th className="text-left py-2 px-3 font-medium text-muted">Code Point</th>
                  <th className="text-left py-2 px-3 font-medium text-muted">UTF-8</th>
                  <th className="text-left py-2 px-3 font-medium text-muted">Category</th>
                </tr>
              </thead>
              <tbody>
                {charInfos.map((info, i) => (
                  <tr
                    key={i}
                    className="border-b border-card-border last:border-b-0 hover:bg-input-bg transition-colors"
                  >
                    <td className="py-2 px-3 text-muted tabular-nums">{i + 1}</td>
                    <td className="py-2 px-3 font-mono text-base">
                      {getDisplayChar(info.char, info.codePoint)}
                    </td>
                    <td className="py-2 px-3 font-mono text-primary">{info.codePointHex}</td>
                    <td className="py-2 px-3 font-mono text-muted">{info.utf8Bytes}</td>
                    <td className="py-2 px-3">
                      <span
                        className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                          info.category === "Letter"
                            ? "bg-blue-500/15 text-blue-600 dark:text-blue-400"
                            : info.category === "Number"
                              ? "bg-green-500/15 text-green-600 dark:text-green-400"
                              : info.category === "Whitespace"
                                ? "bg-yellow-500/15 text-yellow-600 dark:text-yellow-400"
                                : info.category === "Punctuation"
                                  ? "bg-orange-500/15 text-orange-600 dark:text-orange-400"
                                  : info.category === "Emoji"
                                    ? "bg-pink-500/15 text-pink-600 dark:text-pink-400"
                                    : info.category === "Symbol"
                                      ? "bg-purple-500/15 text-purple-600 dark:text-purple-400"
                                      : info.category === "Control"
                                        ? "bg-red-500/15 text-red-600 dark:text-red-400"
                                        : "bg-muted/15 text-muted"
                        }`}
                      >
                        {info.category}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Character Frequency Chart */}
      {frequencyData.length > 0 && (
        <div>
          <h2 className="text-sm font-semibold mb-3">{dict.common.frequency} (Top 20)</h2>
          <div className="bg-card border border-card-border rounded-xl p-4 space-y-2">
            {frequencyData.map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-sm">
                <span className="w-8 font-mono text-base text-center shrink-0">
                  {getDisplayChar(item.char, item.codePoint)}
                </span>
                <span className="w-20 font-mono text-xs text-muted shrink-0">
                  U+{item.codePoint.toString(16).toUpperCase().padStart(4, "0")}
                </span>
                <div className="flex-1 h-5 bg-input-bg rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-300"
                    style={{ width: `${(item.count / maxFrequency) * 100}%` }}
                  />
                </div>
                <span className="w-10 text-right font-mono tabular-nums shrink-0">
                  {item.count}
                </span>
                <span className="w-14 text-right text-muted text-xs shrink-0">
                  {item.percentage}%
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
