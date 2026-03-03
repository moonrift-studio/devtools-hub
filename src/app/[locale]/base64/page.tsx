import type { Metadata } from "next";
import { generateToolStaticParams, generateToolMetadata, ToolPage } from "@/components/ToolPageWrapper";
import Client from "./client";

export const generateStaticParams = generateToolStaticParams;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateToolMetadata(locale, "base64", "base64");
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <ToolPage locale={locale} toolKey="base64" toolPath="base64">
      <Client />
    </ToolPage>
  );
}
