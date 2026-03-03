"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import QRCode from "qrcode";
import { useDictionary } from "@/i18n/DictionaryProvider";

const ERROR_LEVELS = ["L", "M", "Q", "H"] as const;
type ErrorLevel = (typeof ERROR_LEVELS)[number];

export default function QrCodeClient() {
  const dict = useDictionary();

  const SIZE_OPTIONS = [
    { label: dict.common.small, value: 200 },
    { label: dict.common.medium, value: 400 },
    { label: dict.common.large, value: 600 },
  ] as const;

  const [text, setText] = useState("");
  const [size, setSize] = useState(400);
  const [errorLevel, setErrorLevel] = useState<ErrorLevel>("M");
  const [fgColor, setFgColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [error, setError] = useState("");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(null);

  const generateQrCode = useCallback(() => {
    if (!canvasRef.current || !text.trim()) {
      if (canvasRef.current) {
        const ctx = canvasRef.current.getContext("2d");
        if (ctx) {
          ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        }
      }
      setError("");
      return;
    }

    QRCode.toCanvas(canvasRef.current, text, {
      width: size,
      margin: 2,
      color: { dark: fgColor, light: bgColor },
      errorCorrectionLevel: errorLevel,
    })
      .then(() => {
        setError("");
      })
      .catch((err: Error) => {
        setError(err.message || "Failed to generate QR code");
      });
  }, [text, size, errorLevel, fgColor, bgColor]);

  useEffect(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      generateQrCode();
    }, 300);

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [generateQrCode]);

  const handleDownload = () => {
    if (!canvasRef.current || !text.trim()) return;
    const dataUrl = canvasRef.current.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = "qrcode.png";
    link.href = dataUrl;
    link.click();
  };

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="qr-input" className="block text-sm font-medium mb-2">
          Text or URL
        </label>
        <textarea
          id="qr-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text or URL to encode..."
          rows={3}
          className="w-full font-mono text-sm"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label htmlFor="qr-size" className="block text-sm font-medium mb-2">
            {dict.common.size}
          </label>
          <select
            id="qr-size"
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            className="w-full text-sm"
          >
            {SIZE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label} ({opt.value}px)
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="qr-error" className="block text-sm font-medium mb-2">
            {dict.common.errorCorrection}
          </label>
          <select
            id="qr-error"
            value={errorLevel}
            onChange={(e) => setErrorLevel(e.target.value as ErrorLevel)}
            className="w-full text-sm"
          >
            {ERROR_LEVELS.map((level) => (
              <option key={level} value={level}>
                {level} —{" "}
                {level === "L"
                  ? "Low (7%)"
                  : level === "M"
                    ? "Medium (15%)"
                    : level === "Q"
                      ? "Quartile (25%)"
                      : "High (30%)"}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="qr-fg" className="block text-sm font-medium mb-2">
            {dict.common.foregroundColor}
          </label>
          <div className="flex items-center gap-2">
            <input
              id="qr-fg"
              type="color"
              value={fgColor}
              onChange={(e) => setFgColor(e.target.value)}
              className="w-10 h-10 rounded cursor-pointer border border-card-border"
            />
            <span className="font-mono text-sm text-muted">{fgColor}</span>
          </div>
        </div>

        <div>
          <label htmlFor="qr-bg" className="block text-sm font-medium mb-2">
            {dict.common.backgroundColor}
          </label>
          <div className="flex items-center gap-2">
            <input
              id="qr-bg"
              type="color"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
              className="w-10 h-10 rounded cursor-pointer border border-card-border"
            />
            <span className="font-mono text-sm text-muted">{bgColor}</span>
          </div>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4 text-red-700 dark:text-red-400 text-sm">
          {error}
        </div>
      )}

      <div className="flex flex-col items-center gap-4">
        <div className="bg-card border border-card-border rounded-xl p-4 inline-flex items-center justify-center min-h-[120px]">
          {text.trim() ? (
            <canvas ref={canvasRef} />
          ) : (
            <p className="text-muted text-sm">
              Enter text or a URL above to generate a QR code
            </p>
          )}
        </div>

        {text.trim() && (
          <button
            onClick={handleDownload}
            className="px-4 py-2 text-sm rounded-md bg-primary text-white hover:bg-primary-hover transition-colors cursor-pointer"
          >
            {dict.common.downloadPng}
          </button>
        )}
      </div>
    </div>
  );
}
