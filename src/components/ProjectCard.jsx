import { ArrowUpRightIcon } from "./Icons";

export function ProjectCard({ project, detailed = false }) {
  return (
    <a className={`project-card${detailed ? " detailed" : ""}`} href={project.url} target="_blank" rel="noreferrer">
      <div className="project-topline">
        <span>{project.category}</span>
        <strong>
          Repo
          <ArrowUpRightIcon />
        </strong>
      </div>
      <h3>{project.name}</h3>
      <p className="project-one-line">{project.oneLine}</p>
      <p className="project-description">{project.description}</p>
      {detailed ? (
        <div className="project-notes">
          <div>
            <span>Challenge</span>
            <p>{project.challenge}</p>
          </div>
          <div>
            <span>Decision</span>
            <p>{project.decision}</p>
          </div>
          <div>
            <span>Outcome</span>
            <p>{project.outcome}</p>
          </div>
        </div>
      ) : null}
      <div className="project-tags">
        {project.stack.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </a>
  );
}
