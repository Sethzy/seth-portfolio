import Link from "next/link";
import { navItems } from "../data";
import { SmoothScroll } from "../smooth-scroll";

function Nav() {
  return (
    <nav className="floating-nav" aria-label="Main navigation">
      {navItems.map((item) => (
        <Link key={item.href} href={item.href}>
          {item.label}
        </Link>
      ))}
    </nav>
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
            Since then I&apos;ve worked close to the operating layer: enterprise
            sales at Boxo, fintech GTM at Airwallex, AI-enabled GTM systems at
            Salescraft, and now reviewed agents for docs, CRM, company memory,
            healthcare, and order intake.
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

        <section className="prose-section split-prose">
          <div>
            <h2>Current Direction</h2>
            <h3>—What drives me</h3>
            <p>
              I am trying to understand what AI-native work actually looks
              like: not just better autocomplete, but new ways for teams to
              store context, delegate work, review outputs, and compound what
              they know.
            </p>
          </div>
          <div>
            <h3>—Where I fit</h3>
            <p>
              I am strongest in roles that need both commercial judgment and
              product taste: AI deployment strategy, technical GTM, founder
              office work, forward-deployed workflows, or early product
              building around agents.
            </p>
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
