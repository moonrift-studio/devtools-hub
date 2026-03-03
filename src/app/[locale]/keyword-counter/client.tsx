"use client";

import { useState, useMemo } from "react";
import { useDictionary } from "@/i18n/DictionaryProvider";
import CopyButton from "@/components/CopyButton";

interface KeywordResult {
  keyword: string;
  count: number;
}

function countKeywords(
  text: string,
  keywords: string[],
  caseSensitive: boolean
): KeywordResult[] {
  if (!text || keywords.length === 0) return [];

  const searchText = caseSensitive ? text : text.toLowerCase();

  return keywords.map((keyword) => {
    if (!keyword) return { keyword, count: 0 };
    const searchKeyword = caseSensitive ? keyword : keyword.toLowerCase();
    let count = 0;
    let pos = 0;
    while ((pos = searchText.indexOf(searchKeyword, pos)) !== -1) {
      count++;
      pos += searchKeyword.length;
    }
    return { keyword, count };
  });
}

export default function KeywordCounterClient() {
  const dict = useDictionary();
  const [text, setText] = useState("");
  const [keywords, setKeywords] = useState("");
  const [caseSensitive, setCaseSensitive] = useState(false);

  const keywordList = useMemo(() => {
    return keywords
      .split("\n")
      .map((k) => k.trim())
      .filter((k) => k.length > 0);
  }, [keywords]);

  const results = useMemo(() => {
    return countKeywords(text, keywordList, caseSensitive);
  }, [text, keywordList, caseSensitive]);

  const totalFound = results.reduce((sum, r) => sum + r.count, 0);

  const resultText = results
    .map((r) => `${r.keyword}: ${r.count}`)
    .join("\n");

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="keywords-input"
            className="block text-sm font-medium mb-2"
          >
            Keywords
          </label>
          <textarea
            id="keywords-input"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            placeholder={"keyword1\nkeyword2\nkeyword3"}
            rows={10}
            className="w-full text-sm font-mono"
          />
        </div>
        <div>
          <label
            htmlFor="source-text"
            className="block text-sm font-medium mb-2"
          >
            {dict.common.input}
          </label>
          <textarea
            id="source-text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste your text here..."
            rows={10}
            className="w-full text-sm"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <label className="flex items-center gap-2 text-sm cursor-pointer">
          <input
            type="checkbox"
            checked={caseSensitive}
            onChange={(e) => setCaseSensitive(e.target.checked)}
            className="rounded"
          />
          Case sensitive
        </label>
        {results.length > 0 && (
          <span className="text-sm text-muted ml-auto">
            Total: <strong className="text-foreground">{totalFound}</strong>{" "}
            matches
          </span>
        )}
      </div>

      {results.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium">{dict.common.output}</label>
            <CopyButton text={resultText} />
          </div>
          <div className="border border-card-border rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-card-border bg-card">
                  <th className="text-left py-2 px-3 font-medium text-muted w-8">
                    #
                  </th>
                  <th className="text-left py-2 px-3 font-medium text-muted">
                    Keyword
                  </th>
                  <th className="text-right py-2 px-3 font-medium text-muted w-20">
                    Count
                  </th>
                </tr>
              </thead>
              <tbody>
                {results.map((item, i) => (
                  <tr
                    key={i}
                    className="border-b border-card-border last:border-b-0 hover:bg-input-bg transition-colors"
                  >
                    <td className="py-2 px-3 text-muted tabular-nums">
                      {i + 1}
                    </td>
                    <td className="py-2 px-3 font-mono">{item.keyword}</td>
                    <td className="py-2 px-3 text-right font-mono tabular-nums">
                      <span
                        className={
                          item.count > 0 ? "text-success" : "text-muted"
                        }
                      >
                        {item.count}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
