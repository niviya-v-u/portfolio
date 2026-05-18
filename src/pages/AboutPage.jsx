import { PageHero } from "../components/PageHero";
import { offscreenNotes, principleCards, quickFacts } from "../data";

export function AboutPage() {
  return (
    <div className="page page-about">
      <PageHero
        eyebrow="// 01 · ABOUT"
        title="Who I am, not just what I have built."
        subtitle="I’m interested in software as a living system: interfaces, users, models, constraints, feedback loops, and all the decisions in between."
        accent="blue"
        aside={
          <div className="hero-aside-copy">
            <span>Field note</span>
            <p>
              The work gets interesting where raw technical capability meets product judgment. That is the edge I keep
              walking toward.
            </p>
          </div>
        }
      />

      <section className="editorial-grid">
        <div className="body-copy" data-reveal>
          <p>
            Technology is not slowing down for anyone, and that is exactly what makes it worth building in. I do not
            think of it as a static toolset. I think of it as a moving environment, one that changes how people work,
            decide, and relate to software.
          </p>
          <p>
            I am drawn to AI and product together because that is where things stop being theoretical. A model alone is
            not the point. A workflow that becomes faster, clearer, or more useful because of it is the point. That is
            why my projects keep landing in places where data, interfaces, and human decision-making collide.
          </p>
          <p>
            I have built systems for clinical case retrieval, automotive assistance, resume analysis, and emotion
            detection. Different domains, same instinct: make the system earn its place by being useful, not just
            sophisticated.
          </p>
        </div>

        <div className="fact-stack" data-reveal>
          {quickFacts.map((fact) => (
            <article key={fact.label} className="fact-card">
              <strong>{fact.value}</strong>
              <span>{fact.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section-slab">
        <div className="section-header" data-reveal>
          <span>// 02 · PRINCIPLES</span>
          <h2>How I like to work.</h2>
        </div>
        <div className="principle-grid">
          {principleCards.map((item) => (
            <article key={item.title} className="principle-card" data-reveal>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-slab">
        <div className="section-header" data-reveal>
          <span>// 03 · OFFSCREEN</span>
          <h2>The rest of the picture.</h2>
        </div>
        <div className="notes-panel">
          {offscreenNotes.map((note) => (
            <article key={note.label} className="note-row" data-reveal>
              <span>{note.label}</span>
              <p>{note.value}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
