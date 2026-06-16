import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { navItems, services } from "../data";
import { SmoothScroll } from "../smooth-scroll";
import { ThemeToggle } from "../theme-toggle";

function Nav() {
  return (
    <header className="topbar">
      <nav className="floating-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <ThemeToggle />
    </header>
  );
}

export default function ServicesPage() {
  return (
    <SmoothScroll>
      <Nav />
      <main className="shell page-shell">
        <section className="catalog-hero">
          <h1>Services</h1>
          <p>
            End-to-end web development, from landing pages and marketing sites
            to SaaS platforms, APIs, and AI integrations.
          </p>
          <div className="hero-actions">
            <a>
              Book a free call
              <ArrowUpRight size={15} />
            </a>
            <a>
              Email me
              <Mail size={15} />
            </a>
          </div>
        </section>

        <section className="service-grid">
          {services.map(([title, body, Icon]) => (
            <article key={title}>
              <Icon size={20} />
              <h2>{title}</h2>
              <p>{body}</p>
            </article>
          ))}
        </section>

        <section className="build-band">
          <h2>Let&apos;s build something great</h2>
          <p>
            Whether you have a detailed spec or just a rough idea, I can help
            turn it into a polished, production-ready product.
          </p>
          <div>
            <a>Schedule a free call</a>
            <a>Email me</a>
          </div>
        </section>
      </main>
    </SmoothScroll>
  );
}
