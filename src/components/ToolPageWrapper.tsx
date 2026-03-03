import { locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import ToolLayout from "./ToolLayout";
import {
  WebApplicationSchema,
  FAQSchema,
  BreadcrumbSchema,
} from "./StructuredData";
import { getToolWarnings } from "@/i18n/toolWarnings";

type ToolKey =
  | "jsonFormatter"
  | "base64"
  | "urlEncoder"
  | "hashGenerator"
  | "uuidGenerator"
  | "timestampConverter"
  | "passwordGenerator"
  | "qrCode"
  | "jwtDecoder"
  | "regexTester"
  | "textInspector"
  | "passwordHasher"
  | "testDataGenerator"
  | "diffChecker"
  | "halfwidthFullwidth"
  | "htmlStrip"
  | "keywordCounter"
  | "pdfLineBreakRemover"
  | "markdownPreview"
  | "colorPicker";

export function generateToolStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateToolMetadata(
  locale: string,
  toolKey: ToolKey,
  toolPath: string
) {
  const dict = await getDictionary(locale as Locale);
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://devtools-hub.vercel.app";
  const tool = dict.tools[toolKey];

  return {
    title: tool.metaTitle,
    description: tool.metaDescription,
    alternates: {
      canonical: `${baseUrl}/${locale}/${toolPath}`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `${baseUrl}/${l}/${toolPath}`])
      ),
    },
    openGraph: {
      title: tool.metaTitle,
      description: tool.metaDescription,
      url: `${baseUrl}/${locale}/${toolPath}`,
      type: "website" as const,
      siteName: "DevTools Hub",
    },
    twitter: {
      card: "summary" as const,
      title: tool.metaTitle,
      description: tool.metaDescription,
    },
  };
}

export async function ToolPage({
  locale,
  toolKey,
  toolPath,
  children,
}: {
  locale: string;
  toolKey: ToolKey;
  toolPath: string;
  children: React.ReactNode;
}) {
  const dict = await getDictionary(locale as Locale);
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://devtools-hub.vercel.app";
  const tool = dict.tools[toolKey];
  const faqs = "faq" in tool ? (tool as { faq: { q: string; a: string }[] }).faq : [];
  const warnings = getToolWarnings(toolKey, locale);

  return (
    <>
      <WebApplicationSchema
        name={tool.name}
        description={tool.description}
        url={`${baseUrl}/${locale}/${toolPath}`}
      />
      <BreadcrumbSchema
        items={[
          { name: "DevTools Hub", url: `${baseUrl}/${locale}` },
          { name: tool.name, url: `${baseUrl}/${locale}/${toolPath}` },
        ]}
      />
      {faqs.length > 0 && (
        <FAQSchema
          faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))}
        />
      )}

      <ToolLayout title={tool.title} description={tool.description}>
        {/* Answer capsule for AEO */}
        {"capsule" in tool && (
          <p className="text-sm text-muted mb-6 leading-relaxed">
            {(tool as { capsule: string }).capsule}
          </p>
        )}

        {/* Tool-specific warnings */}
        {warnings.length > 0 && (
          <div className="mb-6 p-3 rounded-lg border border-amber-600/30 bg-amber-900/10 text-sm text-muted">
            <ul className="list-disc list-inside space-y-1">
              {warnings.map((w, i) => (
                <li key={i}>{w}</li>
              ))}
            </ul>
          </div>
        )}

        {children}

        {/* FAQ section for AEO/AIO */}
        {faqs.length > 0 && (
          <div className="mt-8 pt-6 border-t border-card-border">
            <h2 className="text-lg font-semibold mb-4">FAQ</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="group">
                  <summary className="cursor-pointer font-medium text-sm hover:text-primary transition-colors">
                    {faq.q}
                  </summary>
                  <p className="mt-2 text-sm text-muted leading-relaxed pl-4">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        )}
      </ToolLayout>
    </>
  );
}
