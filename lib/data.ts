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
  phone: "0395765120",
  phoneE164: "+84395765120",
  github: "https://github.com/huyphuong1994",
  githubHandle: "huyphuong1994",
  available: true,
  // Postal address — dùng cho JSON-LD Person/ProfessionalService.
  // Giữ ở mức quận/phường là đủ để Google chấp nhận, không cần lộ địa chỉ nhà.
  address: {
    streetAddress: "Phường Cầu Giấy",
    addressLocality: "Quận Cầu Giấy",
    addressRegion: "Hà Nội",
    postalCode: "100000",
    addressCountry: "VN",
  },
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
  { name: "Python", category: "backend", level: 85, years: 2 },
  { name: "Golang", category: "backend", level: 90, years: 4 },
  { name: "PHP / Laravel", category: "backend", level: 92, years: 7 },
  { name: "Node.js", category: "backend", level: 80, years: 2 },
  // { name: "FastAPI", category: "backend", level: 88, years: 3 },

  // Frontend
  { name: "Next.js", category: "frontend", level: 92, years: 4 },
  { name: "React", category: "frontend", level: 90, years: 5 },
  { name: "Vue.js", category: "frontend", level: 92, years: 7 },
  { name: "Nuxt.js", category: "frontend", level: 82, years: 5 },
  { name: "TypeScript", category: "frontend", level: 90, years: 7 },
  { name: "Tailwind CSS", category: "frontend", level: 94, years: 4 },

  // Database
  { name: "PostgreSQL", category: "database", level: 88, years: 1 },
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
  { name: "Antigravity", category: "ai", level: 80, years: 2 },
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
    slug: "golf_platform",
    title: "Golf Platform",
    summary: {
      vi: "Hệ thống quản lý toàn diện cho sân golf.",
      en: "A comprehensive management system for golf courses.",
    },
    description: {
      vi: "Hệ thống CMS quản lý sân golf, được nhiều hệ thống golf lớn đang sử dụng như sân Chí Linh, Sam Tuyền Lâm, Hệ thống sân của Vinpearl và nhiều sân khác. " +
          "Booking đặt lịch, GO điều hành flight, caddie, buggy, voucher, tích hợp thanh toán xuất hoá đơn...",
      en: "CMS golf course management system, used by many large golf chains such as Chi Linh Golf Course, Sam Tuyen Lam Golf Course, Vinpearl Golf Courses and many others. " +
          "Features include scheduling, flight operation, caddie and buggy management, voucher management, integrated payment and order processing, etc.",
    },
    tags: ["React.js", "Golang", "MySQL", "Redis", "Docker"],
    role: { vi: "Full-stack Developer", en: "Full-stack Developer" },
    year: "2022",
    status: "shipped",
    liveUrl: "https://vngolf-portal.vnpay.vn",
    githubUrl: "",
    featured: true,
  },
  {
    slug: "my_wedding",
    title: "My Wedding",
    summary: {
      vi: "Thiệp mời cưới online.",
      en: "Online wedding invitations.",
    },
    description: {
      vi: "Bắt nguồn từ chính đám cưới của bản thân đã tạo ra web https://wedding-hp-ma.vercel.app để mới cưới, " +
          "tôi đang thực hiện một app cho người khác có thể tự tạo thiệp mời cưới online cho họ.",
      en: "Inspired by my own wedding, which led to the creation of the website https://wedding-hp-ma.vercel.app, I am now developing an app that allows others to create their own online wedding invitations.",
    },
    tags: ["Vue.js", "Next.js", "MySQL", "Golang"],
    role: { vi: "Solo Developer", en: "Solo Developer" },
    year: "2024",
    status: "in-progress",
    liveUrl: "https://wixio-fe.vercel.app",
    githubUrl: "https://github.com/huyphuong1994",
    featured: true,
  },
  {
    slug: "grid_bot",
    title: "Grid Bot Trading",
    summary: {
      vi: "Một bot giao dịch tự động dạng lưới.",
      en: "An automated grid trading bot.",
    },
    description: {
      vi: "Ứng dụng desktop Bot tự động giao dịch dạng lưới khi thị trường đi ngang ít biến động, có tích hợp AI phân tích thị trường.",
      en: "The Bot desktop application automatically trades in a grid pattern when the market is sideways with low volatility, and it integrates AI for market analysis.",
    },
    tags: ["Python", "Electron.js", "sqlite", "OpenAI"],
    role: { vi: "Solo Developer", en: "Solo Developer" },
    year: "2026",
    status: "shipped",
    githubUrl: "",
    featured: true,
  },
  {
    slug: "all",
    title: "Other",
    summary: {
      vi: "Quá trình làm việc đã làm rất nhiều dự án của công ty và freelancer.",
      en: "During my career, I've worked on numerous projects for both the company and as a freelancer.",
    },
    description: {
      vi: "Sau hơn 8 năm làm nghê, đã làm rất nhiều dự án lớn nhỏ khác như: dự án quản lý đại lý phân phối xe cho khách hàng nhật," +
          "dự án quản lý đơn hàng tập trung của VCcorp, dự án cho thuê xe oto... Và nhiều dự án khác.",
      en: "After more than 8 years in the profession, I have worked on many large and small projects such as: a project managing car dealerships for Japanese customers, a centralized order management project for VCorp, a car rental project... and many other projects.",
    },
    tags: ["Laravel", "Golang", "Vuejs", "Nuxt.js", "Kafka", "Kubernetes", "PostgreSQL"],
    role: { vi: "Full-stack Developer", en: "Full-stack Developer" },
    year: "2018-2026",
    status: "shipped",
    githubUrl: "https://github.com/huyphuong1994",
    featured: true,
  },
  {
    slug: "ai-translation",
    title: "AI Sub Video",
    summary: {
      vi: "Một AI agent tự động thêm phụ đề và lồng tiếng cho video chuẩn netflix.",
      en: "An AI agent automatically adds subtitles and voiceovers to Netflix-standard videos.",
    },
    description: {
      vi: "Một AI agent tự động thêm phụ đề và lồng tiếng cho video chuẩn netflix.",
      en: "An AI agent automatically adds subtitles and voiceovers to Netflix-standard videos.",
    },
    tags: ["Python", "AI", "Docker"],
    role: { vi: "Solo Developer", en: "Solo Developer" },
    year: "2026",
    status: "in-progress",
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
    company: "Công ty cổ phần giải pháp công nghệ Caro",
    role: {
      vi: "Senior Full-stack Developer",
      en: "Senior Full-stack Developer",
    },
    period: "2022 — Present",
    highlights: [
      {
        vi: "Key member xây dựng nền tảng quản lý sân golf của VNPAY phục vụ các hệ thông sân golf lớn.",
        en: "Key members built VNPAY's golf course management platform to serve large golf course systems.",
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
    stack: ["Golang", "React.js", "MySql", "Kafka", "Kubernetes"],
  },
  {
    hash: "e4f5g6h",
    company: "Công ty cổ phần VCCorp",
    role: { vi: "Full-stack Developer", en: "Full-stack Developer" },
    period: "2020 — 2022",
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
    company: "Công ty TNHH công nghệ PADITECH Việt Nam",
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
