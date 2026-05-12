import { Link } from "@tanstack/react-router";
import { Github, Twitter, Linkedin, Instagram, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border">
      <div className="container-page py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
              <span className="grid h-8 w-8 place-items-center rounded-md bg-[image:var(--gradient-brand)] text-white"><img src="/public/images/lgtwork_icon_blue.svg" alt="" /></span>
              LGTWork
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              A premium digital studio building the next generation of web products
              for ambitious founders and brands.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 flex max-w-md items-center gap-2 rounded-full border border-border bg-[color:var(--surface)]/60 p-1.5"
            >
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="flex-1 bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none"
              />
              <button className="btn-primary !py-2 !px-4 text-xs">Subscribe</button>
            </form>
          </div>

          <FooterCol
            title="Studio"
            items={[
              { label: "About", to: "/about" },
              { label: "Services", to: "/services" },
              { label: "Work", to: "/work" },
              { label: "Careers", to: "/careers" },
            ]}
          />
          <FooterCol
            title="Resources"
            items={[
              { label: "Blog", to: "/blog" },
              { label: "Contact", to: "/contact" },
            ]}
          />
          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold">Social</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="inline-flex items-center gap-2 hover:text-foreground"><Twitter className="h-4 w-4"/>Twitter</a></li>
              <li><a href="#" className="inline-flex items-center gap-2 hover:text-foreground"><Linkedin className="h-4 w-4"/>LinkedIn</a></li>
              <li><a href="#" className="inline-flex items-center gap-2 hover:text-foreground"><Github className="h-4 w-4"/>GitHub</a></li>
              <li><a href="#" className="inline-flex items-center gap-2 hover:text-foreground"><Instagram className="h-4 w-4"/>Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} LGTWork Studio. All rights reserved.</p>
          <Link to="/contact" className="inline-flex items-center gap-1 hover:text-foreground">
            Start a project <ArrowUpRight className="h-3.5 w-3.5"/>
          </Link>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { label: string; to: string }[] }) {
  return (
    <div className="md:col-span-2">
      <h4 className="text-sm font-semibold">{title}</h4>
      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
        {items.map((i) => (
          <li key={i.to}>
            <Link to={i.to} className="hover:text-foreground">{i.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
