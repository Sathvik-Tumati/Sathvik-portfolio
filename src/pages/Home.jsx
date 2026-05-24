import { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { IconMail, IconBrandGithub } from '@tabler/icons-react';
import ScrollReveal from '../components/ScrollReveal';
import PortraitA from '../components/PortraitA';
import ProjectVisual from '../components/ProjectVisual';
import { projects } from '../data/projects';
import './Home.css';

// Fisher-Yates shuffle
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Home() {
  const [displayProjects, setDisplayProjects] = useState(() =>
    shuffle(projects).slice(0, 3)
  );
  const [isShuffling, setIsShuffling] = useState(false);

  const handleShuffle = useCallback(() => {
    if (isShuffling) return;
    setIsShuffling(true);

    // After exit animation, pick new projects
    setTimeout(() => {
      const currentIds = displayProjects.map((p) => p.id);
      let pool = projects.filter((p) => !currentIds.includes(p.id));

      // If only 2 remain not shown, supplement with reshuffled full list
      if (pool.length < 3) {
        pool = shuffle(projects);
      }

      setDisplayProjects(shuffle(pool).slice(0, 3));
      setIsShuffling(false);
    }, 350);
  }, [displayProjects, isShuffling]);

  return (
    <div className="home">
      {/* ====== HERO ====== */}
      <section className="hero zone-a">
        <div className="hero__left">
          <motion.p
            className="hero__eyebrow label-mono"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            AI · Machine Learning · Computer Vision · Backend Development
          </motion.p>

          <div className="hero__headline">
            <motion.h1
              className="hero__line1"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              I build things
            </motion.h1>
            <motion.h1
              className="hero__line2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              that see.
            </motion.h1>
          </div>

          <motion.p
            className="hero__positioning"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            Building intelligent solutions for real-world problems.
          </motion.p>

          <motion.div
            className="hero__cta"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
          >
            <Link to="/projects" className="btn-primary">
              View my work ↓
            </Link>
            <Link to="/contact" className="btn-ghost">
              Contact me
            </Link>
          </motion.div>

          <motion.div
            className="hero__contact-strip"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.1 }}
          >
            <span className="hero__contact-label">REACH ME DIRECTLY</span>
            <div className="hero__contact-links">
              <a href="mailto:sats.tumati@gmail.com" className="hero__contact-link">
                <IconMail size={13} stroke={1.5} />
                sats.tumati@gmail.com
              </a>
              <a
                href="https://github.com/Sathvik-Tumati"
                target="_blank"
                rel="noopener noreferrer"
                className="hero__contact-link"
              >
                <IconBrandGithub size={13} stroke={1.5} />
                github/Sathvik-Tumati
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hero__scroll-hint"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            <div className="hero__scroll-line" />
            <span>SCROLL</span>
          </motion.div>
        </div>

        <div className="hero__right">
          <PortraitA />
        </div>
      </section>

      {/* ====== SIGNAL ====== */}
      <section className="signal">
        <ScrollReveal>
          <div className="hairline" style={{ marginBottom: 20 }} />
          <p className="signal__text">
            Systems that see what humans overlook — responses before the cost
            of waiting becomes irreversible.
          </p>
        </ScrollReveal>
      </section>

      {/* ====== SELECTED WORK ====== */}
      <section className="selected-work zone-b">
        <ScrollReveal>
          <div className="selected-work__header">
            <div className="selected-work__header-left">
              <span className="label-mono" style={{ letterSpacing: '0.14em' }}>
                SELECTED WORK
              </span>
              <h2 className="section-title" style={{ marginTop: 8 }}>
                The work.
              </h2>
            </div>
            <div className="selected-work__header-right">
              <span className="selected-work__count">5</span>
              <span className="label-mono-sm">CASE STUDIES</span>
              <button
                className="shuffle-btn"
                onClick={handleShuffle}
                aria-label="Shuffle project display"
              >
                ↺ shuffle projects
              </button>
            </div>
          </div>
        </ScrollReveal>

        <div className="selected-work__list">
          <AnimatePresence mode="wait">
            {!isShuffling &&
              displayProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link to="/projects" className="work-row" data-cursor="pointer">
                    <div className="work-row__left">
                      <span className="work-row__number">{project.number}</span>
                      <h3 className="work-row__name">{project.name}</h3>
                      <p className="work-row__thesis">{project.thesis}</p>
                      <span className="work-row__tech">
                        {project.tech.slice(0, 5).join(' · ')}
                      </span>
                      <span className="work-row__cta">Read case study →</span>
                    </div>
                    <div className="work-row__right">
                      <ProjectVisual visType={project.visType} />
                    </div>
                  </Link>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

        <ScrollReveal>
          <Link to="/projects" className="selected-work__all">
            View all five projects →
          </Link>
        </ScrollReveal>
      </section>

      {/* ====== ABOUT TEASER ====== */}
      <section className="about-teaser">
        <ScrollReveal>
          <div className="about-teaser__content">
            <div className="about-teaser__left">
              <h3 className="about-teaser__question">
                What do these projects have in common?
              </h3>
              <p className="about-teaser__body">
                They all start with a gap — between what a system does and what the
                people depending on it actually need. I build into that gap.
              </p>
              <Link to="/about" className="about-teaser__cta">
                Read about me →
              </Link>
            </div>
            <div className="about-teaser__right">
              <div className="about-teaser__fact">
                <span className="about-teaser__fact-key">Currently</span>
                <span className="about-teaser__fact-val">MJCET · CSE · 6th Semester</span>
              </div>
              <div className="about-teaser__fact">
                <span className="about-teaser__fact-key">Seeking</span>
                <span className="about-teaser__fact-val">
                  ML engineering internships
                </span> 
              </div>
              
              <div className="about-teaser__fact">
                <span className="about-teaser__fact-key">Built with</span>
                <span className="about-teaser__fact-val">
                  Python · React · FastAPI · CV
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
