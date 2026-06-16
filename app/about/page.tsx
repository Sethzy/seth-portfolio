import Link from "next/link";
import { navItems } from "../data";
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

export default function AboutPage() {
  return (
    <SmoothScroll>
      <Nav />
      <main className="shell page-shell about-page">
        <section className="about-hero">
          <h1>
            From GTM operator to
            <span>AI workflow builder.</span>
          </h1>
          <p>
            I&apos;m Seth, a Singapore-based operator-builder working across GTM,
            product, and AI workflows. I turn messy customer operations into
            reviewed systems: software, automations, and agents people can
            actually trust.
          </p>
          <blockquote>
            &quot;The interesting part of AI is not the demo. It is the operating
            layer around it: sources, workflows, review loops, and the human
            judgment that keeps the system useful.&quot;
          </blockquote>
          <div className="word-row">
            <span>GTM</span>
            <span>Product</span>
            <span>AI Workflows</span>
          </div>
          <div className="fact-strip">
            <span>
              <small>Location</small>
              <strong>Singapore</strong>
            </span>
            <span>
              <small>Focus</small>
              <strong>AI-native work</strong>
            </span>
            <span>
              <small>Status</small>
              <strong>Open to roles</strong>
            </span>
          </div>
        </section>

        <section className="prose-section">
          <h2>How it started</h2>
          <p>
            I studied law at Cambridge and wrote my dissertation on machine
            learning in sentencing. That became the early throughline:
            institutions are messy, judgment matters, and technology is useful
            when it changes how work actually happens.
          </p>
          <p>
            After Cambridge, I learned the enterprise side at Boxo and
            Airwallex: selling technical infrastructure, mapping stakeholders,
            removing risk, and seeing how messy workflows become buying
            decisions. Salescraft was the turn from operator to builder; I
            started shipping AI-enabled GTM systems myself, then moved into
            reviewed agents for docs, CRM, company memory, healthcare, and
            order intake.
          </p>
        </section>

        <section className="section">
          <h2>How I Work</h2>
          <div className="principle-grid">
            {[
              ["Start with the workflow", "Before tools or models, understand the documents, calls, approvals, spreadsheets, and handoffs."],
              ["Stay close to operators", "The best AI work comes from watching where people actually get stuck, not from guessing in a vacuum."],
              ["Keep review explicit", "Citations, confidence, audit trails, and human approval matter when the output affects real work."],
              ["Translate across teams", "I move between customer language, commercial reality, product shape, and technical constraints."]
            ].map(([title, body]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="connect-band">
          <h2>What I&apos;m Looking For</h2>
          <p>
            I am looking for work where AI is close to real operations: messy
            inputs, human workflows, customer discovery, commercial outcomes,
            and systems that need to be trusted before they can be scaled.
          </p>
          <div>
            <a>AI Deployment</a>
            <a>Technical GTM</a>
            <a>Product Strategy</a>
          </div>
        </section>
      </main>
    </SmoothScroll>
  );
}
