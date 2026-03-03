"use client";

import { useState } from "react";
import CopyButton from "@/components/CopyButton";
import { useDictionary } from "@/i18n/DictionaryProvider";

export default function JsonFormatterClient() {
  const dict = useDictionary();
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const handleFormat = () => {
    if (!input.trim()) {
      setOutput("");
      setError("");
      return;
    }
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setError("");
    } catch (e) {
      setOutput("");
      setError((e as Error).message);
    }
  };

  const handleMinify = () => {
    if (!input.trim()) {
      setOutput("");
      setError("");
      return;
    }
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
      setError("");
    } catch (e) {
      setOutput("");
      setError((e as Error).message);
    }
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
    setError("");
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setInput(text);
    } catch {
      // Clipboard access denied or unavailable
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="text-sm font-medium">Input</label>
          <button
            onClick={handlePaste}
            className="px-3 py-1.5 text-sm rounded-md bg-input-bg border border-input-border text-foreground hover:border-primary transition-colors cursor-pointer"
          >
            {dict.common.paste}
          </button>
        </div>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={'{\n  "name": "John Doe",\n  "age": 30,\n  "email": "john@example.com",\n  "hobbies": ["reading", "coding", "hiking"]\n}'}
          rows={10}
          className="w-full"
        />
      </div>

      <div className="flex gap-2">
        <button
          onClick={handleFormat}
          className="px-4 py-2 text-sm font-medium rounded-md bg-primary text-white hover:bg-primary-hover transition-colors cursor-pointer"
        >
          {dict.common.format}
        </button>
        <button
          onClick={handleMinify}
          className="px-4 py-2 text-sm font-medium rounded-md bg-primary text-white hover:bg-primary-hover transition-colors cursor-pointer"
        >
          {dict.common.minify}
        </button>
        <button
          onClick={handleClear}
          className="px-4 py-2 text-sm font-medium rounded-md bg-input-bg border border-input-border text-foreground hover:border-primary transition-colors cursor-pointer"
        >
          {dict.common.clear}
        </button>
      </div>

      {error && (
        <div className="p-3 rounded-md bg-error/10 border border-error/30 text-error text-sm">
          <span className="font-medium">Invalid JSON:</span> {error}
        </div>
      )}

      {output && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium">Output</label>
            <CopyButton text={output} />
          </div>
          <pre className="w-full p-3 rounded-lg bg-input-bg border border-input-border text-sm font-mono overflow-auto max-h-96 whitespace-pre-wrap break-words">
            {output}
          </pre>
        </div>
      )}
    </div>
  );
}
