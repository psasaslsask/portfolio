import { useEffect, useMemo, useState } from "react";
import "./theme.css";

const projects = [
  {
    title: "Civic Signals Analytics",
    role: "Tech Lead · Data Viz",
    description:
      "Built a responsive dashboard that surfaces accessibility, reliability, and bias metrics for public data APIs.",
    tech: ["React", "TypeScript", "D3", "Node.js"],
    impact:
      "Reduced research teams' data prep time by 40% with reusable visualization primitives and automated QA checks.",
    link: "https://github.com/",
    demo: "https://example.com/",
  },
  {
    title: "Edge ML Model Ops",
    role: "Full-Stack Engineer",
    description:
      "Productionized on-device models with shadow deployments, feature drift alerts, and streamlined rollback tooling.",
    tech: ["Python", "FastAPI", "PostgreSQL", "Docker"],
    impact:
      "Cut model release cycles from weeks to days while keeping p95 latency under 120ms across 40+ sites.",
    link: "https://github.com/",
    demo: "https://example.com/",
  },
  {
    title: "Design Systems for Data Apps",
    role: "Frontend Specialist",
    description:
      "Created a modular design system tuned for analytics workflows with keyboard-first navigation and audit-ready themes.",
    tech: ["React", "Storybook", "Figma", "Jest"],
    impact:
      "Improved task completion by 18% and reduced UI defect rate by standardizing patterns and accessibility checks.",
    link: "https://github.com/",
    demo: "https://example.com/",
  },
];

const skills = {
  "Languages & Platforms": ["JavaScript", "TypeScript", "Python", "SQL", "Node.js"],
  "Frontend & Product": ["React", "Vite", "Storybook", "Styled Components", "ARIA"],
  "Backend & Data": ["FastAPI", "PostgreSQL", "Redis", "Docker", "REST"],
  "AI & Systems": ["LangChain", "OpenAI APIs", "Vector Search", "MLOps", "Observability"],
};

const experience = [
  {
    company: "Northstar Labs",
    title: "Senior Software Engineer",
    period: "2022 — Present",
    highlights: [
      "Led a cross-functional squad building analytics tools for civic data practitioners.",
      "Introduced a design system that trimmed new feature time by 30% and kept WCAG AA compliance.",
      "Mentored 3 engineers on delivery habits, pairing, and measurable outcomes.",
    ],
  },
  {
    company: "Atlas AI",
    title: "Software Engineer",
    period: "2019 — 2022",
    highlights: [
      "Shipped edge ML deployments with staged rollouts and telemetry-first observability.",
      "Partnered with product to define success metrics that linked features to adoption and retention.",
      "Modernized the CI pipeline, cutting build minutes by 45% and reducing flaky tests.",
    ],
  },
];

const testimonials = [
  {
    quote:
      "Brings clarity to ambiguous problems, ships thoughtfully, and keeps teams focused on the outcome, not the output.",
    name: "Morgan Hayes",
    title: "Director of Engineering, Northstar Labs",
  },
  {
    quote:
      "A rare mix of product sense and engineering rigor. Our releases got faster and calmer with them on the team.",
    name: "Priya Singh",
    title: "Product Manager, Atlas AI",
  },
];

const stats = [
  { label: "Years in Product Engineering", value: "6+" },
  { label: "Shipped Features", value: "85+" },
  { label: "Team Impact", value: "Mentored 8 devs" },
];

export default function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const nextThemeLabel = useMemo(
    () => (theme === "dark" ? "Switch to light theme" : "Switch to dark theme"),
    [theme]
  );

  return (
    <div className="page">
      <header className="top-nav" aria-label="Primary navigation">
        <div className="brand" aria-label="Portfolio home">
          <span className="brand-mark" aria-hidden="true">
            ✦
          </span>
          <div>
            <p className="eyebrow">Software Engineer</p>
            <p className="brand-name">Palak Sharma</p>
          </div>
        </div>
        <nav className="nav-links" aria-label="Section links">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a href="#contact" className="cta ghost">
            Contact
          </a>
        </nav>
        <button
          className="theme-toggle"
          type="button"
          aria-label={nextThemeLabel}
          onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </header>

      <main>
        <section id="hero" className="hero">
          <div className="hero-text">
            <p className="eyebrow">Building dependable software for data-driven teams</p>
            <h1>
              Palak Sharma
              <span className="accent"> — Engineer &amp; Product Partner</span>
            </h1>
            <p className="lede">
              I design and ship performant web experiences, data tools, and AI-powered workflows that center
              accessibility and measurable outcomes.
            </p>
            <div className="hero-actions">
              <a className="cta" href="#projects">
                View projects
              </a>
              <a className="cta ghost" href="#contact">
                Hire me
              </a>
            </div>
            <div className="stats" aria-label="Career highlights">
              {stats.map((item) => (
                <div className="stat" key={item.label}>
                  <p className="stat-value">{item.value}</p>
                  <p className="stat-label">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-card" aria-label="Overview">
            <p className="card-title">Mission</p>
            <p className="card-body">
              Ship resilient products that make complex data usable, keep users in flow, and help teams deliver with
              confidence.
            </p>
            <div className="card-divider" />
            <p className="card-title">Currently</p>
            <p className="card-body">
              Leading frontend and platform integrations at Northstar Labs — turning research ideas into reliable tools.
            </p>
            <div className="card-divider" />
            <p className="card-title">Focus</p>
            <p className="card-body">Accessible UI systems, data-rich experiences, and thoughtful developer experience.</p>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading">
            <p className="eyebrow">Selected Work</p>
            <h2>Projects with clear outcomes</h2>
            <p className="lede">
              Practical builds that balanced usability, performance, and maintainability — shipped with collaborative
              teams and intentional guardrails.
            </p>
          </div>
          <div className="grid cards" role="list">
            {projects.map((project) => (
              <article className="card" key={project.title} role="listitem">
                <div className="card-visual" aria-hidden="true" />
                <div className="card-content">
                  <div className="card-header">
                    <h3>{project.title}</h3>
                    <p className="eyebrow">{project.role}</p>
                  </div>
                  <p className="card-body">{project.description}</p>
                  <p className="impact">Impact: {project.impact}</p>
                  <div className="tags" aria-label="Tech stack">
                    {project.tech.map((item) => (
                      <span className="tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="card-actions">
                    <a href={project.demo} className="cta" target="_blank" rel="noreferrer">
                      View demo
                    </a>
                    <a href={project.link} className="cta ghost" target="_blank" rel="noreferrer">
                      Source
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section split">
          <div>
            <p className="eyebrow">Skills</p>
            <h2>Reliable across the stack</h2>
            <p className="lede">
              Pragmatic engineering with an eye for usability, observability, and future contributors.
            </p>
          </div>
          <div className="skill-columns">
            {Object.entries(skills).map(([category, items]) => (
              <div className="skill-card" key={category}>
                <p className="card-title">{category}</p>
                <div className="skill-list">
                  {items.map((skill) => (
                    <span className="tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2>Teams I've helped grow</h2>
            <p className="lede">Focused on impact, stability, and clear collaboration rhythms.</p>
          </div>
          <div className="timeline" role="list">
            {experience.map((role) => (
              <article className="timeline-card" key={role.company} role="listitem">
                <div className="timeline-header">
                  <div>
                    <h3>{role.title}</h3>
                    <p className="eyebrow">{role.company}</p>
                  </div>
                  <p className="period">{role.period}</p>
                </div>
                <ul>
                  {role.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section split about">
          <div>
            <p className="eyebrow">About</p>
            <h2>Builder with a bias for clarity</h2>
            <p className="lede">
              I combine product intuition with engineering rigor. From defining success metrics to pairing on code
              reviews, I care about how people experience the work.
            </p>
            <div className="cta-row">
              <a className="cta" href="#contact">
                Collaborate with me
              </a>
            </div>
          </div>
          <div className="story">
            <p>
              I thrive at the intersection of design systems and data products. I love taking complex workflows —
              compliance checks, field data collection, ML feedback loops — and making them intuitive and dependable.
            </p>
            <p>
              My approach blends workshops with stakeholders, prototyping with engineers, and steady iteration with clear
              metrics. The goal: ship confidently while keeping users in focus.
            </p>
            <p>
              Outside of work you'll find me sharing learnings with early-career developers, sketching interface ideas,
              and exploring how AI can support thoughtful human decision-making.
            </p>
          </div>
        </section>

        <section className="section testimonials">
          <div className="section-heading">
            <p className="eyebrow">Testimonials</p>
            <h2>Partner feedback</h2>
          </div>
          <div className="grid cards" role="list">
            {testimonials.map((item) => (
              <figure className="card" key={item.name} role="listitem">
                <blockquote>“{item.quote}”</blockquote>
                <figcaption>
                  <p className="card-title">{item.name}</p>
                  <p className="eyebrow">{item.title}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <div>
            <p className="eyebrow">Get in touch</p>
            <h2>Let's build something useful</h2>
            <p className="lede">
              Whether you need a partner for a new product surface or want to level up an existing one, I'd love to hear
              about it.
            </p>
            <div className="cta-row">
              <a className="cta" href="mailto:palak@example.com">
                Email me
              </a>
              <a className="cta ghost" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
          <form className="contact-form" aria-label="Contact form">
            <label className="contact-label" htmlFor="name">
              Name
            </label>
            <input id="name" name="name" className="contact-input" type="text" placeholder="Your name" required />

            <label className="contact-label" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              className="contact-input"
              type="email"
              placeholder="you@example.com"
              required
            />

            <label className="contact-label" htmlFor="message">
              Project details
            </label>
            <textarea
              id="message"
              name="message"
              className="contact-input"
              rows="4"
              placeholder="Timeline, goals, and what success looks like"
              required
            />

            <button type="submit" className="cta">
              Send message
            </button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>Crafted with care — accessible, performant, and ready to grow.</p>
        <p className="eyebrow">Based on lessons from reviewing dozens of developer portfolios.</p>
      </footer>
    </div>
  );
}
