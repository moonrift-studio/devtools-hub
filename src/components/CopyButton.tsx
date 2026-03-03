"use client";

import { useState } from "react";
import { useDictionary } from "@/i18n/DictionaryProvider";

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const dict = useDictionary();

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="px-3 py-1.5 text-sm rounded-md bg-primary text-white hover:bg-primary-hover transition-colors cursor-pointer"
    >
      {copied ? dict.common.copied : dict.common.copy}
    </button>
  );
}
