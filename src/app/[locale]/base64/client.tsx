"use client";

import { useState } from "react";
import CopyButton from "@/components/CopyButton";
import { useDictionary } from "@/i18n/DictionaryProvider";

export default function Base64Client() {
  const dict = useDictionary();
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const handleEncode = () => {
    setError("");
    try {
      const encoded = btoa(
        String.fromCodePoint(...new TextEncoder().encode(input))
      );
      setOutput(encoded);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to encode input.");
    }
  };

  const handleDecode = () => {
    setError("");
    try {
      const decoded = new TextDecoder().decode(
        Uint8Array.from(atob(input), (c) => c.codePointAt(0)!)
      );
      setOutput(decoded);
    } catch (e) {
      setError(
        e instanceof Error ? e.message : "Failed to decode input. Make sure it is valid Base64."
      );
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Input</label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text to encode or Base64 string to decode..."
          className="w-full h-40 p-3 rounded-lg bg-card border border-card-border font-mono text-sm resize-y focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div className="flex gap-3">
        <button
          onClick={handleEncode}
          className="px-4 py-2 rounded-lg bg-primary text-white font-medium hover:bg-primary-hover transition-colors cursor-pointer"
        >
          {dict.common.encode}
        </button>
        <button
          onClick={handleDecode}
          className="px-4 py-2 rounded-lg bg-primary text-white font-medium hover:bg-primary-hover transition-colors cursor-pointer"
        >
          {dict.common.decode}
        </button>
      </div>

      {error && (
        <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
          {error}
        </div>
      )}

      <div>
        <div className="flex items-center justify-between mb-1">
          <label className="block text-sm font-medium">Output</label>
          {output && <CopyButton text={output} />}
        </div>
        <textarea
          value={output}
          readOnly
          placeholder="Result will appear here..."
          className="w-full h-40 p-3 rounded-lg bg-card border border-card-border font-mono text-sm resize-y focus:outline-none"
        />
      </div>
    </div>
  );
}
