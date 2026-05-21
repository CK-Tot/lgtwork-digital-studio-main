import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Star, Sparkles, Code2, Palette, Layers, ShoppingBag, Wand2, Search, ShieldCheck, Plus, Minus, Building2, Globe, Users, Rocket, Landmark, MapPin, Briefcase } from "lucide-react";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal, SectionTitle } from "@/components/site/Reveal";
import { projects, services, testimonials, faq, stats } from "@/lib/agency-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LGTWork — Web Studio. East Africa." },
      { name: "description", content: "We design and build web solutions for businesses ready to grow across East Africa." },
      { property: "og:title", content: "LGTWork — Web Studio" },
      { property: "og:description", content: "From landing pages to custom web apps. Honest pricing, fixed scope, East Africa-based." },
    ],
  }),
  component: HomePage,
});

const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Palette, Code2, Layers, ShoppingBag, Sparkles, Wand2, Search, ShieldCheck,
};

function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <TrustedBy />
      <ServicesPreview />
      <FeaturedWork />
      <Process />
      <Testimonials />
      <FAQSection />
      <FinalCTA />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft background blob – neutral blue accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-r from-primary/20 via-primary/5 to-transparent blur-3xl"
      />

      <div className="container-page relative pt-12 md:pt-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* LEFT: Text + CTA */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Turning Ideas Into Powerful <br />
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                 Digital Experiences.
              </span>
            </h1>

            <p className="mt-6 text-base text-muted-foreground md:text-lg">
              LGTWORK designs and develops modern websites and software solutions that help businesses grow, scale, and stand out online.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="btn-primary"
              >
                Book a free call <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link to="/work" className="btn-ghost">
                See our work <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Tiny social proof */}
            <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-6 w-6 rounded-full border-2 border-background bg-gradient-to-br from-primary/60 to-primary/40"
                  />
                ))}
              </div>
              <span>Trusted by 20+ businesses across Kenya, Uganda & South Sudan</span>
            </div>
          </motion.div>

          {/* RIGHT: Human + approachable image */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative rounded-3xl border border-border bg-gradient-to-br from-primary/5 to-secondary p-2 shadow-xl">
              <img
                src="/images/hero-image.jpg"
                alt="Our team collaborating"
                className="rounded-2xl object-cover w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DashboardMockup() {
  return (
    <div className="glass relative overflow-hidden rounded-2xl p-2 shadow-[var(--shadow-soft)] md:rounded-3xl md:p-3">
      <div className="rounded-xl border border-border bg-[color:var(--surface)] md:rounded-2xl">
        {/* Window chrome */}
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
          <div className="ml-4 hidden h-6 flex-1 items-center rounded-md bg-black/30 px-3 text-[11px] text-muted-foreground md:flex">
            lgtwork.com / dashboard
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 p-4 md:p-6">
          <div className="col-span-12 md:col-span-3">
            <div className="space-y-2">
              {["Overview", "Projects", "Clients", "Reports", "Settings"].map((item, idx) => (
                <div
                  key={item}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs ${idx === 0 ? "text-foreground bg-primary/10" : "text-muted-foreground"}`}
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-primary"
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-12 grid gap-4 md:col-span-9 md:grid-cols-3">
            {[
              { label: "Active Projects", value: "12", delta: "+3" },
              { label: "MRR", value: "$184K", delta: "+12%" },
              { label: "NPS", value: "72", delta: "+8" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-border bg-black/20 p-4">
                <p className="text-[11px] uppercase tracking-wider text-muted-foreground">{s.label}</p>
                <p className="mt-2 text-2xl font-semibold">{s.value}</p>
                <p className="mt-1 text-xs text-primary">{s.delta}</p>
              </div>
            ))}
            <div className="md:col-span-3">
              <div className="rounded-xl border border-border bg-black/20 p-4">
                <p className="text-xs text-muted-foreground">Revenue · last 12 months</p>
                <svg viewBox="0 0 600 160" className="mt-3 h-32 w-full">
                  <defs>
                    <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0 130 C 60 100, 110 110, 160 80 S 280 30, 340 60 S 460 120, 520 70 S 600 30, 600 30 L 600 160 L 0 160 Z" fill="url(#g1)" />
                  <path d="M0 130 C 60 100, 110 110, 160 80 S 280 30, 340 60 S 460 120, 520 70 S 600 30, 600 30" fill="none" stroke="var(--primary)" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrustedBy() {
  const industries = [
    { name: "Local Retail", icon: ShoppingBag, desc: "Brick & mortar → online" },
    { name: "Startups", icon: Rocket, desc: "Launch fast, scale smart" },
    { name: "NGOs", icon: Globe, desc: "Impact‑driven web" },
    { name: "Government", icon: Landmark, desc: "Citizen‑first portals" },
    { name: "SMEs", icon: Briefcase, desc: "Growth without headache" },
    { name: "Co-working Spaces", icon: MapPin, desc: "Community hubs" },
    { name: "E‑commerce", icon: ShoppingBag, desc: "Sell more online" },
    { name: "Creative Agencies", icon: Users, desc: "Design + dev partnership" },
  ];

  return (
    <section className="container-page mt-24">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Built for businesses across East Africa
        </p>
        <p className="mt-2 text-sm text-muted-foreground/70">
          (We’re ready when you are)
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {industries.map((item) => (
          <div
            key={item.name}
            className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-background to-card p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-primary/10 blur-xl transition-opacity group-hover:bg-primary/20" />
            <div className="relative flex flex-col items-center text-center">
              <div className="rounded-full bg-primary/10 p-2 text-primary">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 text-sm font-medium">{item.name}</h3>
              <p className="mt-1 text-[11px] text-muted-foreground/70">{item.desc}</p>
            </div>
            <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>
        ))}
      </div>
    </section>
  );
}

function ServicesPreview() {
  const featuredServices = [
    {
      title: "Custom Web Development",
      description: "Fast, scalable websites and applications built with modern technologies for businesses ready to grow.",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "UI/UX Design Systems",
      description: "Interfaces designed for clarity, performance, and seamless user experiences across devices.",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "E-Commerce Platforms",
      description: "Modern online stores optimized for trust, conversion, and long-term scalability.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
    },
  ];

  return (
    <section className="container-page mt-40 space-y-40">
      {featuredServices.map((service, i) => (
        <div key={service.title} className="grid items-center gap-16 md:grid-cols-2">
          <div className={i % 2 === 1 ? "md:order-2" : ""}>
            <div className="overflow-hidden rounded-3xl border border-border bg-surface">
              <img src={service.image} alt={service.title} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
          </div>
          <div className={i % 2 === 1 ? "md:order-1" : ""}>
            <span className="text-sm uppercase tracking-[0.2em] text-primary">Services</span>
            <h2 className="mt-4 text-4xl font-semibold text-foreground md:text-5xl">{service.title}</h2>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">{service.description}</p>
            <Link to="/services" className="mt-8 inline-flex items-center gap-2 text-primary">
              Learn more <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}

function FeaturedWork() {
  const featured = projects.filter((p) => p.featured);
  return (
    <section className="container-page mt-32">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <SectionTitle eyebrow="Selected work" title="Recent projects." description="Work we've delivered. More on the way." />
        <Link to="/work" className="btn-ghost">All projects <ArrowRight className="h-4 w-4" /></Link>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {featured.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.05}>
            <Link
              to="/work/$slug"
              params={{ slug: p.slug }}
              className="group block overflow-hidden rounded-3xl border border-border bg-[color:var(--surface)]/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.cover} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <span
                  className="absolute left-4 top-4 rounded-full border border-white/20 px-3 py-1 text-xs backdrop-blur bg-primary/25 text-white"
                >
                  {p.category}
                </span>
              </div>
              <div className="flex items-start justify-between gap-4 p-6">
                <div>
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.summary}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", title: "Discovery", text: "Free call. We understand your goals and scope the right solution before anything else." },
    { n: "02", title: "Design", text: "Figma prototype first. You see and approve the product before we build it." },
    { n: "03", title: "Build", text: "We develop, test, and deploy — keeping you updated throughout." },
    { n: "04", title: "Support", text: "Maintenance retainers keep your product healthy long after launch." },
  ];
  return (
    <section className="container-page mt-32">
      <SectionTitle eyebrow="How we work" title="No surprises. Ever." description="Fixed price. Written scope. You approve before we start." />
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.05}>
            <div className="relative h-full rounded-2xl border border-border bg-[color:var(--surface)]/40 p-6">
              <span className="text-sm text-primary">{s.n}</span>
              <h3 className="mt-3 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mt-12 grid grid-cols-2 gap-6 rounded-3xl border border-border bg-[color:var(--surface)]/40 p-8 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="text-3xl font-semibold text-primary md:text-4xl">{s.value}</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="container-page mt-32">
      <SectionTitle eyebrow="What clients say" title="From the people we've worked with." />
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <figure className="h-full rounded-2xl border border-border bg-[color:var(--surface)]/40 p-6">
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-base leading-relaxed">"{t.quote}"</blockquote>
              <figcaption className="mt-6 text-sm">
                <span className="font-medium">{t.author}</span>
                <span className="text-muted-foreground"> · {t.role}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="container-page mt-32">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <SectionTitle eyebrow="FAQ" title="Questions, answered." description="Can't find what you need? Email us at hello@lgtwork.co" />
        </div>
        <div className="md:col-span-7">
          <div className="divide-y divide-border rounded-2xl border border-border bg-[color:var(--surface)]/40">
            {faq.map((f, i) => {
              const isOpen = open === i;
              return (
                <button
                  key={i}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-start justify-between gap-6 px-6 py-5 text-left"
                >
                  <div>
                    <p className="text-base font-medium">{f.q}</p>
                    {isOpen && <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>}
                  </div>
                  <span
                    className={`mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full border ${isOpen ? "border-primary text-primary" : ""}`}
                  >
                    {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="container-page mt-32">
      <div
        className="relative overflow-hidden rounded-3xl border border-primary/20 p-10 text-center md:p-16 bg-primary/5"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{ background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(0, 82, 212, 0.1) 0%, transparent 70%)" }}
        />
        <div className="relative">
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold md:text-5xl">
            Have a project in mind?{" "}
            <span className="text-primary">Let's build it.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Start with a free discovery call. Fixed price, no fluff, no surprises.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link to="/contact" className="btn-primary">
              Book a Discovery Call <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link to="/work" className="btn-ghost">View Work</Link>
          </div>
        </div>
      </div>
    </section>
  );
}