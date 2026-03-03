"use client";

import { useState, useEffect, useCallback } from "react";
import CopyButton from "@/components/CopyButton";
import { useDictionary } from "@/i18n/DictionaryProvider";

function getRelativeTime(timestamp: number): string {
  const now = Math.floor(Date.now() / 1000);
  const diff = now - timestamp;
  const absDiff = Math.abs(diff);
  const suffix = diff >= 0 ? "ago" : "from now";

  if (absDiff < 60) return `${absDiff} second${absDiff !== 1 ? "s" : ""} ${suffix}`;
  if (absDiff < 3600) {
    const mins = Math.floor(absDiff / 60);
    return `${mins} minute${mins !== 1 ? "s" : ""} ${suffix}`;
  }
  if (absDiff < 86400) {
    const hours = Math.floor(absDiff / 3600);
    return `${hours} hour${hours !== 1 ? "s" : ""} ${suffix}`;
  }
  if (absDiff < 2592000) {
    const days = Math.floor(absDiff / 86400);
    return `${days} day${days !== 1 ? "s" : ""} ${suffix}`;
  }
  if (absDiff < 31536000) {
    const months = Math.floor(absDiff / 2592000);
    return `${months} month${months !== 1 ? "s" : ""} ${suffix}`;
  }
  const years = Math.floor(absDiff / 31536000);
  return `${years} year${years !== 1 ? "s" : ""} ${suffix}`;
}

function formatDatetimeLocal(date: Date): string {
  const pad = (n: number) => n.toString().padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

interface ConversionResult {
  utc: string;
  local: string;
  iso: string;
  relative: string;
  timestamp: number;
}

function convertTimestamp(timestamp: number): ConversionResult | null {
  const date = new Date(timestamp * 1000);
  if (isNaN(date.getTime())) return null;

  return {
    utc: date.toUTCString(),
    local: date.toLocaleString(),
    iso: date.toISOString(),
    relative: getRelativeTime(timestamp),
    timestamp,
  };
}

function ResultRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3 py-2 border-b border-card-border last:border-b-0">
      <div className="min-w-0">
        <span className="text-xs text-muted block">{label}</span>
        <span className="font-mono text-sm break-all">{value}</span>
      </div>
      <CopyButton text={value} />
    </div>
  );
}

export default function TimestampConverterClient() {
  const [currentTimestamp, setCurrentTimestamp] = useState(Math.floor(Date.now() / 1000));
  const [timestampInput, setTimestampInput] = useState("");
  const [datetimeInput, setDatetimeInput] = useState(formatDatetimeLocal(new Date()));

  const [tsToDateResult, setTsToDateResult] = useState<ConversionResult | null>(null);
  const [dateToTsResult, setDateToTsResult] = useState<ConversionResult | null>(null);

  const dict = useDictionary();

  // Update current timestamp every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTimestamp(Math.floor(Date.now() / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Auto-convert timestamp to date
  const handleTimestampInput = useCallback((value: string) => {
    setTimestampInput(value);
    if (!value.trim()) {
      setTsToDateResult(null);
      return;
    }
    const num = Number(value);
    if (isNaN(num)) {
      setTsToDateResult(null);
      return;
    }
    // Support seconds and milliseconds
    const ts = value.length >= 13 ? Math.floor(num / 1000) : num;
    setTsToDateResult(convertTimestamp(ts));
  }, []);

  // Auto-convert date to timestamp
  const handleDatetimeInput = useCallback((value: string) => {
    setDatetimeInput(value);
    if (!value.trim()) {
      setDateToTsResult(null);
      return;
    }
    const date = new Date(value);
    if (isNaN(date.getTime())) {
      setDateToTsResult(null);
      return;
    }
    const ts = Math.floor(date.getTime() / 1000);
    setDateToTsResult(convertTimestamp(ts));
  }, []);

  // Refresh relative times every second
  useEffect(() => {
    const interval = setInterval(() => {
      if (tsToDateResult) {
        setTsToDateResult((prev) =>
          prev ? { ...prev, relative: getRelativeTime(prev.timestamp) } : null
        );
      }
      if (dateToTsResult) {
        setDateToTsResult((prev) =>
          prev ? { ...prev, relative: getRelativeTime(prev.timestamp) } : null
        );
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [tsToDateResult, dateToTsResult]);

  return (
    <div className="space-y-8">
      {/* Current Unix Timestamp */}
      <div className="text-center p-4 bg-input-bg rounded-lg border border-input-border">
        <p className="text-sm text-muted mb-1">{dict.common.currentTimestamp}</p>
        <div className="flex items-center justify-center gap-3">
          <span className="text-3xl font-mono font-bold text-primary">
            {currentTimestamp}
          </span>
          <CopyButton text={currentTimestamp.toString()} />
        </div>
      </div>

      {/* Timestamp to Date */}
      <div>
        <h2 className="text-lg font-semibold mb-3">{dict.common.timestampToDate}</h2>
        <div className="space-y-3">
          <div>
            <label className="block text-sm text-muted mb-1">
              Unix Timestamp (seconds or milliseconds)
            </label>
            <input
              type="number"
              placeholder="e.g. 1700000000"
              value={timestampInput}
              onChange={(e) => handleTimestampInput(e.target.value)}
            />
          </div>
          <button
            onClick={() => handleTimestampInput(currentTimestamp.toString())}
            className="px-4 py-2 text-sm rounded-md bg-primary text-white hover:bg-primary-hover transition-colors cursor-pointer"
          >
            {dict.common.useCurrent}
          </button>

          {tsToDateResult && (
            <div className="mt-3 p-4 bg-input-bg rounded-lg border border-input-border">
              <ResultRow label={dict.common.utc} value={tsToDateResult.utc} />
              <ResultRow label={dict.common.localTime} value={tsToDateResult.local} />
              <ResultRow label={dict.common.iso8601} value={tsToDateResult.iso} />
              <ResultRow label={dict.common.relative} value={tsToDateResult.relative} />
              <ResultRow label="Unix Timestamp" value={tsToDateResult.timestamp.toString()} />
            </div>
          )}
        </div>
      </div>

      {/* Divider */}
      <hr className="border-card-border" />

      {/* Date to Timestamp */}
      <div>
        <h2 className="text-lg font-semibold mb-3">{dict.common.dateToTimestamp}</h2>
        <div className="space-y-3">
          <div>
            <label className="block text-sm text-muted mb-1">
              Date and Time (local timezone)
            </label>
            <input
              type="datetime-local"
              step="1"
              value={datetimeInput}
              onChange={(e) => handleDatetimeInput(e.target.value)}
              className="bg-input-bg border border-input-border rounded-lg px-3 py-2 font-mono text-sm w-full outline-none focus:border-primary transition-colors"
            />
          </div>
          <button
            onClick={() => handleDatetimeInput(formatDatetimeLocal(new Date()))}
            className="px-4 py-2 text-sm rounded-md bg-primary text-white hover:bg-primary-hover transition-colors cursor-pointer"
          >
            {dict.common.useCurrent}
          </button>

          {dateToTsResult && (
            <div className="mt-3 p-4 bg-input-bg rounded-lg border border-input-border">
              <ResultRow label="Unix Timestamp" value={dateToTsResult.timestamp.toString()} />
              <ResultRow label={dict.common.utc} value={dateToTsResult.utc} />
              <ResultRow label={dict.common.localTime} value={dateToTsResult.local} />
              <ResultRow label={dict.common.iso8601} value={dateToTsResult.iso} />
              <ResultRow label={dict.common.relative} value={dateToTsResult.relative} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
