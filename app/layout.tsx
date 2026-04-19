import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { personal } from "@/lib/data";
import { SITE_URL } from "@/lib/site";

/**
 * JetBrains Mono — our single typeface.
 * Portfolio is a terminal, so everything sings in monospace.
 */
const jetbrains = JetBrains_Mono({
  subsets: ["latin", "vietnamese"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const SITE_NAME = "Đào Huy Phương — Full-stack Developer & Freelancer";
const SITE_TITLE =
  "Đào Huy Phương · Full-stack Developer Freelancer · Nhận làm Website & Phần mềm";
const SITE_DESCRIPTION =
  "Đào Huy Phương — Full-stack Developer freelance tại Việt Nam, 7+ năm kinh nghiệm. Nhận thiết kế và phát triển website, phần mềm, app, hệ thống quản trị, tích hợp AI cho doanh nghiệp và cá nhân. Stack: Next.js, React, Vue, Golang, Laravel, Python.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s · Đào Huy Phương — Freelance Developer",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    // Brand
    "Đào Huy Phương",
    "Dao Huy Phuong",
    "huyphuong portfolio",
    // Freelancer intent (vi)
    "freelancer Việt Nam",
    "lập trình viên freelance",
    "thuê lập trình viên",
    "thuê developer",
    "thuê full-stack developer",
    "freelancer fullstack",
    "nhận làm website",
    "nhận làm phần mềm",
    "thiết kế website theo yêu cầu",
    "phát triển phần mềm theo yêu cầu",
    "outsource developer Vietnam",
    "thuê coder freelance",
    "thuê người làm web",
    "viết app theo yêu cầu",
    "làm web bán hàng",
    "làm website công ty",
    "làm website doanh nghiệp",
    "xây dựng hệ thống quản trị",
    "tích hợp AI vào website",
    // Freelancer intent (en)
    "freelance full-stack developer",
    "hire full-stack developer Vietnam",
    "hire web developer",
    "hire software engineer",
    "freelance Next.js developer",
    "freelance React developer",
    "freelance Golang developer",
    "freelance Laravel developer",
    "remote full-stack developer",
    // Tech
    "Next.js Developer",
    "React Developer",
    "Vue.js Developer",
    "Golang Developer",
    "Laravel Developer",
    "Python Developer",
    "TypeScript",
    "Tailwind CSS",
    "Full-stack Developer",
  ],
  authors: [{ name: personal.name, url: SITE_URL }],
  creator: personal.name,
  publisher: personal.name,
  category: "technology",
  alternates: {
    canonical: "/",
    languages: {
      "vi-VN": "/",
      "en-US": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    alternateLocale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    creator: "@Huyphuong94",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#08090a",
  width: "device-width",
  initialScale: 1,
};

/**
 * Schema.org JSON-LD — graph linking Person + ProfessionalService so Google
 * Rich Results, Knowledge Panel, and AI assistants understand both who I am
 * and what I offer. Two nodes referenced via @id keep the relationship
 * explicit (provider <-> services).
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}#person`,
      name: personal.name,
      alternateName: ["Dao Huy Phuong", "huyphuong"],
      jobTitle: "Full-stack Developer & Freelancer",
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      image: `${SITE_URL}/opengraph-image`,
      email: `mailto:${personal.email}`,
      telephone: personal.phoneE164,
      sameAs: [personal.github],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hà Nội",
        addressCountry: "VN",
      },
      knowsLanguage: ["vi", "en"],
      knowsAbout: [
        "Web Development",
        "Software Development",
        "Full-stack Development",
        "Next.js",
        "React",
        "Vue.js",
        "Golang",
        "Python",
        "PHP",
        "Laravel",
        "TypeScript",
        "Tailwind CSS",
        "PostgreSQL",
        "MySQL",
        "Redis",
        "Docker",
        "Kubernetes",
        "Microservices",
        "REST API",
        "GraphQL",
        "OpenAI",
        "AI Integration",
        "Prompt Engineering",
      ],
      makesOffer: [
        { "@id": `${SITE_URL}#service-web` },
        { "@id": `${SITE_URL}#service-software` },
        { "@id": `${SITE_URL}#service-ai` },
      ],
      worksFor: {
        "@type": "Organization",
        name: "Caro Technology Solutions",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}#service-web`,
      name: "Thiết kế & phát triển Website theo yêu cầu",
      description:
        "Nhận làm website cho doanh nghiệp, startup, cá nhân: landing page, web bán hàng, CMS, hệ thống quản trị nội bộ. Tối ưu SEO, tốc độ và bảo mật.",
      provider: { "@id": `${SITE_URL}#person` },
      areaServed: ["VN", "Worldwide"],
      availableLanguage: ["vi", "en"],
      serviceType: "Web Development",
      url: `${SITE_URL}#contact`,
      telephone: personal.phoneE164,
      priceRange: "$$",
      image: `${SITE_URL}/opengraph-image`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hà Nội",
        addressCountry: "VN",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}#service-software`,
      name: "Phát triển Phần mềm & SaaS theo yêu cầu",
      description:
        "Xây dựng phần mềm SaaS, ứng dụng nội bộ, microservices, REST/GraphQL API. Migration legacy, tối ưu performance.",
      provider: { "@id": `${SITE_URL}#person` },
      areaServed: ["VN", "Worldwide"],
      availableLanguage: ["vi", "en"],
      serviceType: "Software Development",
      url: `${SITE_URL}#contact`,
      telephone: personal.phoneE164,
      priceRange: "$$",
      image: `${SITE_URL}/opengraph-image`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hà Nội",
        addressCountry: "VN",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}#service-ai`,
      name: "Tích hợp AI & Automation",
      description:
        "Tích hợp OpenAI/Claude vào sản phẩm: chatbot, AI agent, automation workflow, content generation, intelligent search.",
      provider: { "@id": `${SITE_URL}#person` },
      areaServed: ["VN", "Worldwide"],
      availableLanguage: ["vi", "en"],
      serviceType: "AI Integration",
      url: `${SITE_URL}#contact`,
      telephone: personal.phoneE164,
      priceRange: "$$",
      image: `${SITE_URL}/opengraph-image`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hà Nội",
        addressCountry: "VN",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: ["vi-VN", "en-US"],
      publisher: { "@id": `${SITE_URL}#person` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${jetbrains.variable}`} suppressHydrationWarning>
      <head>
        {/* JSON-LD for Google Rich Results & AI assistants */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[var(--color-bg)] text-[var(--color-fg)] antialiased">
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
