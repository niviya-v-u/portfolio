export function PageHero({ eyebrow, title, subtitle, aside, accent = "signal" }) {
  return (
    <section className={`page-hero accent-${accent}`}>
      <div className="page-hero-copy" data-reveal>
        <span className="page-eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <aside className="hero-aside-panel" data-reveal>
        {aside}
      </aside>
    </section>
  );
}
