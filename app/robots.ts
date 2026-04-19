import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Mặc định: cho phép mọi bot crawl toàn bộ site, chặn API.
      { userAgent: "*", allow: "/", disallow: ["/api/"] },

      // Cho phép tường minh các AI crawlers — quan trọng để portfolio
      // xuất hiện khi user hỏi ChatGPT/Claude/Perplexity về freelancer.
      {
        userAgent: [
          "GPTBot", // OpenAI / ChatGPT
          "ChatGPT-User", // ChatGPT browse on demand
          "OAI-SearchBot", // ChatGPT Search
          "ClaudeBot", // Anthropic Claude
          "Claude-Web", // Anthropic web crawl
          "anthropic-ai", // Anthropic legacy UA
          "PerplexityBot", // Perplexity AI
          "Perplexity-User", // Perplexity on demand
          "Google-Extended", // Google Bard/Gemini training
          "Applebot-Extended", // Apple Intelligence
          "Bytespider", // ByteDance / Doubao
          "Amazonbot", // Amazon AI
          "CCBot", // Common Crawl (feeds many LLMs)
          "Meta-ExternalAgent", // Meta AI
          "FacebookBot", // Meta product previews
          "DuckAssistBot", // DuckDuckGo AI
          "MistralAI-User", // Mistral
          "YouBot", // You.com
          "cohere-ai", // Cohere
        ],
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
