import { useEffect, useMemo, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { navPages, resumeHref, socialLinks } from "../data";
import { GithubIcon, LinkedInIcon, MailIcon } from "./Icons";

function iconForLabel(label) {
  if (label === "GitHub") {
    return <GithubIcon />;
  }

  if (label === "LinkedIn") {
    return <LinkedInIcon />;
  }

  return <MailIcon />;
}

export function SiteLayout() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [navSolid, setNavSolid] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorActive, setCursorActive] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [reducedMotion, setReducedMotion] = useState(false);
  const [desktopPointer, setDesktopPointer] = useState(false);
  const routeLabel = useMemo(() => {
    const match = navPages.find((page) => page.to === location.pathname);
    return match?.label ?? "home";
  }, [location.pathname]);

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktopPointerQuery = window.matchMedia("(min-width: 900px) and (pointer: fine)");

    const syncMedia = () => {
      setReducedMotion(reducedMotionQuery.matches);
      setDesktopPointer(desktopPointerQuery.matches);
    };

    syncMedia();
    reducedMotionQuery.addEventListener("change", syncMedia);
    desktopPointerQuery.addEventListener("change", syncMedia);

    return () => {
      reducedMotionQuery.removeEventListener("change", syncMedia);
      desktopPointerQuery.removeEventListener("change", syncMedia);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setNavSolid(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
    setMenuOpen(false);
  }, [location.pathname, reducedMotion]);

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 },
    );

    const nodes = document.querySelectorAll("[data-reveal]");
    nodes.forEach((node) => revealObserver.observe(node));

    return () => revealObserver.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    if (reducedMotion || !desktopPointer) {
      return undefined;
    }

    const handleMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
      setCursorVisible(true);
      const target = event.target;
      const interactive = target instanceof HTMLElement && target.closest("a, button, [data-cursor='interactive']");
      setCursorActive(Boolean(interactive));
    };

    const handleLeave = () => setCursorVisible(false);

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, [desktopPointer, reducedMotion]);

  useEffect(() => {
    if (reducedMotion || location.pathname !== "/") {
      return undefined;
    }

    const interval = window.setInterval(() => {
      if (window.scrollY > 24) {
        return;
      }

      setGlitchActive(true);
      window.setTimeout(() => setGlitchActive(false), 280);
    }, 8000);

    return () => window.clearInterval(interval);
  }, [location.pathname, reducedMotion]);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  return (
    <div className={`site-shell route-${routeLabel}`}>
      {desktopPointer && !reducedMotion ? (
        <div
          className={`cursor-shell${cursorVisible ? " visible" : ""}${cursorActive ? " interactive" : ""}`}
          aria-hidden="true"
          style={{ transform: `translate3d(${cursorPosition.x}px, ${cursorPosition.y}px, 0)` }}
        >
          <span />
        </div>
      ) : null}

      <div className="ambient-grid" aria-hidden="true" />
      <div className="ambient-glow ambient-left" aria-hidden="true" />
      <div className="ambient-glow ambient-right" aria-hidden="true" />

      <header className={`site-nav${navSolid ? " solid" : ""}`}>
        <div className="container nav-inner">
          <NavLink className="nav-mark" to="/">
            Niviya V U
          </NavLink>

          <nav className="nav-links" aria-label="Primary navigation">
            {navPages.map((page) => (
              <NavLink
                key={page.to}
                to={page.to}
                end={page.to === "/"}
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                {page.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav-actions">
            <a className="resume-button" href={resumeHref} target="_blank" rel="noreferrer">
              Resume ↗
            </a>
            <button
              className={`menu-toggle${menuOpen ? " open" : ""}`}
              onClick={() => setMenuOpen((current) => !current)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              <span />
              <span />
            </button>
          </div>
        </div>

        <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
          {navPages.map((page) => (
            <NavLink
              key={page.to}
              to={page.to}
              end={page.to === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              {page.label}
            </NavLink>
          ))}
          <a href={resumeHref} target="_blank" rel="noreferrer">
            Resume ↗
          </a>
        </div>
      </header>

      <main className="page-shell">
        <Outlet context={{ glitchActive }} />
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <p>Built by Niviya V U · 2026</p>
            <p className="footer-note">A portfolio about systems, interfaces, and proof of work.</p>
          </div>
          <div className="footer-social">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : undefined}
                rel={link.url.startsWith("http") ? "noreferrer" : undefined}
                aria-label={link.label}
              >
                {iconForLabel(link.label)}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
