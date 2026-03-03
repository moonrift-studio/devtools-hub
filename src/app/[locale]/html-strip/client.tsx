"use client";

import { useState, useMemo } from "react";
import { useDictionary } from "@/i18n/DictionaryProvider";
import CopyButton from "@/components/CopyButton";

interface Options {
  preserveLineBreaks: boolean;
  preserveLinks: boolean;
  decodeEntities: boolean;
}

function stripHtmlTags(html: string, options: Options): string {
  let result = html;

  if (options.preserveLinks) {
    result = result.replace(/<a\s[^>]*href=["']([^"']*)["'][^>]*>(.*?)<\/a>/gi, "$2 ($1)");
  }

  if (options.preserveLineBreaks) {
    result = result.replace(/<br\s*\/?>/gi, "\n");
    result = result.replace(/<\/?(p|div|h[1-6]|li|tr|blockquote|pre|hr)[^>]*>/gi, "\n");
  }

  result = result.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "");
  result = result.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "");
  result = result.replace(/<!--[\s\S]*?-->/g, "");
  result = result.replace(/<[^>]+>/g, "");

  if (options.decodeEntities) {
    const entities: Record<string, string> = {
      "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"',
      "&#39;": "'", "&apos;": "'", "&nbsp;": " ", "&copy;": "\u00A9",
      "&reg;": "\u00AE", "&trade;": "\u2122", "&mdash;": "\u2014",
      "&ndash;": "\u2013", "&hellip;": "\u2026", "&laquo;": "\u00AB",
      "&raquo;": "\u00BB", "&bull;": "\u2022", "&middot;": "\u00B7",
    };
    result = result.replace(/&[#\w]+;/g, (match) => {
      if (entities[match]) return entities[match];
      const numMatch = match.match(/&#(\d+);/);
      if (numMatch) return String.fromCodePoint(parseInt(numMatch[1]));
      const hexMatch = match.match(/&#x([0-9a-fA-F]+);/);
      if (hexMatch) return String.fromCodePoint(parseInt(hexMatch[1], 16));
      return match;
    });
  }

  result = result.replace(/\n{3,}/g, "\n\n");
  result = result.replace(/[ \t]+/g, " ");
  result = result.split("\n").map((line) => line.trim()).join("\n");
  result = result.trim();

  return result;
}

export default function HtmlStripClient() {
  const dict = useDictionary();
  const [input, setInput] = useState("");
  const [options, setOptions] = useState<Options>({
    preserveLineBreaks: true,
    preserveLinks: false,
    decodeEntities: true,
  });

  const output = useMemo(() => {
    if (!input) return "";
    return stripHtmlTags(input, options);
  }, [input, options]);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        {([
          { key: "preserveLineBreaks" as const, label: "Preserve line breaks" },
          { key: "preserveLinks" as const, label: "Extract links" },
          { key: "decodeEntities" as const, label: "Decode HTML entities" },
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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="html-input" className="block text-sm font-medium mb-2">
            HTML {dict.common.input}
          </label>
          <textarea
            id="html-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="<h1>Hello</h1><p>Paste HTML here...</p>"
            rows={12}
            className="w-full font-mono text-sm"
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
            rows={12}
            className="w-full font-mono text-sm bg-input-bg"
          />
        </div>
      </div>
    </div>
  );
}
