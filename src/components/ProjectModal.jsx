import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconBrandGithub, IconExternalLink, IconX } from '@tabler/icons-react';
import ProjectVisual from './ProjectVisual';
import './ProjectModal.css';

export default function ProjectModal({ project, isOpen, onClose }) {
  const modalRef = useRef(null);
  const triggerRef = useRef(null);

  // Focus trap + ESC close
  useEffect(() => {
    if (!isOpen) return;

    triggerRef.current = document.activeElement;
    const timer = setTimeout(() => modalRef.current?.focus(), 100);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      // Focus trap
      if (e.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll(
          'a, button, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      clearTimeout(timer);
      triggerRef.current?.focus();
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  const hasLive = project.liveUrl && project.liveUrl.length > 0;

  // Highlight the key phrase in whyBuilt
  const renderWhyBuilt = () => {
    if (!project.whyBuiltHighlight) return project.whyBuilt;
    const parts = project.whyBuilt.split(project.whyBuiltHighlight);
    if (parts.length < 2) return project.whyBuilt;
    return (
      <>
        {parts[0]}
        <em className="amber-italic">{project.whyBuiltHighlight}</em>
        {parts[1]}
      </>
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <motion.div
            ref={modalRef}
            className="modal"
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-label={`${project.name} case study`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button className="modal__close" onClick={onClose} aria-label="Close modal">
              <IconX size={20} stroke={1.5} />
            </button>

            {/* 01 HERO */}
            <div className="modal__hero" style={{ background: project.heroTint }}>
              {hasLive ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal__status-pill modal__status-pill--live"
                >
                  LIVE ↗
                </a>
              ) : (
                <span className="modal__status-pill modal__status-pill--dev">
                  IN DEVELOPMENT
                </span>
              )}
              <div className="modal__hero-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <h2 className="modal__hero-name">{project.name}</h2>
              <p className="modal__hero-thesis">{project.thesis}</p>
            </div>

            {/* 02 VISUAL */}
            <div className="modal__visual">
              <ProjectVisual visType={project.visType} size="large" />
            </div>

            {/* 03 PROBLEM */}
            <div className="modal__section">
              <span className="label-mono-sm">THE PROBLEM</span>
              <p className="modal__body">{project.problem}</p>
            </div>

            {/* 04 WHY I BUILT IT */}
            <div className="modal__section">
              <span className="label-mono-sm">WHY I BUILT THIS</span>
              <p className="modal__body">{renderWhyBuilt()}</p>
            </div>

            {/* 05 ARCHITECTURE */}
            <div className="modal__section">
              <span className="label-mono-sm">HOW IT WORKS</span>
              <p className="modal__body modal__body--sm">{project.architecture}</p>
            </div>

            {/* 06 TECH STACK */}
            <div className="modal__section">
              <span className="label-mono-sm">BUILT WITH</span>
              <div className="modal__tech">
                {project.tech.map((t) => (
                  <span key={t} className="tech-pill">{t}</span>
                ))}
              </div>
            </div>

            {/* 07 KEY FEATURES */}
            <div className="modal__section">
              <span className="label-mono-sm">KEY FEATURES</span>
              <ul className="modal__features">
                {project.features.map((f, i) => (
                  <li key={i}>
                    <span className="modal__arrow">→</span> {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* 08 CHALLENGES */}
            <div className="modal__section">
              <span className="label-mono-sm">WHAT WAS HARD</span>
              <p className="modal__body">{project.challenges}</p>
            </div>

            {/* 09 TAKEAWAY */}
            <div className="modal__section">
              <span className="label-mono-sm">TAKEAWAY</span>
              <p className="modal__body modal__body--italic">{project.learned}</p>
            </div>

            {/* 10 LINKS */}
            <div className="modal__section modal__links">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <IconBrandGithub size={16} stroke={1.5} />
                View on GitHub
              </a>
              {hasLive && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  <IconExternalLink size={16} stroke={1.5} />
                  View Live Demo ↗
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
