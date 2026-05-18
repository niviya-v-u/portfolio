import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data";

export function ProjectsPage() {
  return (
    <div className="page page-projects">
      <PageHero
        eyebrow="// 03 · PROJECTS"
        title="Proof of work."
        subtitle="These projects are where I tested ideas about AI, interface design, retrieval, and end-to-end product thinking."
        accent="green"
        aside={
          <div className="hero-aside-copy">
            <span>Filter</span>
            <p>Healthcare, automotive, NLP, and computer vision. Different domains, same habit of building complete systems.</p>
          </div>
        }
      />

      <section className="project-rail">
        {projects.map((project) => (
          <div key={project.name} data-reveal>
            <ProjectCard project={project} detailed />
          </div>
        ))}
      </section>

      <section className="cta-banner compact" data-reveal>
        <div>
          <span>// 04 · CONTEXT</span>
          <h2>If you want the story behind the repositories, the work page fills in the operating context.</h2>
        </div>
        <Link className="secondary-link" to="/work">
          Go to Work
        </Link>
      </section>
    </div>
  );
}
