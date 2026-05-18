import { PageHero } from "../components/PageHero";
import { availabilityCards, resumeHref, skillRows, socialLinks } from "../data";
import { GithubIcon, LinkedInIcon, MailIcon } from "../components/Icons";

function socialIcon(label) {
  if (label === "GitHub") {
    return <GithubIcon />;
  }

  if (label === "LinkedIn") {
    return <LinkedInIcon />;
  }

  return <MailIcon />;
}

export function ContactPage() {
  return (
    <div className="page page-contact">
      <PageHero
        eyebrow="// 04 · CONTACT"
        title="Let’s build something."
        subtitle="If you’re building product with room for systems thinking, AI integration, or strong frontend execution, I’d like to hear about it."
        accent="amber"
        aside={
          <div className="hero-aside-copy">
            <span>Preferred contact</span>
            <p>Email is best. LinkedIn works too. I keep the resume linked and current.</p>
          </div>
        }
      />

      <section className="contact-grid">
        <div className="contact-card" data-reveal>
          <a className="contact-email" href="mailto:niviya464@gmail.com">
            niviya464@gmail.com
          </a>
          <a className="contact-phone" href="tel:+919894333464">
            +91 9894333464
          </a>
          <div className="social-row">
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
          <a className="download-button" href={resumeHref} target="_blank" rel="noreferrer">
            Download Resume (PDF) ↓
          </a>
        </div>

        <div className="terminal-card" data-reveal>
          <div className="terminal-bar">
            <div className="terminal-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <p>~/stack.config</p>
          </div>
          <div className="terminal-body">
            <div className="terminal-lines">
              {skillRows.map((row) => (
                <div key={row.label} className="terminal-line">
                  <span className="terminal-label">{row.label}</span>
                  <div className="terminal-items">
                    {row.items.map((item, index) => (
                      <span
                        key={item.name}
                        className="skill-token"
                        data-project={item.project}
                        data-separator={index < row.items.length - 1 ? " · " : ""}
                      >
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="availability-strip">
        {availabilityCards.map((card) => (
          <article key={card.label} className="availability-card" data-reveal>
            <span>{card.label}</span>
            <p>{card.value}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
