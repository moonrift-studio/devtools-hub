import type { Metadata } from "next";
import { locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://devtools-hub.vercel.app";

  return {
    title: `${dict.privacy.title} — DevTools Hub`,
    description: dict.privacy.metaDescription,
    alternates: {
      canonical: `${baseUrl}/${locale}/privacy`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `${baseUrl}/${l}/privacy`])
      ),
    },
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const p = dict.privacy;

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">{p.title}</h1>
      <p className="text-sm text-muted mb-8">{p.lastUpdated}: 2026-03-03</p>

      <div className="prose dark:prose-invert max-w-none space-y-6">
        <section>
          <h2>{p.sections.intro.title}</h2>
          <p>{p.sections.intro.content}</p>
        </section>

        <section>
          <h2>{p.sections.dataCollection.title}</h2>
          <p>{p.sections.dataCollection.content}</p>
        </section>

        <section>
          <h2>{p.sections.cookies.title}</h2>
          <p>{p.sections.cookies.content}</p>
        </section>

        <section>
          <h2>{p.sections.thirdParty.title}</h2>
          <p>{p.sections.thirdParty.content}</p>
        </section>

        <section>
          <h2>{p.sections.children.title}</h2>
          <p>{p.sections.children.content}</p>
        </section>

        <section>
          <h2>{p.sections.changes.title}</h2>
          <p>{p.sections.changes.content}</p>
        </section>

        <section>
          <h2>{p.sections.contact.title}</h2>
          <p>{p.sections.contact.content}</p>
        </section>
      </div>
    </div>
  );
}
