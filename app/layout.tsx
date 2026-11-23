import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "@/components/Chrome";
import { origin, siteName } from "@/lib/seo";
import "./globals.css";
export const metadata: Metadata = {
  ...(origin && { metadataBase: new URL(origin) }),
  title: { default: siteName, template: "%s | Amir Kania" },
  authors: [{ name: "Amir Kania" }],
  creator: "Amir Kania",
  icons: { icon: "/icon.svg" },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {!origin && (
          <>
            <meta property="og:image" content="/art/social-preview.jpg" />
            <meta name="twitter:image" content="/art/social-preview.jpg" />
          </>
        )}
      </head>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
