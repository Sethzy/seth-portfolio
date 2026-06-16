import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  Download,
  Globe2,
  Mail,
  MapPin,
  TerminalSquare
} from "lucide-react";
import {
  experience,
  navItems,
  projects,
  techStack
} from "./data";
import type { TechStackItem } from "./data";
import { getGitHubContributionCalendar } from "./github-contributions";
import { SmoothScroll } from "./smooth-scroll";
import { ThemeToggle } from "./theme-toggle";

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

function techIconSrc(item: TechStackItem) {
  if (item.imageSrc) {
    return item.imageSrc;
  }

  if (!item.slug) {
    return null;
  }

  if (item.source === "simple") {
    const color = item.color ?? "111111";
    return `https://api.iconify.design/simple-icons/${item.slug}.svg?color=%23${color}&width=42&height=42`;
  }

  return `https://skillicons.dev/icons?i=${item.slug}`;
}

function TechIcon({ item }: { item: TechStackItem }) {
  const src = techIconSrc(item);

  if (!src) {
    return (
      <span className="tech-initials" aria-label={item.name}>
        {item.initials ?? item.name}
      </span>
    );
  }

  return (
    <Image
      src={src}
      alt={item.name}
      width={26}
      height={26}
      unoptimized
    />
  );
}

function GitHubLogo({ size = 22 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      className="github-logo"
      fill="currentColor"
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.21 1.79 1.21 1.04 1.78 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.47.11-3.06 0 0 .98-.31 3.2 1.18.93-.26 1.92-.39 2.91-.39s1.98.13 2.91.39c2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.77.11 3.06.75.81 1.2 1.84 1.2 3.1 0 4.42-2.69 5.39-5.25 5.68.42.36.79 1.06.79 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function smallTechItem(name: string): TechStackItem {
  return (
    techStack.find((item) => item.name === name) ?? {
      name,
      slug: name.toLowerCase().replaceAll(" ", "").replaceAll(".", ""),
      source: "skill"
    }
  );
}

function ProjectLinkIcon({ label, href }: { label: string; href: string }) {
  const isGitHub = label.toLowerCase().includes("github") || href.includes("github.com");

  return isGitHub ? <GitHubLogo size={22} /> : <Globe2 size={22} />;
}

async function ContributionGrid() {
  const calendar = await getGitHubContributionCalendar();

  return (
    <div className="contribution-card">
      <div className="months">
        {calendar.meta.months.map((month: string) => (
          <span key={month}>{month}</span>
        ))}
      </div>
      <div
        className="heatmap"
        aria-label={`GitHub contribution calendar for ${calendar.username}`}
      >
        {calendar.weeks.flat().map((day: { date: string; count: number; level: number }) => (
          <span
            aria-label={`${day.count} contributions on ${day.date}`}
            className={`level-${day.level}`}
            key={day.date}
            title={`${day.count} contributions on ${day.date}`}
          />
        ))}
      </div>
      <div className="heatmap-caption">
        <span>{calendar.meta.label}</span>
        <span>Less <i /> <i className="level-1" /> <i className="level-2" /> <i className="level-3" /> <i className="level-4" /> More</span>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Seth.</p>
      <div>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
      </div>
      <div>
        <a>GitHub</a>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <SmoothScroll>
      <Nav />
      <main className="shell">
        <section className="hero-card">
          <div className="identity-row">
            <Image
              className="avatar-image"
              src="/images/seth-portrait.jpeg"
              alt="Seth Lim"
              width={64}
              height={64}
              priority
            />
            <div className="title-stack">
              <h1>Seth Lim</h1>
              <p className="subtitle-static">AI Workflow Builder</p>
            </div>
          </div>
          <div className="meta-grid">
            <div>
              <span>Location</span>
              <strong>
                <MapPin size={14} />
                Singapore
              </strong>
            </div>
            <div>
              <span>Email</span>
              <strong>
                <Mail size={14} />
                sethlimzy@icloud.com
              </strong>
            </div>
            <div>
              <span>Harness</span>
              <strong>
                <TerminalSquare size={14} />
                Codex
              </strong>
            </div>
          </div>
          <p className="intro-copy">
            I like building <a>AI agents</a> around messy human workflows.
            Most of my work starts with scattered docs, sales calls,
            spreadsheets, or operational chaos. I turn that into full-stack
            software, automations, and agent workflows that help people get
            work done with more clarity.
            <br />
            <br />
            Currently building with AI to learn and explore what AI-native work
            actually looks like.
          </p>
          <div className="intro-actions">
            <a className="action-button action-button-primary" href="https://calendly.com/limzheyi1996/30min" rel="noreferrer" target="_blank">
              <CalendarDays size={15} />
              Book call
            </a>
            <a className="action-button" download href="/seth-lim-cv.pdf">
              <Download size={15} />
              Download CV
            </a>
          </div>
          <div className="social-row">
            <a aria-label="GitHub" href="https://github.com/Sethzy">
              <GitHubLogo size={20} />
            </a>
          </div>
        </section>

        <ContributionGrid />

        <section className="section tech-section">
          <h2>Tech Stack</h2>
          <div className="tech-grid" aria-label="Tech stack">
            {techStack.map((item) => (
              <div className="tech-tile" key={item.name} title={item.name}>
                <TechIcon item={item} />
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Featured Projects</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-media">
                  {project.mediaSrc ? (
                    <Image
                      src={project.mediaSrc}
                      alt={project.mediaAlt ?? ""}
                      width={700}
                      height={360}
                      unoptimized
                    />
                  ) : (
                    <div />
                  )}
                </div>
                <div className="project-head">
                  <h3>{project.title}</h3>
                  <div className="project-links">
                    {project.links.map((link) => (
                      <a
                        aria-label={link.label}
                        href={link.href}
                        key={link.label}
                        rel="noreferrer"
                        target="_blank"
                        title={link.label}
                      >
                        <ProjectLinkIcon href={link.href} label={link.label} />
                      </a>
                    ))}
                  </div>
                </div>
                <p>{project.summary}</p>
                <h4>Technologies Used:</h4>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section experience-section">
          <h2>Selected Experience</h2>
          <div className="timeline">
            {experience.map((item, index) => (
              <article className="timeline-item" key={`${item.role}-${item.date}`}>
                <span className={index === 0 ? "timeline-dot active" : "timeline-dot"} />
                <div className="timeline-body">
                  <div className="timeline-head">
                    <div className="role-line">
                      <h3>{item.role}</h3>
                      <span className="separator">·</span>
                      <span
                        className={item.confidential ? "company confidential" : "company"}
                        title={item.confidential ? "Under wraps" : undefined}
                      >
                        {item.company}
                      </span>
                    </div>
                    <span className="date">{item.date}</span>
                  </div>
                  <p className="place">{item.place}</p>
                  <p>{item.summary}</p>
                  {item.bullets ? (
                    <ul>
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>
                          <span />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {item.tags.length > 0 ? (
                    <div className="experience-tags">
                      {item.tags.map((tag) => (
                        <TechIcon key={tag} item={smallTechItem(tag)} />
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </SmoothScroll>
  );
}
