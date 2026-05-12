import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { projects } from "@/lib/agency-data";
import { ArrowUpRight } from "lucide-react";
import { useState, useMemo } from "react";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — LGTWork Studio" },
      { name: "description", content: "Selected projects from the studio: SaaS, e-commerce, restaurants, construction and more." },
      { property: "og:title", content: "Work — LGTWork" },
      { property: "og:description", content: "Selected client work and case studies." },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  const categories = useMemo(() => ["All", ...Array.from(new Set(projects.map((p) => p.category)))], []);
  const [active, setActive] = useState<string>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <SiteLayout>
      <section className="container-page">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Selected work</span>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
            Recent <span className="text-gradient">launches</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            A small selection of projects we've shipped with founders and brand teams across the world.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full border px-4 py-1.5 text-xs transition-all ${active === c ? "border-[color:var(--electric)] bg-[color:var(--electric)]/10 text-foreground" : "border-border text-muted-foreground hover:text-foreground"}`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="container-page mt-12">
        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.04}>
              <Link to="/work/$slug" params={{ slug: p.slug }} className="group block overflow-hidden rounded-3xl border border-border bg-[color:var(--surface)]/40">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={p.cover} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
                  <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs backdrop-blur">{p.category}</span>
                    <span className="rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs backdrop-blur">{p.year}</span>
                  </div>
                </div>
                <div className="flex items-start justify-between gap-4 p-6">
                  <div>
                    <h3 className="text-xl font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.summary}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {p.stack.slice(0, 4).map((t) => (
                        <span key={t} className="rounded-md border border-border px-2 py-0.5 text-[11px] text-muted-foreground">{t}</span>
                      ))}
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
