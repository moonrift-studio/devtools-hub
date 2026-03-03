import type { Metadata } from "next";
import { generateToolStaticParams, generateToolMetadata, ToolPage } from "@/components/ToolPageWrapper";
import Client from "./client";

export const generateStaticParams = generateToolStaticParams;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return generateToolMetadata(locale, "diffChecker", "diff-checker");
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <ToolPage locale={locale} toolKey="diffChecker" toolPath="diff-checker">
      <Client />
    </ToolPage>
  );
}
