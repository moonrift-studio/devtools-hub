"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { tools, categories } from "@/lib/tools";
import { useDictionary } from "@/i18n/DictionaryProvider";
import AdBanner from "@/components/AdBanner";

const toolKeyMap: Record<string, string> = {
  "json-formatter": "jsonFormatter",
  base64: "base64",
  "url-encoder": "urlEncoder",
  "hash-generator": "hashGenerator",
  "uuid-generator": "uuidGenerator",
  "timestamp-converter": "timestampConverter",
  "password-generator": "passwordGenerator",
  "qr-code": "qrCode",
  "jwt-decoder": "jwtDecoder",
  "regex-tester": "regexTester",
  "text-inspector": "textInspector",
  "password-hasher": "passwordHasher",
  "test-data-generator": "testDataGenerator",
  "diff-checker": "diffChecker",
  "halfwidth-fullwidth": "halfwidthFullwidth",
  "html-strip": "htmlStrip",
  "keyword-counter": "keywordCounter",
  "pdf-line-break-remover": "pdfLineBreakRemover",
  "markdown-preview": "markdownPreview",
  "color-picker": "colorPicker",
};

export default function Home() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const dict = useDictionary();
  const params = useParams();
  const locale = params.locale as string;

  const filtered = tools.filter((tool) => {
    const key = toolKeyMap[tool.id] as keyof typeof dict.tools;
    const translatedName = dict.tools[key]?.name || tool.name;
    const matchesSearch =
      !search ||
      translatedName.toLowerCase().includes(search.toLowerCase()) ||
      tool.name.toLowerCase().includes(search.toLowerCase()) ||
      tool.keywords.some((k) => k.includes(search.toLowerCase()));
    const matchesCategory = !activeCategory || tool.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">{dict.home.title}</h1>
        <p className="text-muted">{dict.home.subtitle}</p>
      </div>

      <div className="max-w-md mx-auto mb-6">
        <input
          type="text"
          placeholder={dict.common.searchTools}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="!font-sans"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-3 py-1 rounded-full text-sm cursor-pointer transition-colors ${
            !activeCategory
              ? "bg-primary text-white"
              : "bg-card border border-card-border text-muted hover:text-foreground"
          }`}
        >
          {dict.common.all}
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() =>
              setActiveCategory(activeCategory === cat ? null : cat)
            }
            className={`px-3 py-1 rounded-full text-sm cursor-pointer transition-colors ${
              activeCategory === cat
                ? "bg-primary text-white"
                : "bg-card border border-card-border text-muted hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <AdBanner className="mb-8" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((tool) => {
          const key = toolKeyMap[tool.id] as keyof typeof dict.tools;
          const t = dict.tools[key];
          return (
            <Link
              key={tool.id}
              href={`/${locale}${tool.path}`}
              className="bg-card border border-card-border rounded-xl p-5 hover:border-primary transition-colors group"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-lg font-mono font-bold text-primary bg-primary/10 rounded-lg w-10 h-10 flex items-center justify-center text-xs">
                  {tool.icon}
                </span>
                <h2 className="font-semibold group-hover:text-primary transition-colors">
                  {t?.name || tool.name}
                </h2>
              </div>
              <p className="text-sm text-muted">
                {t?.description || tool.description}
              </p>
            </Link>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-muted mt-8">No tools found.</p>
      )}

      <AdBanner className="mt-8" />
    </div>
  );
}
