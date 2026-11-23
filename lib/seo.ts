import type { Metadata } from "next";

const configuredOrigin =
  process.env.SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : undefined);
export const origin = configuredOrigin
  ? new URL(configuredOrigin).origin
  : undefined;
export const siteName = "Amir Kania | NanoEngineering";
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const url = origin ? new URL(path, origin).href : undefined;
  const image = origin
    ? new URL("/art/social-preview.jpg", origin).href
    : undefined;
  return {
    title: path === "/" ? { absolute: title } : title,
    description,
    alternates: url ? { canonical: url } : undefined,
    openGraph: {
      type: "website",
      siteName,
      title,
      description,
      ...(url && { url }),
      ...(image && {
        images: [
          {
            url: image,
            width: 1200,
            height: 630,
            alt: "Amir Kania, NanoEngineering at UC San Diego. Illustrated patterned silicon wafer.",
          },
        ],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image && { images: [image] }),
    },
  };
}
