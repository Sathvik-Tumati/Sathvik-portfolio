import { useState } from 'react';
import { IconExternalLink } from '@tabler/icons-react';
import ScrollReveal from '../components/ScrollReveal';
import ProjectVisual from '../components/ProjectVisual';
import ProjectModal from '../components/ProjectModal';
import { projects } from '../data/projects';
import './Projects.css';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="projects-page">
      {/* ====== HEADER ====== */}
      <section className="projects-header zone-a">
        <ScrollReveal>
          <span className="label-mono" style={{ letterSpacing: '0.2em' }}>
            THE WORK
          </span>
          <h1 className="projects-header__h1">Five projects.</h1>
          <h1 className="projects-header__h1 projects-header__h1--amber">
            Five human problems.
          </h1>
          <p className="projects-header__body">
            Click any project to open the full case study.
          </p>
        </ScrollReveal>
      </section>

      {/* ====== PROJECT INDEX ====== */}
      <section className="projects-index zone-b">
        {projects.map((project, i) => (
          <ScrollReveal key={project.id} delay={i * 0.08}>
            <div
              className="proj-row"
              onClick={() => setSelectedProject(project)}
              data-cursor="pointer"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
              aria-label={`Open ${project.name} case study`}
            >
              <div className="proj-row__left">
                <span className="proj-row__number">{project.number}</span>
                <h2 className="proj-row__name">{project.name}</h2>
                <p className="proj-row__thesis">{project.thesis}</p>
                <div className="proj-row__meta">
                  <span className="proj-row__tech">
                    {project.tech.slice(0, 5).join(' · ')}
                  </span>
                  <div className="proj-row__links">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="proj-row__link-btn"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Code
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="proj-row__link-btn proj-row__link-btn--live"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <IconExternalLink size={12} stroke={1.5} />
                        Live ↗
                      </a>
                    )}
                  </div>
                </div>
                <span className="proj-row__cta">Read case study →</span>
              </div>
              <div className="proj-row__right">
                <ProjectVisual visType={project.visType} />
              </div>
            </div>
          </ScrollReveal>
        ))}
      </section>

      {/* ====== PROJECT MODAL ====== */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
