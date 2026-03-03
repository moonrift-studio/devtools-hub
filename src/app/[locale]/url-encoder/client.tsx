"use client";

import { useState } from "react";
import CopyButton from "@/components/CopyButton";
import { useDictionary } from "@/i18n/DictionaryProvider";

type EncodeMode = "component" | "uri";

export default function UrlEncoderClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [mode, setMode] = useState<EncodeMode>("component");
  const dict = useDictionary();

  const handleEncode = () => {
    setError("");
    try {
      const encoded =
        mode === "component"
          ? encodeURIComponent(input)
          : encodeURI(input);
      setOutput(encoded);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to encode input.");
    }
  };

  const handleDecode = () => {
    setError("");
    try {
      const decoded =
        mode === "component"
          ? decodeURIComponent(input)
          : decodeURI(input);
      setOutput(decoded);
    } catch (e) {
      setError(
        e instanceof Error
          ? e.message
          : "Failed to decode input. Make sure it is a valid encoded URL."
      );
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">{dict.common.input}</label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text to encode or encoded URL to decode..."
          className="w-full h-40 p-3 rounded-lg bg-card border border-card-border font-mono text-sm resize-y focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Mode</label>
        <div className="flex gap-3">
          <button
            onClick={() => setMode("component")}
            className={`px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer ${
              mode === "component"
                ? "bg-primary text-white"
                : "bg-card border border-card-border text-muted hover:text-foreground"
            }`}
          >
            {dict.common.encodeComponent}
          </button>
          <button
            onClick={() => setMode("uri")}
            className={`px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer ${
              mode === "uri"
                ? "bg-primary text-white"
                : "bg-card border border-card-border text-muted hover:text-foreground"
            }`}
          >
            {dict.common.encodeUri}
          </button>
        </div>
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
          <label className="block text-sm font-medium">{dict.common.output}</label>
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
