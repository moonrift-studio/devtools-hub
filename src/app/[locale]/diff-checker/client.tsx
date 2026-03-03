"use client";

import { useState, useMemo } from "react";
import CopyButton from "@/components/CopyButton";
import { useDictionary } from "@/i18n/DictionaryProvider";

type DiffLine = {
  type: "added" | "removed" | "unchanged";
  content: string;
  leftNum: number | null;
  rightNum: number | null;
};

function computeDiff(original: string, modified: string): DiffLine[] {
  const origLines = original.split("\n");
  const modLines = modified.split("\n");

  // Build LCS table
  const m = origLines.length;
  const n = modLines.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () =>
    Array(n + 1).fill(0)
  );

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (origLines[i - 1] === modLines[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // Backtrack to find diff
  const result: DiffLine[] = [];
  let i = m,
    j = n;
  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && origLines[i - 1] === modLines[j - 1]) {
      result.unshift({
        type: "unchanged",
        content: origLines[i - 1],
        leftNum: i,
        rightNum: j,
      });
      i--;
      j--;
    } else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
      result.unshift({
        type: "added",
        content: modLines[j - 1],
        leftNum: null,
        rightNum: j,
      });
      j--;
    } else {
      result.unshift({
        type: "removed",
        content: origLines[i - 1],
        leftNum: i,
        rightNum: null,
      });
      i--;
    }
  }
  return result;
}

export default function DiffCheckerClient() {
  const dict = useDictionary();
  const [original, setOriginal] = useState("");
  const [modified, setModified] = useState("");
  const [diffResult, setDiffResult] = useState<DiffLine[] | null>(null);

  const stats = useMemo(() => {
    if (!diffResult) return null;
    const additions = diffResult.filter((l) => l.type === "added").length;
    const deletions = diffResult.filter((l) => l.type === "removed").length;
    const unchanged = diffResult.filter((l) => l.type === "unchanged").length;
    return { additions, deletions, unchanged };
  }, [diffResult]);

  const diffText = useMemo(() => {
    if (!diffResult) return "";
    return diffResult
      .map((line) => {
        const prefix =
          line.type === "added" ? "+" : line.type === "removed" ? "-" : " ";
        return `${prefix} ${line.content}`;
      })
      .join("\n");
  }, [diffResult]);

  const handleCompare = () => {
    const result = computeDiff(original, modified);
    setDiffResult(result);
  };

  const handleClear = () => {
    setOriginal("");
    setModified("");
    setDiffResult(null);
  };

  return (
    <div className="space-y-4">
      {/* Input textareas side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">
            {dict.common.original}
          </label>
          <textarea
            value={original}
            onChange={(e) => setOriginal(e.target.value)}
            placeholder={`const greeting = "hello";\nconsole.log(greeting);`}
            rows={12}
            spellCheck={false}
            className="w-full font-mono text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">
            {dict.common.modified}
          </label>
          <textarea
            value={modified}
            onChange={(e) => setModified(e.target.value)}
            placeholder={`const greeting = "world";\nconsole.log(greeting);`}
            rows={12}
            spellCheck={false}
            className="w-full font-mono text-sm"
          />
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-2">
        <button
          onClick={handleCompare}
          className="px-4 py-2 text-sm font-medium rounded-md bg-primary text-white hover:bg-primary-hover transition-colors cursor-pointer"
        >
          {dict.common.compare}
        </button>
        <button
          onClick={handleClear}
          className="px-4 py-2 text-sm font-medium rounded-md bg-input-bg border border-input-border text-foreground hover:border-primary transition-colors cursor-pointer"
        >
          {dict.common.clear}
        </button>
      </div>

      {/* Diff result */}
      {diffResult && stats && (
        <div className="space-y-3">
          {/* Summary stats */}
          <div className="flex items-center justify-between">
            <div className="flex gap-4 text-sm">
              <span className="text-green-600 dark:text-green-400 font-medium">
                +{stats.additions} {dict.common.additions}
              </span>
              <span className="text-red-600 dark:text-red-400 font-medium">
                -{stats.deletions} {dict.common.deletions}
              </span>
              <span className="text-muted">
                {stats.unchanged} {dict.common.unchanged}
              </span>
            </div>
            <CopyButton text={diffText} />
          </div>

          {/* Side-by-side diff view */}
          <div className="rounded-lg border border-card-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm font-mono border-collapse">
                <tbody>
                  {diffResult.map((line, idx) => (
                    <tr
                      key={idx}
                      className={
                        line.type === "added"
                          ? "bg-green-100 dark:bg-green-900/30"
                          : line.type === "removed"
                            ? "bg-red-100 dark:bg-red-900/30"
                            : ""
                      }
                    >
                      {/* Left line number */}
                      <td className="w-12 text-right px-2 py-0.5 text-muted select-none border-r border-card-border text-xs">
                        {line.leftNum ?? ""}
                      </td>
                      {/* Right line number */}
                      <td className="w-12 text-right px-2 py-0.5 text-muted select-none border-r border-card-border text-xs">
                        {line.rightNum ?? ""}
                      </td>
                      {/* Diff indicator */}
                      <td className="w-6 text-center py-0.5 select-none border-r border-card-border">
                        {line.type === "added" && (
                          <span className="text-green-600 dark:text-green-400 font-bold">
                            +
                          </span>
                        )}
                        {line.type === "removed" && (
                          <span className="text-red-600 dark:text-red-400 font-bold">
                            -
                          </span>
                        )}
                      </td>
                      {/* Content */}
                      <td className="px-3 py-0.5 whitespace-pre-wrap break-all">
                        {line.content}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
