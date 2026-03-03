"use client";

import { useState, useMemo } from "react";
import { useDictionary } from "@/i18n/DictionaryProvider";
import CopyButton from "@/components/CopyButton";

interface Options {
  preserveParagraphs: boolean;
  removeHyphenation: boolean;
  trimSpaces: boolean;
  language: "auto" | "en" | "ja";
}

function removeLineBreaks(text: string, options: Options): string {
  if (!text) return "";

  let result = text;

  // Normalize line endings
  result = result.replace(/\r\n/g, "\n").replace(/\r/g, "\n");

  if (options.removeHyphenation) {
    // Remove hyphenation at line breaks (e.g., "devel-\noper" → "developer")
    result = result.replace(/(\w)-\n(\w)/g, "$1$2");
  }

  if (options.preserveParagraphs) {
    // Preserve double line breaks (paragraph breaks)
    // Replace double+ newlines with a placeholder
    result = result.replace(/\n{2,}/g, "\u0000PARA\u0000");

    if (options.language === "ja" || (options.language === "auto" && /[\u3000-\u9FFF\uF900-\uFAFF]/.test(text))) {
      // Japanese: join lines without space
      result = result.replace(/\n/g, "");
    } else {
      // Latin languages: join lines with space
      result = result.replace(/\n/g, " ");
    }

    // Restore paragraph breaks
    result = result.replace(/\u0000PARA\u0000/g, "\n\n");
  } else {
    if (options.language === "ja" || (options.language === "auto" && /[\u3000-\u9FFF\uF900-\uFAFF]/.test(text))) {
      result = result.replace(/\n/g, "");
    } else {
      result = result.replace(/\n/g, " ");
    }
  }

  if (options.trimSpaces) {
    result = result.replace(/[ \t]+/g, " ");
    result = result.split("\n").map((line) => line.trim()).join("\n");
  }

  return result.trim();
}

export default function PdfLineBreakRemoverClient() {
  const dict = useDictionary();
  const [input, setInput] = useState("");
  const [options, setOptions] = useState<Options>({
    preserveParagraphs: true,
    removeHyphenation: true,
    trimSpaces: true,
    language: "auto",
  });

  const output = useMemo(() => removeLineBreaks(input, options), [input, options]);

  const stats = useMemo(() => {
    const inputLines = input ? input.split("\n").length : 0;
    const outputLines = output ? output.split("\n").length : 0;
    return { inputLines, outputLines, removed: inputLines - outputLines };
  }, [input, output]);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        {([
          { key: "preserveParagraphs" as const, label: "Preserve paragraphs" },
          { key: "removeHyphenation" as const, label: "Remove hyphenation" },
          { key: "trimSpaces" as const, label: "Trim extra spaces" },
        ]).map(({ key, label }) => (
          <label key={key} className="flex items-center gap-2 text-sm cursor-pointer">
            <input
              type="checkbox"
              checked={options[key]}
              onChange={(e) => setOptions({ ...options, [key]: e.target.checked })}
              className="rounded"
            />
            {label}
          </label>
        ))}
        <div className="flex items-center gap-2 text-sm">
          <label htmlFor="lang-select" className="text-muted">Language:</label>
          <select
            id="lang-select"
            value={options.language}
            onChange={(e) => setOptions({ ...options, language: e.target.value as Options["language"] })}
            className="bg-input-bg border border-input-border rounded px-2 py-1 text-sm"
          >
            <option value="auto">Auto-detect</option>
            <option value="en">English</option>
            <option value="ja">Japanese</option>
          </select>
        </div>
      </div>

      {stats.removed > 0 && (
        <div className="flex gap-4 text-sm">
          <span className="text-muted">Input lines: <strong>{stats.inputLines}</strong></span>
          <span className="text-muted">Output lines: <strong>{stats.outputLines}</strong></span>
          <span className="text-success">Removed: <strong>{stats.removed}</strong> line breaks</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="pdf-input" className="block text-sm font-medium mb-2">
            {dict.common.input}
          </label>
          <textarea
            id="pdf-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste text copied from PDF here..."
            rows={14}
            className="w-full text-sm"
          />
        </div>
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium">{dict.common.output}</label>
            <CopyButton text={output} />
          </div>
          <textarea
            value={output}
            readOnly
            rows={14}
            className="w-full text-sm bg-input-bg"
          />
        </div>
      </div>
    </div>
  );
}
