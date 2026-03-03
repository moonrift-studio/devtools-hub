"use client";

import { useState, useMemo } from "react";
import { useDictionary } from "@/i18n/DictionaryProvider";
import CopyButton from "@/components/CopyButton";

function toFullwidth(str: string): string {
  return str.replace(/[\x21-\x7E]/g, (ch) =>
    String.fromCharCode(ch.charCodeAt(0) + 0xFEE0)
  ).replace(/ /g, "\u3000");
}

function toHalfwidth(str: string): string {
  return str.replace(/[\uFF01-\uFF5E]/g, (ch) =>
    String.fromCharCode(ch.charCodeAt(0) - 0xFEE0)
  ).replace(/\u3000/g, " ");
}

function toFullwidthKatakana(str: string): string {
  const map: Record<string, string> = {
    "\uFF66": "\u30F2", "\uFF67": "\u30A1", "\uFF68": "\u30A3", "\uFF69": "\u30A5",
    "\uFF6A": "\u30A7", "\uFF6B": "\u30A9", "\uFF6C": "\u30E3", "\uFF6D": "\u30E5",
    "\uFF6E": "\u30E7", "\uFF6F": "\u30C3", "\uFF70": "\u30FC", "\uFF71": "\u30A2",
    "\uFF72": "\u30A4", "\uFF73": "\u30A6", "\uFF74": "\u30A8", "\uFF75": "\u30AA",
    "\uFF76": "\u30AB", "\uFF77": "\u30AD", "\uFF78": "\u30AF", "\uFF79": "\u30B1",
    "\uFF7A": "\u30B3", "\uFF7B": "\u30B5", "\uFF7C": "\u30B7", "\uFF7D": "\u30B9",
    "\uFF7E": "\u30BB", "\uFF7F": "\u30BD", "\uFF80": "\u30BF", "\uFF81": "\u30C1",
    "\uFF82": "\u30C4", "\uFF83": "\u30C6", "\uFF84": "\u30C8", "\uFF85": "\u30CA",
    "\uFF86": "\u30CB", "\uFF87": "\u30CC", "\uFF88": "\u30CD", "\uFF89": "\u30CE",
    "\uFF8A": "\u30CF", "\uFF8B": "\u30D2", "\uFF8C": "\u30D5", "\uFF8D": "\u30D8",
    "\uFF8E": "\u30DB", "\uFF8F": "\u30DE", "\uFF90": "\u30DF", "\uFF91": "\u30E0",
    "\uFF92": "\u30E1", "\uFF93": "\u30E2", "\uFF94": "\u30E4", "\uFF95": "\u30E6",
    "\uFF96": "\u30E8", "\uFF97": "\u30E9", "\uFF98": "\u30EA", "\uFF99": "\u30EB",
    "\uFF9A": "\u30EC", "\uFF9B": "\u30ED", "\uFF9C": "\u30EF", "\uFF9D": "\u30F3",
  };
  const dakuten: Record<string, string> = {
    "\u30AB": "\u30AC", "\u30AD": "\u30AE", "\u30AF": "\u30B0", "\u30B1": "\u30B2",
    "\u30B3": "\u30B4", "\u30B5": "\u30B6", "\u30B7": "\u30B8", "\u30B9": "\u30BA",
    "\u30BB": "\u30BC", "\u30BD": "\u30BE", "\u30BF": "\u30C0", "\u30C1": "\u30C2",
    "\u30C4": "\u30C5", "\u30C6": "\u30C7", "\u30C8": "\u30C9", "\u30CF": "\u30D0",
    "\u30D2": "\u30D3", "\u30D5": "\u30D6", "\u30D8": "\u30D9", "\u30DB": "\u30DC",
    "\u30A6": "\u30F4",
  };
  const handakuten: Record<string, string> = {
    "\u30CF": "\u30D1", "\u30D2": "\u30D4", "\u30D5": "\u30D7", "\u30D8": "\u30DA",
    "\u30DB": "\u30DD",
  };

  let result = "";
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    const mapped = map[ch];
    if (mapped) {
      const next = str[i + 1];
      if (next === "\uFF9E" && dakuten[mapped]) {
        result += dakuten[mapped];
        i++;
      } else if (next === "\uFF9F" && handakuten[mapped]) {
        result += handakuten[mapped];
        i++;
      } else {
        result += mapped;
      }
    } else {
      result += ch;
    }
  }
  return result;
}

type Mode = "toFullwidth" | "toHalfwidth" | "toFullwidthKana" | "alphaToFull" | "alphaToHalf";

export default function HalfwidthFullwidthClient() {
  const dict = useDictionary();
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<Mode>("toFullwidth");

  const output = useMemo(() => {
    if (!input) return "";
    switch (mode) {
      case "toFullwidth":
        return toFullwidth(input);
      case "toHalfwidth":
        return toHalfwidth(input);
      case "toFullwidthKana":
        return toFullwidthKatakana(input);
      case "alphaToFull":
        return input.replace(/[A-Za-z0-9]/g, (ch) =>
          String.fromCharCode(ch.charCodeAt(0) + 0xFEE0)
        );
      case "alphaToHalf":
        return input.replace(/[\uFF21-\uFF3A\uFF41-\uFF5A\uFF10-\uFF19]/g, (ch) =>
          String.fromCharCode(ch.charCodeAt(0) - 0xFEE0)
        );
      default:
        return input;
    }
  }, [input, mode]);

  const modes: { value: Mode; label: string }[] = [
    { value: "toFullwidth", label: "ABC → ＡＢＣ" },
    { value: "toHalfwidth", label: "ＡＢＣ → ABC" },
    { value: "toFullwidthKana", label: "ｶﾀｶﾅ → カタカナ" },
    { value: "alphaToFull", label: "abc123 → ａｂｃ１２３" },
    { value: "alphaToHalf", label: "ａｂｃ１２３ → abc123" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {modes.map((m) => (
          <button
            key={m.value}
            onClick={() => setMode(m.value)}
            className={`px-3 py-1.5 rounded-lg text-sm font-mono cursor-pointer transition-colors ${
              mode === m.value
                ? "bg-primary text-white"
                : "bg-input-bg border border-input-border text-muted hover:text-foreground"
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="hw-input" className="block text-sm font-medium mb-2">
            {dict.common.input}
          </label>
          <textarea
            id="hw-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter text to convert..."
            rows={10}
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
            rows={10}
            className="w-full font-mono text-sm bg-input-bg"
          />
        </div>
      </div>
    </div>
  );
}
