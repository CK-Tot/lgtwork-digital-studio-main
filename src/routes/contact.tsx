import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { Mail, Phone, MapPin, Send, ArrowUpRight, Twitter, Linkedin, Github, Instagram, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — LGTWork Studio" },
      { name: "description", content: "Tell us about your project. We respond within one business day." },
      { property: "og:title", content: "Contact LGTWork" },
      { property: "og:description", content: "Start a project or book a discovery call." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <section className="container-page">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Get in touch</span>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
            Let's build something <span className="text-gradient">remarkable</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Tell us about your project. We respond within one business day with next steps.
          </p>
        </Reveal>
      </section>

      <section className="container-page mt-20 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="space-y-5 rounded-3xl border border-border bg-[color:var(--surface)]/40 p-8 md:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Your name" name="name" placeholder="Jane Doe" required />
              <Field label="Email" name="email" type="email" placeholder="jane@company.com" required />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Company" name="company" placeholder="Acme Inc." />
              <Field label="Budget" name="budget" placeholder="$25k – $100k" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Project details</label>
              <textarea required rows={5} placeholder="What are you trying to build?"
                className="mt-2 w-full rounded-xl border border-border bg-black/30 px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-[color:var(--electric)] focus:outline-none" />
            </div>
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs text-muted-foreground">We'll get back to you within 1 business day.</p>
              <button className="btn-primary" type="submit">
                {sent ? <>Sent <CheckCircle2 className="h-4 w-4"/></> : <>Send message <Send className="h-4 w-4"/></>}
              </button>
            </div>
          </form>
        </div>

        <aside className="md:col-span-5 space-y-6">
          <InfoCard icon={Mail} label="Email" value="hello@lgtwork.studio" />
          <InfoCard icon={Phone} label="Phone" value="+1 (415) 555-0133" />
          <InfoCard icon={MapPin} label="Studio" value="548 Market St, San Francisco · Remote-first" />
          <div className="overflow-hidden rounded-2xl border border-border bg-[color:var(--surface)]/40">
            {/* Modern abstract map UI */}
            <div className="relative aspect-[4/3]">
              <div className="absolute inset-0 [background-image:linear-gradient(to_right,oklch(1_0_0/0.06)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0/0.06)_1px,transparent_1px)] [background-size:32px_32px]" />
              <div className="absolute inset-0 [background:radial-gradient(circle_at_50%_50%,color-mix(in_oklab,var(--electric)_25%,transparent),transparent_60%)]" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="absolute inset-0 -m-6 animate-glow rounded-full bg-[color:var(--electric)]/40 blur-xl" />
                <span className="relative grid h-9 w-9 place-items-center rounded-full bg-[image:var(--gradient-brand)] text-white shadow-[var(--shadow-elegant)]">
                  <MapPin className="h-4 w-4" />
                </span>
              </div>
              <div className="absolute bottom-3 left-3 rounded-full glass px-3 py-1 text-[11px]">Juba - South Sudan · 37.7749° N</div>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-[color:var(--surface)]/40 p-6">
            <h3 className="text-sm font-semibold">Follow the studio</h3>
            <div className="mt-4 flex gap-2">
              {[Twitter, Linkedin, Github, Instagram].map((I, i) => (
                <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-full border border-border hover:border-[color:var(--electric)]/60">
                  <I className="h-4 w-4"/>
                </a>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <section className="container-page mt-32">
        <div className="rounded-3xl border border-border bg-[color:var(--surface)]/60 p-10 text-center md:p-16">
          <h2 className="text-3xl font-semibold md:text-5xl">Book a <span className="text-gradient">Discovery Call</span></h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">A 30-minute call to discuss goals, scope, and whether we're the right team for the job.</p>
          <a href="#" className="btn-primary mt-8">Pick a time <ArrowUpRight className="h-4 w-4"/></a>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", placeholder, required }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <input id={name} name={name} type={type} required={required} placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-border bg-black/30 px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-[color:var(--electric)] focus:outline-none" />
    </div>
  );
}

function InfoCard({ icon: Icon, label, value }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-[color:var(--surface)]/40 p-5">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-brand)]/20 ring-1 ring-inset ring-white/10">
        <Icon className="h-4 w-4 text-[color:var(--electric)]"/>
      </span>
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="mt-1 text-sm">{value}</p>
      </div>
    </div>
  );
}
