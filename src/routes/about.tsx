import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal, SectionTitle } from "@/components/site/Reveal";
import { team, stats } from "@/lib/agency-data";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — LGTWork" },
      {
        name: "description",
        content:
          "LGTWork is a modern digital agency building premium websites, software, and digital experiences for ambitious brands.",
      },
      { property: "og:title", content: "About LGTWork" },
      {
        property: "og:description",
        content:
          "Meet the team behind modern websites and powerful digital experiences.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const timeline = [
  {
    year: "2026",
    title: "LGTWork was founded",
    text: "Started as a modern digital agency focused on building premium websites and digital experiences.",
  },
  {
    year: "2026",
    title: "First client partnerships",
    text: "Worked with startups, creators, and local businesses to establish strong online presences.",
  },
  {
    year: "2026",
    title: "Expanding creative services",
    text: "Added branding, UI/UX systems, and scalable web application development.",
  },
  {
    year: "Future",
    title: "Growing into a global studio",
    text: "Building a long-term vision focused on modern design, technology, and impactful digital products.",
  },
];

  const values = [
    {
      title: "Built with purpose",
      text: "Every project is designed to solve real business problems and create impact.",
    },
    {
      title: "Modern by default",
      text: "We use modern tools, systems, and design principles to create future-ready products.",
    },
    {
      title: "Focused on quality",
      text: "We care deeply about performance, usability, accessibility, and visual detail.",
    },
    {
      title: "Long-term partnerships",
      text: "We work closely with clients beyond launch to help them grow and evolve.",
    },
  ];

  return (
    <SiteLayout>
      <section className="container-page">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em] text-zinc-400">
            About LGTWork
          </span>

          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
            Building modern digital experiences for ambitious brands.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-zinc-400">
            LGTWork is a creative digital agency focused on designing and
            developing premium websites, scalable applications, and strong
            digital identities for startups, businesses, and creators.
          </p>
        </Reveal>
      </section>

      {/* Mission & Values */}
      <section className="container-page mt-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionTitle
              eyebrow="Our Mission"
              title="Create digital products that stand out."
              description="We help businesses turn ideas into modern, high-performing digital experiences."
            />
          </div>

          <div className="md:col-span-7 grid gap-4 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur-sm">
                  <CheckCircle2 className="h-5 w-5 text-cyan-400" />

                  <h3 className="mt-3 text-lg font-semibold text-white">
                    {v.title}
                  </h3>

                  <p className="mt-2 text-sm text-zinc-400">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="container-page mt-32">
        <SectionTitle
          eyebrow="Journey"
          title="The growth of LGTWork."
        />

        <ol className="relative mt-12 border-l border-zinc-800 pl-6">
          {timeline.map((t, i) => (
            <Reveal key={t.year} delay={i * 0.04}>
              <li className="mb-10">
                <span className="absolute -left-[7px] mt-1 h-3 w-3 rounded-full bg-cyan-400" />

                <p className="text-sm text-cyan-400">{t.year}</p>

                <p className="mt-1 text-xl font-semibold text-white">
                  {t.title}
                </p>

                <p className="mt-1 text-sm text-zinc-400">{t.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Team */}
      <section className="container-page mt-24">
        <SectionTitle
          eyebrow="Our Team"
          title="Designers, developers, and creators."
          description="A modern team focused on building experiences that blend creativity, technology, and strategy."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.04}>
              <article className="group h-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-base font-semibold text-white">
                    {m.name}
                  </h3>

                  <p className="text-xs text-cyan-400">{m.role}</p>

                  <p className="mt-2 text-sm text-zinc-400">{m.bio}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Stats / Why Us */}
      <section className="container-page mt-32">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <SectionTitle
              eyebrow="Why Choose Us"
              title="A creative agency built for modern businesses."
              description="We combine design, development, and strategy to create digital experiences that help brands grow online."
            />

            <ul className="mt-8 space-y-3 text-sm text-zinc-400">
              {[
                "Modern UI/UX focused design systems",
                "Fast and scalable development workflows",
                "Responsive websites optimized for all devices",
                "Long-term support and collaboration",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                  {i}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-6 grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur-sm"
              >
                <p className="text-4xl font-semibold text-white md:text-5xl">
                  {s.value}
                </p>

                <p className="mt-2 text-xs uppercase tracking-wider text-zinc-400">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}