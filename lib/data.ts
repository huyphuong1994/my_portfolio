import type {
  Experience,
  HeroStat,
  NavItem,
  Project,
  Skill,
  Bilingual,
} from "@/types";

/* ============================================================
   Personal info
   ============================================================ */

export const personal = {
  name: "Đào Huy Phương",
  handle: "huyphuong",
  title: {
    vi: "Lập trình viên Full-stack",
    en: "Full-stack Developer",
  } satisfies Bilingual,
  tagline: {
    vi: "Xây dựng sản phẩm web từ backend đến frontend với tốc độ và sự tinh tế.",
    en: "Shipping web products end-to-end — from resilient backends to polished UIs.",
  } satisfies Bilingual,
  bio: {
    vi: "Lập trình viên Full-stack với nhiều năm kinh nghiệm xây dựng các ứng dụng web hiệu năng cao. Thành thạo Python, Golang và PHP phía server; Vue, React và Next.js phía client. Luôn cầu tiến, chăm chỉ và không ngừng học hỏi — đặc biệt tận dụng AI để tăng tốc quy trình phát triển, review code và tự động hoá công việc lặp lại.",
    en: "Full-stack engineer with years of hands-on experience shipping high-performance web applications. Comfortable across Python, Go and PHP on the server, and Vue, React and Next.js on the client. Always curious, always shipping — and leveraging AI heavily to move faster without sacrificing quality.",
  } satisfies Bilingual,
  location: {
    vi: "Hà Nội, Việt Nam",
    en: "Hanoi, Vietnam",
  } satisfies Bilingual,
  email: "huyphuongk57ktb@gmail.com",
  github: "https://github.com/huyphuong1994",
  githubHandle: "huyphuong1994",
  available: true,
};

/* ============================================================
   Navigation — rendered as CLI flags in the header
   ============================================================ */

export const navItems: NavItem[] = [
  {
    href: "#about",
    flag: "--about",
    label: { vi: "Giới thiệu", en: "About" },
  },
  {
    href: "#skills",
    flag: "--skills",
    label: { vi: "Kỹ năng", en: "Skills" },
  },
  {
    href: "#projects",
    flag: "--projects",
    label: { vi: "Dự án", en: "Projects" },
  },
  {
    href: "#experience",
    flag: "--experience",
    label: { vi: "Kinh nghiệm", en: "Experience" },
  },
  {
    href: "#contact",
    flag: "--contact",
    label: { vi: "Liên hệ", en: "Contact" },
  },
];

/* ============================================================
   Hero stats — shown as const declarations
   ============================================================ */

export const heroStats: HeroStat[] = [
  { label: "years_of_exp", value: '"7+"', tone: "green" },
  { label: "projects_shipped", value: "24", tone: "amber" },
  { label: "stacks_mastered", value: "12", tone: "blue" },
  { label: "coffee_per_day", value: "Infinity", tone: "purple" },
];

/* ============================================================
   Skills — grouped by category in the SkillsSection tree view
   ============================================================ */

export const skills: Skill[] = [
  // Backend
  { name: "Python", category: "backend", level: 92, years: 6 },
  { name: "Golang", category: "backend", level: 85, years: 3 },
  { name: "PHP / Laravel", category: "backend", level: 90, years: 5 },
  { name: "Node.js", category: "backend", level: 80, years: 4 },
  { name: "FastAPI", category: "backend", level: 88, years: 3 },

  // Frontend
  { name: "Next.js", category: "frontend", level: 92, years: 4 },
  { name: "React", category: "frontend", level: 90, years: 5 },
  { name: "Vue.js", category: "frontend", level: 88, years: 5 },
  { name: "Nuxt.js", category: "frontend", level: 82, years: 3 },
  { name: "TypeScript", category: "frontend", level: 90, years: 5 },
  { name: "Tailwind CSS", category: "frontend", level: 94, years: 4 },

  // Database
  { name: "PostgreSQL", category: "database", level: 88, years: 6 },
  { name: "MySQL", category: "database", level: 90, years: 7 },
  { name: "Redis", category: "database", level: 82, years: 4 },
  { name: "MongoDB", category: "database", level: 78, years: 3 },

  // DevOps
  { name: "Docker", category: "devops", level: 86, years: 5 },
  { name: "GitHub Actions", category: "devops", level: 84, years: 4 },
  { name: "Linux / Bash", category: "devops", level: 88, years: 7 },
  { name: "Nginx", category: "devops", level: 80, years: 5 },

  // AI
  { name: "OpenAI API", category: "ai", level: 92, years: 2 },
  { name: "LangChain", category: "ai", level: 80, years: 2 },
  { name: "Claude / Cursor", category: "ai", level: 95, years: 2 },
  { name: "Prompt Engineering", category: "ai", level: 90, years: 2 },
];

/** Pretty labels + emoji-less icons for each skill category. */
export const skillCategoryMeta: Record<
  Skill["category"],
  { label: Bilingual; dir: string }
> = {
  backend: {
    label: { vi: "Backend", en: "Backend" },
    dir: "src/backend/",
  },
  frontend: {
    label: { vi: "Frontend", en: "Frontend" },
    dir: "src/frontend/",
  },
  database: {
    label: { vi: "Cơ sở dữ liệu", en: "Database" },
    dir: "src/database/",
  },
  devops: {
    label: { vi: "DevOps", en: "DevOps" },
    dir: "src/devops/",
  },
  ai: {
    label: { vi: "AI & LLMs", en: "AI & LLMs" },
    dir: "src/ai/",
  },
};

/* ============================================================
   Projects — fake data, user will replace later
   ============================================================ */

export const projects: Project[] = [
  {
    slug: "eduplatform",
    title: "EduPlatform",
    summary: {
      vi: "Nền tảng học trực tuyến với live streaming và quiz realtime.",
      en: "Online learning platform with live streaming and realtime quizzes.",
    },
    description: {
      vi: "Hệ thống LMS phục vụ 10k+ học viên đồng thời. Xử lý livestream qua WebRTC, bài kiểm tra realtime, hệ thống thanh toán tích hợp VNPay và MoMo, bảng điều khiển phân tích tiến độ học tập.",
      en: "LMS serving 10k+ concurrent learners. WebRTC livestreaming, realtime quizzes, VNPay & MoMo payment integration, and a teacher analytics dashboard.",
    },
    tags: ["Next.js", "Golang", "PostgreSQL", "WebRTC", "Redis"],
    role: { vi: "Tech Lead", en: "Tech Lead" },
    year: "2024",
    status: "shipped",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/huyphuong1994",
    featured: true,
  },
  {
    slug: "taskflow",
    title: "TaskFlow",
    summary: {
      vi: "Công cụ quản lý dự án Agile với collaboration realtime.",
      en: "Agile project management tool with realtime collaboration.",
    },
    description: {
      vi: "Jira-alike cho team Việt: kanban, sprint planning, burndown chart, realtime cursor, bình luận nội tuyến. Hỗ trợ 200+ team đang sử dụng production.",
      en: "Jira-alike built for Vietnamese teams: kanban, sprint planning, burndown charts, realtime cursors and inline comments. 200+ teams in production.",
    },
    tags: ["Vue.js", "Laravel", "MySQL", "WebSocket", "Redis"],
    role: { vi: "Full-stack Developer", en: "Full-stack Developer" },
    year: "2023",
    status: "shipped",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/huyphuong1994",
    featured: true,
  },
  {
    slug: "ai-chatbot",
    title: "AI Customer Chatbot",
    summary: {
      vi: "Chatbot AI đa lượt cho chăm sóc khách hàng, hiểu ngữ cảnh tiếng Việt.",
      en: "Multi-turn AI chatbot for customer support with Vietnamese context awareness.",
    },
    description: {
      vi: "Tích hợp OpenAI + RAG với dữ liệu nội bộ của khách hàng. Giảm 70% ticket level-1, hỗ trợ 24/7, chuyển giao cho con người khi cần.",
      en: "OpenAI + RAG over customer's internal docs. Reduced level-1 tickets by 70%, supports 24/7 with smooth human handoff.",
    },
    tags: ["Python", "FastAPI", "OpenAI", "LangChain", "pgvector"],
    role: { vi: "Solo Developer", en: "Solo Developer" },
    year: "2024",
    status: "shipped",
    githubUrl: "https://github.com/huyphuong1994",
    featured: true,
  },
  {
    slug: "microshop",
    title: "MicroShop",
    summary: {
      vi: "Hệ thống e-commerce microservices high-availability.",
      en: "High-availability e-commerce platform built on microservices.",
    },
    description: {
      vi: "8 microservices Golang giao tiếp qua Kafka. Kubernetes trên GCP, CI/CD tự động, hỗ trợ 1 triệu đơn/tháng vào dịp sale đỉnh.",
      en: "8 Go microservices communicating via Kafka. Kubernetes on GCP, fully automated CI/CD, handles 1M orders/month at peak sale.",
    },
    tags: ["Golang", "Nuxt.js", "Kafka", "Kubernetes", "PostgreSQL"],
    role: { vi: "Backend Lead", en: "Backend Lead" },
    year: "2023",
    status: "shipped",
    githubUrl: "https://github.com/huyphuong1994",
    featured: false,
  },
  {
    slug: "devtools-cli",
    title: "DevTools CLI",
    summary: {
      vi: "Công cụ dòng lệnh nội bộ tự động hoá workflow hằng ngày.",
      en: "Internal CLI tooling to automate daily engineering workflows.",
    },
    description: {
      vi: "CLI viết bằng Go với plugin system. Tạo scaffold dự án, chạy migration, deploy và review PR tự động với AI.",
      en: "Go CLI with a plugin system. Scaffolds projects, runs migrations, deploys, and performs AI-assisted PR reviews.",
    },
    tags: ["Golang", "Cobra", "OpenAI", "Docker"],
    role: { vi: "Solo Developer", en: "Solo Developer" },
    year: "2025",
    status: "in-progress",
    githubUrl: "https://github.com/huyphuong1994",
    featured: false,
  },
  {
    slug: "portfolio",
    title: "Terminal Portfolio",
    summary: {
      vi: "Portfolio cá nhân lấy cảm hứng từ giao diện terminal.",
      en: "Personal portfolio site with a terminal-inspired UI.",
    },
    description: {
      vi: "Next.js 16, Tailwind v4, Framer Motion. Song ngữ, SEO tốt, tốc độ tối đa.",
      en: "Next.js 16, Tailwind v4, Framer Motion. Bilingual, SEO-tuned, blazing fast.",
    },
    tags: ["Next.js", "TypeScript", "Tailwind v4", "Framer Motion"],
    role: { vi: "Solo Developer", en: "Solo Developer" },
    year: "2026",
    status: "in-progress",
    githubUrl: "https://github.com/huyphuong1994",
    featured: false,
  },
];

/* ============================================================
   Experience — shown as git log entries
   ============================================================ */

export const experiences: Experience[] = [
  {
    hash: "a1b2c3d",
    company: "Tech Company XYZ",
    role: {
      vi: "Senior Full-stack Developer",
      en: "Senior Full-stack Developer",
    },
    period: "2023 — Present",
    highlights: [
      {
        vi: "Dẫn dắt team 5 người xây dựng nền tảng LMS phục vụ 10k+ học viên đồng thời.",
        en: "Led a team of 5 to build an LMS serving 10k+ concurrent learners.",
      },
      {
        vi: "Thiết kế kiến trúc microservices Golang + Kafka, giảm 40% thời gian xử lý.",
        en: "Designed a Go + Kafka microservices architecture, cutting processing time by 40%.",
      },
      {
        vi: "Tích hợp AI vào quy trình code review, tiết kiệm ~8 giờ/người/tuần.",
        en: "Integrated AI into the code review workflow, saving ~8h/dev/week.",
      },
    ],
    stack: ["Golang", "Next.js", "PostgreSQL", "Kafka", "Kubernetes"],
  },
  {
    hash: "e4f5g6h",
    company: "ABC Solutions",
    role: { vi: "Full-stack Developer", en: "Full-stack Developer" },
    period: "2020 — 2023",
    highlights: [
      {
        vi: "Xây dựng và bảo trì nền tảng e-commerce B2B với 1M+ SKU.",
        en: "Built and maintained a B2B e-commerce platform with 1M+ SKUs.",
      },
      {
        vi: "Migrate hệ thống legacy PHP sang Laravel + Vue.js, giảm 60% thời gian phát triển tính năng mới.",
        en: "Migrated the legacy PHP stack to Laravel + Vue.js, reducing feature lead time by 60%.",
      },
      {
        vi: "Triển khai CI/CD pipeline và monitoring, giảm thời gian triển khai từ 2 giờ xuống 10 phút.",
        en: "Shipped a CI/CD pipeline and monitoring stack, slashing deploy time from 2h to 10min.",
      },
    ],
    stack: ["PHP", "Laravel", "Vue.js", "MySQL", "Redis", "Docker"],
  },
  {
    hash: "i7j8k9l",
    company: "StartupDev Co.",
    role: { vi: "Junior Web Developer", en: "Junior Web Developer" },
    period: "2018 — 2020",
    highlights: [
      {
        vi: "Phát triển 10+ website cho khách hàng với Vue.js và Laravel.",
        en: "Delivered 10+ customer websites using Vue.js and Laravel.",
      },
      {
        vi: "Tham gia tối ưu SEO và hiệu năng, nâng điểm PageSpeed trung bình từ 45 lên 92.",
        en: "Led SEO and performance work, raising average PageSpeed score from 45 to 92.",
      },
    ],
    stack: ["PHP", "Laravel", "Vue.js", "jQuery", "MySQL"],
  },
];

/* ============================================================
   Boot-sequence log — decorative lines under hero
   ============================================================ */

export const bootSequence: { label: string; status: "ok" | "info" | "warn" }[] =
  [
    { label: "Loading developer profile", status: "ok" },
    { label: "Establishing secure connection", status: "ok" },
    { label: "Mounting /skills and /projects", status: "ok" },
    { label: "AI copilot initialized", status: "info" },
    { label: "Ready to ship", status: "ok" },
  ];
