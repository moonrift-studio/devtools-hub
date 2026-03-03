"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import type { Locale } from "@/i18n/config";

export default function LanguageSwitcher({
  currentLocale,
  localeNames,
}: {
  currentLocale: Locale;
  localeNames: Record<string, string>;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const switchPath = (locale: string) => {
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="px-2 py-1 text-sm border border-card-border rounded-md hover:bg-card transition-colors cursor-pointer"
      >
        {localeNames[currentLocale]}
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-1 bg-card border border-card-border rounded-lg shadow-lg py-1 z-50 min-w-[120px]">
          {Object.entries(localeNames).map(([locale, name]) => (
            <Link
              key={locale}
              href={switchPath(locale)}
              onClick={() => setOpen(false)}
              className={`block px-3 py-1.5 text-sm hover:bg-input-bg transition-colors ${
                locale === currentLocale
                  ? "text-primary font-medium"
                  : "text-foreground"
              }`}
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
