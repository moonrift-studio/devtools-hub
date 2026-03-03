"use client";

import { useState, useMemo, useCallback } from "react";
import { useDictionary } from "@/i18n/DictionaryProvider";
import CopyButton from "@/components/CopyButton";

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const match = hex.replace("#", "").match(/^([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  if (!match) return null;
  return { r: parseInt(match[1], 16), g: parseInt(match[2], 16), b: parseInt(match[3], 16) };
}

function rgbToHex(r: number, g: number, b: number): string {
  return "#" + [r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("");
}

function rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number } {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) return { h: 0, s: 0, l: Math.round(l * 100) };
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h = 0;
  if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
  else if (max === g) h = ((b - r) / d + 2) / 6;
  else h = ((r - g) / d + 4) / 6;
  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}

function hslToRgb(h: number, s: number, l: number): { r: number; g: number; b: number } {
  h /= 360; s /= 100; l /= 100;
  if (s === 0) { const v = Math.round(l * 255); return { r: v, g: v, b: v }; }
  const hue2rgb = (p: number, q: number, t: number) => {
    if (t < 0) t += 1; if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  return {
    r: Math.round(hue2rgb(p, q, h + 1 / 3) * 255),
    g: Math.round(hue2rgb(p, q, h) * 255),
    b: Math.round(hue2rgb(p, q, h - 1 / 3) * 255),
  };
}

function generatePalette(hex: string): string[] {
  const rgb = hexToRgb(hex);
  if (!rgb) return [];
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
  const shades: string[] = [];
  for (let i = 0; i <= 9; i++) {
    const l = Math.round(95 - i * 8.5);
    const { r, g, b } = hslToRgb(hsl.h, hsl.s, Math.max(5, Math.min(95, l)));
    shades.push(rgbToHex(r, g, b));
  }
  return shades;
}

function generateHarmony(hex: string): { name: string; colors: string[] }[] {
  const rgb = hexToRgb(hex);
  if (!rgb) return [];
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
  const makeColor = (hOffset: number) => {
    const { r, g, b } = hslToRgb((hsl.h + hOffset + 360) % 360, hsl.s, hsl.l);
    return rgbToHex(r, g, b);
  };
  return [
    { name: "Complementary", colors: [hex, makeColor(180)] },
    { name: "Analogous", colors: [makeColor(-30), hex, makeColor(30)] },
    { name: "Triadic", colors: [hex, makeColor(120), makeColor(240)] },
    { name: "Split Complementary", colors: [hex, makeColor(150), makeColor(210)] },
  ];
}

function getContrastRatio(hex1: string, hex2: string): number {
  const luminance = (hex: string) => {
    const rgb = hexToRgb(hex);
    if (!rgb) return 0;
    const [rs, gs, bs] = [rgb.r, rgb.g, rgb.b].map((v) => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  };
  const l1 = luminance(hex1);
  const l2 = luminance(hex2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

export default function ColorPickerClient() {
  const dict = useDictionary();
  const [color, setColor] = useState("#2563eb");
  const [hexInput, setHexInput] = useState("#2563eb");

  const rgb = useMemo(() => hexToRgb(color), [color]);
  const hsl = useMemo(() => rgb ? rgbToHsl(rgb.r, rgb.g, rgb.b) : null, [rgb]);
  const palette = useMemo(() => generatePalette(color), [color]);
  const harmonies = useMemo(() => generateHarmony(color), [color]);
  const contrastWhite = useMemo(() => getContrastRatio(color, "#ffffff").toFixed(2), [color]);
  const contrastBlack = useMemo(() => getContrastRatio(color, "#000000").toFixed(2), [color]);

  const handleHexChange = useCallback((value: string) => {
    setHexInput(value);
    if (/^#[0-9a-fA-F]{6}$/.test(value)) {
      setColor(value);
    }
  }, []);

  const cssValues = useMemo(() => {
    if (!rgb || !hsl) return { hex: color, rgb: "", hsl: "" };
    return {
      hex: color,
      rgb: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`,
      hsl: `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`,
    };
  }, [color, rgb, hsl]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start gap-6">
        <div>
          <input
            type="color"
            value={color}
            onChange={(e) => { setColor(e.target.value); setHexInput(e.target.value); }}
            className="w-32 h-32 cursor-pointer rounded-xl border-2 border-card-border"
          />
        </div>
        <div className="space-y-3 flex-1 min-w-[240px]">
          {([
            { label: "HEX", value: cssValues.hex },
            { label: "RGB", value: cssValues.rgb },
            { label: "HSL", value: cssValues.hsl },
          ]).map(({ label, value }) => (
            <div key={label} className="flex items-center gap-2">
              <span className="text-sm font-medium w-10">{label}</span>
              {label === "HEX" ? (
                <input
                  type="text"
                  value={hexInput}
                  onChange={(e) => handleHexChange(e.target.value)}
                  className="flex-1 font-mono text-sm bg-input-bg border border-input-border rounded px-3 py-1.5"
                />
              ) : (
                <input
                  type="text"
                  value={value}
                  readOnly
                  className="flex-1 font-mono text-sm bg-input-bg border border-input-border rounded px-3 py-1.5"
                />
              )}
              <CopyButton text={value} />
            </div>
          ))}
        </div>
      </div>

      {/* Contrast */}
      <div>
        <h2 className="text-sm font-semibold mb-3">Contrast Ratio (WCAG)</h2>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl p-4 text-center border border-card-border" style={{ backgroundColor: color, color: "#ffffff" }}>
            <p className="text-lg font-bold">White Text</p>
            <p className="text-sm mt-1">{contrastWhite}:1 {parseFloat(contrastWhite) >= 4.5 ? "AA \u2713" : parseFloat(contrastWhite) >= 3 ? "AA Large" : "Fail"}</p>
          </div>
          <div className="rounded-xl p-4 text-center border border-card-border" style={{ backgroundColor: color, color: "#000000" }}>
            <p className="text-lg font-bold">Black Text</p>
            <p className="text-sm mt-1">{contrastBlack}:1 {parseFloat(contrastBlack) >= 4.5 ? "AA \u2713" : parseFloat(contrastBlack) >= 3 ? "AA Large" : "Fail"}</p>
          </div>
        </div>
      </div>

      {/* Palette */}
      <div>
        <h2 className="text-sm font-semibold mb-3">Shades</h2>
        <div className="flex rounded-xl overflow-hidden border border-card-border">
          {palette.map((shade, i) => (
            <button
              key={i}
              onClick={() => { setColor(shade); setHexInput(shade); }}
              className="flex-1 h-12 cursor-pointer transition-transform hover:scale-y-110 relative group"
              style={{ backgroundColor: shade }}
              title={shade}
            >
              <span className="absolute inset-0 flex items-center justify-center text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: i < 5 ? "#000" : "#fff" }}>
                {shade}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Color Harmonies */}
      <div>
        <h2 className="text-sm font-semibold mb-3">Color Harmonies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {harmonies.map((harmony) => (
            <div key={harmony.name} className="border border-card-border rounded-xl p-3">
              <p className="text-xs text-muted mb-2">{harmony.name}</p>
              <div className="flex rounded-lg overflow-hidden">
                {harmony.colors.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => { setColor(c); setHexInput(c); }}
                    className="flex-1 h-10 cursor-pointer relative group"
                    style={{ backgroundColor: c }}
                    title={c}
                  >
                    <span className="absolute inset-0 flex items-center justify-center text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity mix-blend-difference text-white">
                      {c}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
