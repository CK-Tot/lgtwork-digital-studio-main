export type Project = {
  slug: string;
  title: string;
  client: string;
  category: string;
  year: string;
  cover: string;
  tags: string[];
  summary: string;
  problem: string;
  solution: string;
  process: string[];
  stack: string[];
  results: { label: string; value: string }[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "juba-client-project",
    title: "Business Website — Juba",
    client: "Confidential",
    category: "Business",
    year: "2026",
    cover: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    tags: ["Web Design", "WordPress", "Brand"],
    summary: "A professional web presence for a Juba-based business — their first time online.",
    problem: "The client had no digital presence. Potential customers couldn't find them, and the business was losing leads to competitors who were already online.",
    solution: "A clean, fast WordPress site with clear service pages, a contact form, and SEO basics set up from day one.",
    process: ["Discovery call", "Wireframes in Figma", "WordPress build", "Content setup", "Launch"],
    stack: ["WordPress", "Figma", "Elementor", "Vercel"],
    results: [
      { label: "Pages delivered", value: "6" },
      { label: "Time to launch", value: "2 weeks" },
      { label: "Mobile score", value: "94/100" },
    ],
    featured: true,
  },
];

export const services = [
  {
    slug: "web-design",
    title: "Web Design",
    icon: "Palette",
    description: "Clean, focused web design that works for your users and your business.",
    features: ["Wireframes & prototypes", "Figma design", "Mobile-first layouts", "Brand alignment"],
    process: "Discovery → Wireframes → Visual design → Review → Handoff.",
  },
  {
    slug: "wordpress",
    title: "WordPress Websites",
    icon: "Globe",
    description: "Full multi-page WordPress sites with a CMS you can manage yourself after launch.",
    features: ["Custom theme setup", "Page builder", "SEO basics", "Admin training"],
    process: "Discovery → Design → Build → Review → Launch.",
  },
  {
    slug: "react-apps",
    title: "React / Web Apps",
    icon: "Code2",
    description: "Custom web applications built for your specific workflow — not a generic template.",
    features: ["React frontend", "REST API integration", "Responsive UI", "Deployment"],
    process: "Spec → Design → Build → Test → Ship.",
  },
  {
    slug: "ecommerce",
    title: "E-Commerce",
    icon: "ShoppingBag",
    description: "Online stores with product listings, payments, and order management.",
    features: ["WooCommerce or custom", "Payment integration", "Product catalogue", "Mobile optimised"],
    process: "Discovery → Design → Store build → Payments → Launch.",
  },
  {
    slug: "uiux",
    title: "UI/UX Design",
    icon: "Sparkles",
    description: "Figma wireframes and prototypes before a single line of code is written.",
    features: ["User flows", "Wireframes", "High-fidelity prototype", "Design handoff"],
    process: "Brief → Wireframes → Prototype → Review → Handoff.",
  },
  {
    slug: "branding",
    title: "Brand & Identity",
    icon: "Wand2",
    description: "Logo, colour system, and brand guidelines so your business looks consistent everywhere.",
    features: ["Logo design", "Colour palette", "Typography", "Brand guidelines PDF"],
    process: "Brief → Concepts → Refinement → Final files → Guidelines.",
  },
  {
    slug: "consulting",
    title: "Tech Consulting",
    icon: "Search",
    description: "Scope your problem, map the right stack, and get a clear plan before any money moves.",
    features: ["Problem scoping", "Stack recommendation", "Written action plan", "Timeline estimate"],
    process: "Call → Scope → Plan → Deliver.",
  },
  {
    slug: "maintenance",
    title: "Maintenance & Support",
    icon: "ShieldCheck",
    description: "Monthly retainer for updates, security patches, and small content changes.",
    features: ["Monthly updates", "Security patches", "Uptime monitoring", "Priority support"],
    process: "Onboard → Monitor → Maintain → Report.",
  },
];

export const team = [
  {
    name: "CK Tot",
    role: "Co-Founder · Lead Engineer & Product Design",
    bio: "Leads product design and engineering at LGTWork. Handles everything from Figma prototypes to deployed React applications.",
    image: "/images/Ck.jpeg",
  },
  {
    name: "Chuol Wanrek",
    role: "Co-Founder · Business Development",
    bio: "First point of contact for every new project. Handles client relationships, scoping, and making sure every engagement runs cleanly.",
    image: "/images/Choul.JPG",
  },
];

export const testimonials = [
  {
    quote: "They delivered exactly what they promised — on time, clean, and no surprises on the invoice.",
    author: "Client",
    role: "Juba, South Sudan",
  },
];

export const faq = [
  {
    q: "How long does a project take?",
    a: "One-page sites: 1–2 weeks. WordPress sites: 2–4 weeks. Custom web apps: 6–10 weeks. We give you a clear timeline after the discovery call.",
  },
  {
    q: "How does pricing work?",
    a: "Every project is fixed price. You get a written quote before we start. No hourly billing, no surprise invoices.",
  },
  {
    q: "Do I pay upfront?",
    a: "50% deposit to start, 50% on delivery. That's it.",
  },
  {
    q: "What if I'm not sure what I need?",
    a: "Book a free discovery call. We'll scope the problem and tell you honestly what we think you need — and what you don't.",
  },
  {
    q: "Do you work with businesses outside South Sudan?",
    a: "Yes. We work with clients across East Africa and take remote projects from anywhere.",
  },
  {
    q: "Can you maintain our site after launch?",
    a: "Yes — we offer monthly maintenance retainers for updates, security patches, and small content changes.",
  },
];

export const stats = [
  { value: "10+", label: "Services offered" },
  { value: "Free", label: "Discovery call" },
  { value: "50%", label: "Deposit to start" },
  { value: "2026", label: "Founded" },
];

export const positions = [
  {
    title: "Freelance Frontend Developer",
    location: "Remote · East Africa",
    type: "Contract",
    department: "Engineering",
  },
  {
    title: "Freelance UI Designer",
    location: "Remote",
    type: "Contract",
    department: "Design",
  },
];

export const blogPosts = [
  {
    slug: "why-your-business-needs-a-website",
    title: "Why your business needs a website in 2026",
    category: "Business",
    read: "4 min read",
    date: "May 10, 2026",
    cover: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Most businesses in East Africa still don't have a website. Here's why that's a problem — and how to fix it fast.",
    featured: true,
  },
  {
    slug: "wordpress-vs-react",
    title: "WordPress or React — which one does your business actually need?",
    category: "Engineering",
    read: "5 min read",
    date: "May 3, 2026",
    cover: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    excerpt: "The honest answer depends on what you're building and how much control you want after launch.",
  },
  {
    slug: "design-before-code",
    title: "Why we design in Figma before writing a single line of code",
    category: "Design",
    read: "4 min read",
    date: "Apr 22, 2026",
    cover: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Skipping the design phase costs more time and money than it saves. Here's how we approach every project.",
  },
  {
    slug: "how-to-brief-a-web-project",
    title: "How to brief a web project so you actually get what you want",
    category: "Business",
    read: "5 min read",
    date: "Apr 10, 2026",
    cover: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Most bad web projects start with a vague brief. Here's the information that actually matters.",
  },
];