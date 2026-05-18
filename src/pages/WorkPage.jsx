import { CertificateIcon } from "../components/Icons";
import { PageHero } from "../components/PageHero";
import { certifications, workItems, workingStyle } from "../data";

export function WorkPage() {
  return (
    <div className="page page-work">
      <PageHero
        eyebrow="// 02 · WORK"
        title="Where I’ve shipped."
        subtitle="Internships and academic work that pushed me from building in isolation to shipping in systems that other people rely on."
        accent="signal"
        aside={
          <div className="hero-aside-copy">
            <span>Operating context</span>
            <p>Frontend shipping, full-stack ownership, and enough AI work to know where it becomes real.</p>
          </div>
        }
      />

      <section className="timeline-shell">
        {workItems.map((item, index) => (
          <article key={`${item.title}-${item.period}`} className={`timeline-item${index === 0 ? " current" : ""}`} data-reveal>
            <div className="timeline-node" aria-hidden="true" />
            <div className="timeline-card">
              <div className="timeline-meta">
                <span>{item.period}</span>
                {item.badge ? <em>{item.badge}</em> : null}
              </div>
              <h3>
                {item.title}
                <small>{item.role}</small>
              </h3>
              <p>{item.summary}</p>
              <p className="timeline-detail">{item.detail}</p>
              <div className="timeline-tags">
                {item.stack.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="section-slab">
        <div className="section-header" data-reveal>
          <span>// 03 · WORKING STYLE</span>
          <h2>How I tend to show up on a team.</h2>
        </div>
        <div className="principle-grid">
          {workingStyle.map((item) => (
            <article key={item.title} className="principle-card" data-reveal>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-slab">
        <div className="section-header" data-reveal>
          <span>// 04 · LEARNING</span>
          <h2>Still adding layers.</h2>
        </div>
        <div className="certification-row">
          {certifications.map((certificate) => (
            <article key={certificate.title} className="cert-card" data-reveal>
              <CertificateIcon />
              <div>
                <h3>{certificate.title}</h3>
                <p>{certificate.issuer}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
