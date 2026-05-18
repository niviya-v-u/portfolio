import { Link, useOutletContext } from "react-router-dom";
import { featuredProjects, heroStats, signalCards, socialLinks } from "../data";
import { ArrowUpRightIcon, GithubIcon, LinkedInIcon, MailIcon } from "../components/Icons";
import { ProjectCard } from "../components/ProjectCard";

function socialIcon(label) {
  if (label === "GitHub") {
    return <GithubIcon />;
  }

  if (label === "LinkedIn") {
    return <LinkedInIcon />;
  }

  return <MailIcon />;
}

export function HomePage() {
  const { glitchActive } = useOutletContext();

  return (
    <div className="page page-home">
      <section className="landing-hero">
        <div className="hero-copy-stack">
          <span className="page-eyebrow" data-reveal>
            Near-future builder log / Chennai → Everywhere
          </span>
          <h1 className={`hero-name-block${glitchActive ? " glitch" : ""}`} data-text="NIVIYA V U">
            NIVIYA V U
          </h1>
          <p className="hero-roleline" data-reveal>
            Full-stack engineer · AI builder · product-minded shipper
          </p>
          <p className="landing-copy" data-reveal>
            I build software where intelligence meets interface. Real workflows. Real users. Systems that need to do
            more than look clever in a demo.
          </p>
          <div className="landing-actions" data-reveal>
            <Link className="primary-link" to="/projects">
              Enter Projects
            </Link>
            <Link className="secondary-link" to="/work">
              See Work
            </Link>
          </div>
        </div>

        <aside className="signal-deck" data-reveal>
          <div className="signal-topline">
            <span>Live signal</span>
            <strong>Niviya V U / 2026</strong>
          </div>
          <div className="signal-grid">
            {heroStats.map((stat) => (
              <article key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
          <div className="signal-socials">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : undefined}
                rel={link.url.startsWith("http") ? "noreferrer" : undefined}
                aria-label={link.label}
              >
                {socialIcon(link.label)}
              </a>
            ))}
          </div>
        </aside>
      </section>

      <section className="section-slab">
        <div className="section-header" data-reveal>
          <span>// 01 · SIGNALS</span>
          <h2>What I’m building toward.</h2>
        </div>
        <div className="signal-card-grid">
          {signalCards.map((card) => (
            <article key={card.title} className="signal-card" data-reveal>
              <span>{card.eyebrow}</span>
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-slab">
        <div className="section-header" data-reveal>
          <span>// 02 · FEATURED WORK</span>
          <h2>Projects with sharper edges.</h2>
        </div>
        <div className="projects-grid featured">
          {featuredProjects.map((project) => (
            <div key={project.name} data-reveal>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        <Link className="text-link" to="/projects" data-reveal>
          Browse the full project archive
          <ArrowUpRightIcon />
        </Link>
      </section>

      <section className="cta-banner" data-reveal>
        <div>
          <span>// 03 · NEXT</span>
          <h2>I’m looking for teams building serious product with modern tools.</h2>
        </div>
        <Link className="primary-link" to="/contact">
          Start a conversation
        </Link>
      </section>
    </div>
  );
}
