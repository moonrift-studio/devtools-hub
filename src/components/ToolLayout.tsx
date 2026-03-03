"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useDictionary } from "@/i18n/DictionaryProvider";
import AdBanner from "./AdBanner";

export default function ToolLayout({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  const dict = useDictionary();
  const params = useParams();
  const locale = params.locale as string;

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-6">
        <Link
          href={`/${locale}`}
          className="text-primary hover:underline text-sm mb-2 inline-block"
        >
          &larr; {dict.common.backToTools}
        </Link>
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-muted mt-1">{description}</p>
      </div>

      <AdBanner className="mb-6" />

      <div className="bg-card border border-card-border rounded-xl p-6">
        {children}
      </div>

      <AdBanner className="mt-6" />
    </div>
  );
}
