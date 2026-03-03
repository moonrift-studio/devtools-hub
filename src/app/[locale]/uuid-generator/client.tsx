"use client";

import { useState } from "react";
import CopyButton from "@/components/CopyButton";
import { useDictionary } from "@/i18n/DictionaryProvider";

export default function UuidGeneratorClient() {
  const [count, setCount] = useState(5);
  const [uppercase, setUppercase] = useState(false);
  const [uuids, setUuids] = useState<string[]>([]);
  const dict = useDictionary();

  function generateUuids() {
    const clamped = Math.max(1, Math.min(100, count));
    const generated = Array.from({ length: clamped }, () =>
      crypto.randomUUID()
    );
    setUuids(
      uppercase ? generated.map((u) => u.toUpperCase()) : generated
    );
  }

  const displayedUuids = uppercase
    ? uuids.map((u) => u.toUpperCase())
    : uuids.map((u) => u.toLowerCase());

  const allUuidsText = displayedUuids.join("\n");

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end gap-4">
        <div>
          <label htmlFor="uuid-count" className="block text-sm font-medium mb-2">
            Number of UUIDs
          </label>
          <input
            id="uuid-count"
            type="number"
            min={1}
            max={100}
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            className="w-28 font-mono text-sm"
          />
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="uuid-case" className="text-sm font-medium cursor-pointer">
            {uppercase ? dict.common.uppercase : dict.common.lowercase}
          </label>
          <button
            id="uuid-case"
            type="button"
            role="switch"
            aria-checked={uppercase}
            onClick={() => setUppercase(!uppercase)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
              uppercase ? "bg-primary" : "bg-card-border"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 rounded-full bg-white transition-transform ${
                uppercase ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>

        <button
          onClick={generateUuids}
          className="px-5 py-2 rounded-lg bg-primary text-white hover:bg-primary-hover transition-colors font-medium cursor-pointer"
        >
          {dict.common.generate}
        </button>
      </div>

      {displayedUuids.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted">
              {displayedUuids.length} UUID{displayedUuids.length !== 1 && "s"} {dict.common.generated}
            </span>
            <CopyButton text={allUuidsText} />
          </div>

          <div className="space-y-2">
            {displayedUuids.map((uuid, index) => (
              <div
                key={index}
                className="flex items-center justify-between gap-3 bg-card border border-card-border rounded-xl px-4 py-2.5"
              >
                <code className="font-mono text-sm break-all">{uuid}</code>
                <CopyButton text={uuid} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
