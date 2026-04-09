import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/providers/LanguageProvider";

/**
 * JetBrains Mono — our single typeface.
 * Portfolio is a terminal, so everything sings in monospace.
 */
const jetbrains = JetBrains_Mono({
  subsets: ["latin", "vietnamese"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://huyphuong.dev"),
  title: {
    default: "Đào Huy Phương · Full-stack Developer",
    template: "%s · Đào Huy Phương",
  },
  description:
    "Portfolio cá nhân của Đào Huy Phương — Full-stack Developer với nhiều năm kinh nghiệm Python, Golang, Laravel, Vue, React và Next.js.",
  keywords: [
    "Đào Huy Phương",
    "Dao Huy Phuong",
    "Full-stack Developer",
    "Python Developer",
    "Golang Developer",
    "Next.js Developer",
    "Vue.js",
    "Laravel",
    "Vietnam Developer",
  ],
  authors: [{ name: "Đào Huy Phương" }],
  creator: "Đào Huy Phương",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    alternateLocale: "en_US",
    url: "https://huyphuong.dev",
    siteName: "Đào Huy Phương — Portfolio",
    title: "Đào Huy Phương · Full-stack Developer",
    description:
      "Terminal-inspired portfolio showcasing full-stack projects built with Python, Go, Laravel, Next.js and Vue.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Đào Huy Phương · Full-stack Developer",
    description:
      "Terminal-inspired portfolio showcasing full-stack projects.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#08090a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${jetbrains.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-[var(--color-bg)] text-[var(--color-fg)] antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
