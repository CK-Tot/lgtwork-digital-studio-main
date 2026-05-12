import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { blogPosts } from "@/lib/agency-data";
import { ArrowUpRight, Search } from "lucide-react";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Journal — LGTWork Studio" },
      { name: "description", content: "Essays, notes and case studies on design, brand and engineering from the LGTWork team." },
      { property: "og:title", content: "Journal — LGTWork" },
      { property: "og:description", content: "Essays from the LGTWork studio team." },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const featured = blogPosts.find((p) => p.featured) ?? blogPosts[0];
  const rest = blogPosts.filter((p) => p.slug !== featured.slug);
  const categories = useMemo(() => ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))], []);
  const [active, setActive] = useState("All");
  const [q, setQ] = useState("");

  const filtered = rest.filter((p) =>
    (active === "All" || p.category === active) &&
    (q.trim() === "" || (p.title + p.excerpt).toLowerCase().includes(q.toLowerCase()))
  );

  return (
    <SiteLayout>
      <section className="container-page">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Journal</span>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
            Notes from the studio.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Essays on design, brand and engineering — from the people doing the work.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <article className="mt-16 grid gap-8 overflow-hidden rounded-3xl border border-border bg-[color:var(--surface)]/40 md:grid-cols-2">
            <div className="aspect-[16/10] overflow-hidden md:aspect-auto">
              <img src={featured.cover} alt={featured.title} className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-10">
              <span className="text-xs text-[color:var(--electric)]">{featured.category} · Featured</span>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{featured.title}</h2>
              <p className="mt-3 text-muted-foreground">{featured.excerpt}</p>
              <div className="mt-6 flex items-center gap-3 text-xs text-muted-foreground">
                <span>{featured.date}</span>
                <span>·</span>
                <span>{featured.read}</span>
              </div>
              <a href="#" className="btn-ghost mt-8 self-start">Read article <ArrowUpRight className="h-4 w-4"/></a>
            </div>
          </article>
        </Reveal>
      </section>

      <section className="container-page mt-20">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button key={c} onClick={() => setActive(c)}
                className={`rounded-full border px-4 py-1.5 text-xs transition-all ${active === c ? "border-[color:var(--electric)] bg-[color:var(--electric)]/10 text-foreground" : "border-border text-muted-foreground hover:text-foreground"}`}>
                {c}
              </button>
            ))}
          </div>
          <div className="relative md:w-72">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search articles…"
              className="w-full rounded-full border border-border bg-[color:var(--surface)]/60 px-9 py-2 text-sm placeholder:text-muted-foreground focus:border-[color:var(--electric)] focus:outline-none" />
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.04}>
              <a href="#" className="group block h-full overflow-hidden rounded-2xl border border-border bg-[color:var(--surface)]/40">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.cover} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"/>
                </div>
                <div className="p-5">
                  <span className="text-xs text-[color:var(--electric)]">{p.category}</span>
                  <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                  <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{p.date}</span><span>·</span><span>{p.read}</span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
          {filtered.length === 0 && (
            <p className="text-sm text-muted-foreground">No articles match your search.</p>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
