"use client";

import { useState, useMemo } from "react";
import { useDictionary } from "@/i18n/DictionaryProvider";

interface KeywordResult {
  word: string;
  count: number;
  density: string;
}

function analyzeKeywords(text: string, minLength: number): KeywordResult[] {
  if (!text.trim()) return [];

  const words = text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .split(/\s+/)
    .filter((w) => w.length >= minLength);

  const totalWords = words.length;
  const counts = new Map<string, number>();
  for (const word of words) {
    counts.set(word, (counts.get(word) || 0) + 1);
  }

  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([word, count]) => ({
      word,
      count,
      density: totalWords > 0 ? ((count / totalWords) * 100).toFixed(2) : "0",
    }));
}

function analyzeNgrams(text: string, n: number): KeywordResult[] {
  if (!text.trim()) return [];

  const words = text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .split(/\s+/)
    .filter((w) => w.length > 0);

  if (words.length < n) return [];

  const totalNgrams = words.length - n + 1;
  const counts = new Map<string, number>();
  for (let i = 0; i <= words.length - n; i++) {
    const ngram = words.slice(i, i + n).join(" ");
    counts.set(ngram, (counts.get(ngram) || 0) + 1);
  }

  return [...counts.entries()]
    .filter(([, count]) => count >= 2)
    .sort((a, b) => b[1] - a[1])
    .map(([word, count]) => ({
      word,
      count,
      density: totalNgrams > 0 ? ((count / totalNgrams) * 100).toFixed(2) : "0",
    }));
}

export default function KeywordCounterClient() {
  const dict = useDictionary();
  const [input, setInput] = useState("");
  const [minLength, setMinLength] = useState(2);
  const [tab, setTab] = useState<"single" | "bigram" | "trigram">("single");

  const totalWords = useMemo(() => {
    if (!input.trim()) return 0;
    return input.trim().split(/\s+/).length;
  }, [input]);

  const totalChars = useMemo(() => [...input].length, [input]);

  const results = useMemo(() => {
    switch (tab) {
      case "single":
        return analyzeKeywords(input, minLength);
      case "bigram":
        return analyzeNgrams(input, 2);
      case "trigram":
        return analyzeNgrams(input, 3);
    }
  }, [input, minLength, tab]);

  const maxCount = results.length > 0 ? results[0].count : 1;

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="kw-input" className="block text-sm font-medium mb-2">
          {dict.common.input}
        </label>
        <textarea
          id="kw-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste your text here to analyze keyword frequency..."
          rows={8}
          className="w-full text-sm"
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-4 text-sm">
          <span className="text-muted">{dict.common.words}: <strong>{totalWords}</strong></span>
          <span className="text-muted">{dict.common.characters}: <strong>{totalChars}</strong></span>
        </div>
        <div className="flex items-center gap-2 text-sm ml-auto">
          <label htmlFor="min-length" className="text-muted">Min length:</label>
          <select
            id="min-length"
            value={minLength}
            onChange={(e) => setMinLength(Number(e.target.value))}
            className="bg-input-bg border border-input-border rounded px-2 py-1 text-sm"
          >
            {[1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex gap-1">
        {(["single", "bigram", "trigram"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 rounded-t-lg text-sm cursor-pointer transition-colors ${
              tab === t
                ? "bg-primary text-white"
                : "bg-input-bg text-muted hover:text-foreground"
            }`}
          >
            {t === "single" ? "Single Words" : t === "bigram" ? "2-word Phrases" : "3-word Phrases"}
          </button>
        ))}
      </div>

      {results.length > 0 ? (
        <div className="border border-card-border rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-card-border bg-card">
                <th className="text-left py-2 px-3 font-medium text-muted w-8">#</th>
                <th className="text-left py-2 px-3 font-medium text-muted">Keyword</th>
                <th className="text-left py-2 px-3 font-medium text-muted">Frequency</th>
                <th className="text-right py-2 px-3 font-medium text-muted w-16">Count</th>
                <th className="text-right py-2 px-3 font-medium text-muted w-20">Density</th>
              </tr>
            </thead>
            <tbody>
              {results.slice(0, 50).map((item, i) => (
                <tr key={i} className="border-b border-card-border last:border-b-0 hover:bg-input-bg transition-colors">
                  <td className="py-2 px-3 text-muted tabular-nums">{i + 1}</td>
                  <td className="py-2 px-3 font-mono">{item.word}</td>
                  <td className="py-2 px-3">
                    <div className="h-4 bg-input-bg rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all"
                        style={{ width: `${(item.count / maxCount) * 100}%` }}
                      />
                    </div>
                  </td>
                  <td className="py-2 px-3 text-right font-mono tabular-nums">{item.count}</td>
                  <td className="py-2 px-3 text-right font-mono tabular-nums text-muted">{item.density}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : input.trim() ? (
        <p className="text-center text-muted py-8">No keywords found.</p>
      ) : null}
    </div>
  );
}
