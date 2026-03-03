import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { locales, localeNames, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { DictionaryProvider } from "@/i18n/DictionaryProvider";
import { OrganizationSchema, WebSiteSchema } from "@/components/StructuredData";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export async function generateStaticParams() {
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
    title: {
      default: dict.meta.siteTitle,
      template: `%s | DevTools Hub`,
    },
    description: dict.meta.siteDescription,
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `${baseUrl}/${l}`])
      ),
    },
    openGraph: {
      title: dict.meta.siteTitle,
      description: dict.meta.siteDescription,
      type: "website",
      locale,
      siteName: "DevTools Hub",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.siteTitle,
      description: dict.meta.siteDescription,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large" as const,
        "max-snippet": -1,
      },
    },
    metadataBase: new URL(baseUrl),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const dict = await getDictionary(locale as Locale);

  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://devtools-hub.vercel.app";

  return (
    <>
      <OrganizationSchema url={baseUrl} />
      <WebSiteSchema
        url={baseUrl}
        name={dict.meta.siteTitle}
        description={dict.meta.siteDescription}
      />
      <header className="border-b border-card-border bg-card sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link
            href={`/${locale}`}
            className="text-xl font-bold text-primary"
          >
            &lt;/&gt; DevTools Hub
          </Link>
          <div className="flex items-center gap-4">
            <nav className="hidden sm:flex gap-4 text-sm text-muted">
              <Link
                href={`/${locale}`}
                className="hover:text-foreground transition-colors"
              >
                {dict.common.allTools}
              </Link>
            </nav>
            <LanguageSwitcher
              currentLocale={locale as Locale}
              localeNames={localeNames}
            />
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-6xl mx-auto px-4 py-8 w-full">
        <DictionaryProvider dictionary={dict}>{children}</DictionaryProvider>
      </main>

      <footer className="border-t border-card-border bg-card mt-auto">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-sm text-muted space-y-2">
          <p>
            &copy; {new Date().getFullYear()} DevTools Hub.{" "}
            {dict.footer.copyright}
          </p>
          <p>
            <Link
              href={`/${locale}/privacy`}
              className="hover:text-foreground transition-colors underline"
            >
              {dict.privacy.title}
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
}
