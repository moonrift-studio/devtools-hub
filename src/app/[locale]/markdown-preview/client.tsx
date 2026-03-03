"use client";

import { useState, useMemo } from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";
import { useDictionary } from "@/i18n/DictionaryProvider";
import CopyButton from "@/components/CopyButton";

const SAMPLE_MARKDOWN = `# Markdown Preview

## Features

- **Bold** and *italic* text
- [Links](https://example.com)
- Inline \`code\`

### Code Block

\`\`\`javascript
function hello() {
  console.log("Hello, World!");
}
\`\`\`

### Table

| Name | Value |
|------|-------|
| A    | 100   |
| B    | 200   |

> Blockquote example

1. Ordered list
2. Second item
3. Third item
`;

export default function MarkdownPreviewClient() {
  const dict = useDictionary();
  const [input, setInput] = useState(SAMPLE_MARKDOWN);
  const [view, setView] = useState<"preview" | "html">("preview");

  const html = useMemo(() => {
    if (!input) return "";
    if (typeof window === "undefined") return "";
    try {
      const rawHtml = marked.parse(input, { async: false }) as string;
      return DOMPurify.sanitize(rawHtml);
    } catch {
      return "<p>Error parsing markdown</p>";
    }
  }, [input]);

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <button
          onClick={() => setView("preview")}
          className={`px-4 py-1.5 rounded-lg text-sm cursor-pointer transition-colors ${
            view === "preview"
              ? "bg-primary text-white"
              : "bg-input-bg border border-input-border text-muted hover:text-foreground"
          }`}
        >
          Preview
        </button>
        <button
          onClick={() => setView("html")}
          className={`px-4 py-1.5 rounded-lg text-sm cursor-pointer transition-colors ${
            view === "html"
              ? "bg-primary text-white"
              : "bg-input-bg border border-input-border text-muted hover:text-foreground"
          }`}
        >
          HTML
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="md-input" className="block text-sm font-medium mb-2">
            Markdown {dict.common.input}
          </label>
          <textarea
            id="md-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter Markdown here..."
            rows={20}
            className="w-full font-mono text-sm"
          />
        </div>
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium">
              {view === "preview" ? "Preview" : "HTML"}
            </label>
            <CopyButton text={html} />
          </div>
          {view === "preview" ? (
            <div
              className="prose prose-sm dark:prose-invert max-w-none border border-input-border rounded-lg p-4 min-h-[480px] overflow-auto bg-input-bg"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          ) : (
            <textarea
              value={html}
              readOnly
              rows={20}
              className="w-full font-mono text-sm bg-input-bg"
            />
          )}
        </div>
      </div>
    </div>
  );
}
