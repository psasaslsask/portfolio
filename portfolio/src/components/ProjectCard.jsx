export default function ProjectCard({ title, desc, tech, github, demo }) {
    return (
      <div className="project-card">
        <h2>{title}</h2>
        <p className="project-desc">{desc}</p>
  
        <div className="project-tech">
          {tech.map((t) => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>
  
        <div className="project-links">
          {github && (
            <a href={github} target="_blank" className="project-btn">
              GitHub
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" className="project-btn demo">
              Live Demo
            </a>
          )}
        </div>
      </div>
    );
  }
  