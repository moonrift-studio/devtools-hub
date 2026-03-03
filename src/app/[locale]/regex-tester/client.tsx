"use client";

import { useState, useMemo } from "react";
import CopyButton from "@/components/CopyButton";
import { useDictionary } from "@/i18n/DictionaryProvider";

interface MatchResult {
  index: number;
  value: string;
  groups: Record<string, string> | undefined;
}

export default function RegexTesterClient() {
  const dict = useDictionary();

  const COMMON_PATTERNS = [
    { label: dict.common.email, pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}", flags: "g" },
    { label: dict.common.url, pattern: "https?://[\\w\\-._~:/?#\\[\\]@!$&'()*+,;=%]+", flags: "g" },
    { label: dict.common.phone, pattern: "\\+?\\d{1,4}[-.\\s]?\\(?\\d{1,3}\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}", flags: "g" },
    { label: dict.common.ipAddress, pattern: "\\b(?:\\d{1,3}\\.){3}\\d{1,3}\\b", flags: "g" },
  ];

  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState("g");
  const [testString, setTestString] = useState("");

  const { regex, matches, error } = useMemo(() => {
    if (!pattern) {
      return { regex: null, matches: [] as MatchResult[], error: null };
    }

    try {
      const re = new RegExp(pattern, flags);
      const results: MatchResult[] = [];
      const maxMatches = 1000;
      const startTime = performance.now();
      const timeout = 2000; // 2 second timeout to prevent ReDoS

      if (flags.includes("g")) {
        let match: RegExpExecArray | null;
        while ((match = re.exec(testString)) !== null) {
          results.push({
            index: match.index,
            value: match[0],
            groups: match.groups ? { ...match.groups } : undefined,
          });
          if (match[0].length === 0) {
            re.lastIndex++;
          }
          if (results.length >= maxMatches || performance.now() - startTime > timeout) {
            break;
          }
        }
      } else {
        const match = re.exec(testString);
        if (match) {
          results.push({
            index: match.index,
            value: match[0],
            groups: match.groups ? { ...match.groups } : undefined,
          });
        }
      }

      const timedOut = performance.now() - startTime > timeout;
      return {
        regex: re,
        matches: results,
        error: timedOut ? "Execution timed out (pattern may be too complex)" : null,
      };
    } catch (e) {
      return {
        regex: null,
        matches: [] as MatchResult[],
        error: e instanceof Error ? e.message : "Invalid regular expression",
      };
    }
  }, [pattern, flags, testString]);

  const highlightedText = useMemo(() => {
    if (!regex || !testString || matches.length === 0) {
      return null;
    }

    const parts: { text: string; highlighted: boolean }[] = [];
    let lastIndex = 0;

    const sortedMatches = [...matches].sort((a, b) => a.index - b.index);

    for (const match of sortedMatches) {
      if (match.index > lastIndex) {
        parts.push({ text: testString.slice(lastIndex, match.index), highlighted: false });
      }
      parts.push({ text: match.value, highlighted: true });
      lastIndex = match.index + match.value.length;
    }

    if (lastIndex < testString.length) {
      parts.push({ text: testString.slice(lastIndex), highlighted: false });
    }

    return parts;
  }, [regex, testString, matches]);

  const applyCommonPattern = (p: { pattern: string; flags: string }) => {
    setPattern(p.pattern);
    setFlags(p.flags);
  };

  return (
    <div className="space-y-6">
      {/* Common Patterns */}
      <div>
        <label className="block text-sm font-medium mb-2">{dict.common.commonPatterns}</label>
        <div className="flex flex-wrap gap-2">
          {COMMON_PATTERNS.map((p) => (
            <button
              key={p.label}
              onClick={() => applyCommonPattern(p)}
              className="px-3 py-1.5 text-sm rounded-md bg-primary/10 text-primary hover:bg-primary/20 transition-colors cursor-pointer"
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Pattern & Flags */}
      <div className="flex gap-3">
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">{dict.common.pattern}</label>
          <input
            type="text"
            value={pattern}
            onChange={(e) => setPattern(e.target.value)}
            placeholder="Enter regex pattern..."
            spellCheck={false}
            className="font-mono"
          />
        </div>
        <div className="w-20">
          <label className="block text-sm font-medium mb-1">{dict.common.flags}</label>
          <input
            type="text"
            value={flags}
            onChange={(e) => setFlags(e.target.value)}
            placeholder="g"
            spellCheck={false}
            className="font-mono"
          />
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="p-3 rounded-md bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-mono">
          {error}
        </div>
      )}

      {/* Test String */}
      <div>
        <label className="block text-sm font-medium mb-1">{dict.common.testString}</label>
        <textarea
          value={testString}
          onChange={(e) => setTestString(e.target.value)}
          placeholder="Enter text to test against..."
          rows={6}
          spellCheck={false}
          className="font-mono"
        />
      </div>

      {/* Highlighted Output */}
      {highlightedText && (
        <div>
          <label className="block text-sm font-medium mb-1">Highlighted Matches</label>
          <div className="p-4 rounded-md bg-background border border-card-border font-mono text-sm whitespace-pre-wrap break-all">
            {highlightedText.map((part, i) =>
              part.highlighted ? (
                <span
                  key={i}
                  className="bg-yellow-200 dark:bg-yellow-500 text-black rounded-sm px-0.5"
                >
                  {part.text}
                </span>
              ) : (
                <span key={i}>{part.text}</span>
              )
            )}
          </div>
        </div>
      )}

      {/* Match Results */}
      {pattern && !error && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium">
              {dict.common.match} ({matches.length} {matches.length !== 1 ? dict.common.matches : dict.common.match})
            </label>
            {matches.length > 0 && (
              <CopyButton
                text={matches.map((m) => m.value).join("\n")}
              />
            )}
          </div>

          {matches.length === 0 ? (
            <p className="text-sm text-muted">{dict.common.noMatches}</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-card-border">
                    <th className="text-left py-2 px-3 font-medium text-muted">#</th>
                    <th className="text-left py-2 px-3 font-medium text-muted">{dict.common.index}</th>
                    <th className="text-left py-2 px-3 font-medium text-muted">{dict.common.match}</th>
                    <th className="text-left py-2 px-3 font-medium text-muted">{dict.common.groups}</th>
                  </tr>
                </thead>
                <tbody>
                  {matches.map((match, i) => (
                    <tr
                      key={i}
                      className="border-b border-card-border last:border-b-0"
                    >
                      <td className="py-2 px-3 text-muted">{i + 1}</td>
                      <td className="py-2 px-3 font-mono">{match.index}</td>
                      <td className="py-2 px-3 font-mono">
                        <span className="bg-yellow-200 dark:bg-yellow-500 text-black rounded-sm px-1">
                          {match.value}
                        </span>
                      </td>
                      <td className="py-2 px-3 font-mono text-muted">
                        {match.groups
                          ? Object.entries(match.groups)
                              .map(([k, v]) => `${k}: "${v}"`)
                              .join(", ")
                          : "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
