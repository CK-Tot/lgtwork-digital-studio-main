import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { projects, type Project } from "@/lib/agency-data";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/work/$slug")({
  head: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    return {
      meta: [
        { title: project ? `${project.title} — LGTWork Case Study` : "Case Study — LGTWork" },
        { name: "description", content: project?.summary ?? "Case study" },
        { property: "og:title", content: project ? `${project.title} — Case Study` : "Case Study" },
        { property: "og:description", content: project?.summary ?? "" },
        ...(project?.cover ? [{ property: "og:image" as const, content: project.cover }] : []),
      ],
    };
  },
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData() as { project: Project };

  return (
    <SiteLayout>
      <section className="container-page">
        <Reveal>
          <Link to="/work" className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-3.5 w-3.5"/> All work
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
            <span className="rounded-full border border-border bg-[color:var(--surface)]/60 px-3 py-1 text-muted-foreground">{project.category}</span>
            <span className="rounded-full border border-border bg-[color:var(--surface)]/60 px-3 py-1 text-muted-foreground">{project.year}</span>
            <span className="rounded-full border border-border bg-[color:var(--surface)]/60 px-3 py-1 text-muted-foreground">{project.client}</span>
          </div>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">{project.title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{project.summary}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 overflow-hidden rounded-3xl border border-border">
            <img src={project.cover} alt={project.title} className="aspect-[16/9] w-full object-cover" />
          </div>
        </Reveal>
      </section>

      <section className="container-page mt-24 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-8 space-y-12">
          <Block title="Problem">{project.problem}</Block>
          <Block title="Solution">{project.solution}</Block>
          <div>
            <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Design process</h2>
            <ol className="mt-6 grid gap-3">
              {project.process.map((p, i) => (
                <li key={i} className="flex items-start gap-3 rounded-2xl border border-border bg-[color:var(--surface)]/40 p-4">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[image:var(--gradient-brand)] text-xs text-white">{i + 1}</span>
                  <p className="text-sm">{p}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <aside className="md:col-span-4 space-y-6 md:sticky md:top-32 md:self-start">
          <div className="rounded-2xl border border-border bg-[color:var(--surface)]/40 p-6">
            <h3 className="text-xs uppercase tracking-wider text-muted-foreground">Technologies</h3>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.stack.map((t) => (
                <span key={t} className="rounded-md border border-border px-2 py-0.5 text-[11px]">{t}</span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-[color:var(--surface)]/40 p-6">
            <h3 className="text-xs uppercase tracking-wider text-muted-foreground">Results</h3>
            <ul className="mt-4 space-y-3">
              {project.results.map((r) => (
                <li key={r.label} className="flex items-baseline justify-between border-b border-border pb-3 last:border-0 last:pb-0">
                  <span className="text-sm text-muted-foreground">{r.label}</span>
                  <span className="text-xl font-semibold text-gradient">{r.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      {/* Before / After */}
      <section className="container-page mt-24">
        <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Before & after</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border bg-[color:var(--surface)]/40">
            <div className="flex items-center gap-2 border-b border-border px-4 py-2 text-xs text-muted-foreground">Before</div>
            <div className="aspect-[4/3] bg-[radial-gradient(ellipse_at_center,oklch(0.3_0.02_270),oklch(0.18_0.014_270))]" />
          </div>
          <div className="overflow-hidden rounded-2xl border border-[color:var(--electric)]/40 bg-[color:var(--surface)]/40">
            <div className="flex items-center gap-2 border-b border-border px-4 py-2 text-xs">
              <CheckCircle2 className="h-3.5 w-3.5 text-[color:var(--electric)]"/> After
            </div>
            <img src={project.cover} alt={`${project.title} after`} className="aspect-[4/3] w-full object-cover"/>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page mt-24">
        <div className="rounded-3xl border border-border bg-[color:var(--surface)]/60 p-10 text-center md:p-16">
          <h2 className="text-3xl font-semibold md:text-5xl">Want results like this?</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Tell us about your project. We'll respond within one business day.</p>
          <Link to="/contact" className="btn-primary mt-8">Start a project <ArrowUpRight className="h-4 w-4"/></Link>
        </div>
      </section>
    </SiteLayout>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{title}</h2>
      <p className="mt-4 text-lg leading-relaxed">{children}</p>
    </div>
  );
}
