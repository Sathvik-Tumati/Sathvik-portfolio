import ScrollReveal from '../components/ScrollReveal';
import './Education.css';

const educationEntries = [
  {
    period: '2023 – 2027',
    degree: 'Bachelor of Engineering (CSAI)',
    institution: 'Muffakham Jah College of Engineering',
    score: '8.0',
    scoreLabel: 'CGPA · 5th SEM',
  },
  {
    period: '2021 – 2023',
    degree: 'Intermediate (XII)',
    institution: 'FIITJEE Junior College, Saifabad',
    score: '78%',
    scoreLabel: 'PERCENTAGE',
  },
  {
    period: '2009 – 2021',
    degree: 'SSC (X)',
    institution: "FIITJEE World School, Ameerpet",
    score: '10',
    scoreLabel: 'CGPA',
  },
];

const timelineEntries = [
  {
    year: '2023',
    title: 'Enrolled in CSE at MJCET',
    sub: "Started with C++ and a question I couldn't stop asking.",
  },
  {
    year: '2024',
    title: 'First AI/ML project',
    sub: "Realized I wasn't interested in demos. I was interested in the gap they closed.",
  },
  {
    year: '2025',
    title: 'Student Innovation Ambassador',
    sub: 'Technology explained clearly is technology that actually spreads.',
  },
  {
    year: '2025',
    title: 'Integrity Forensics Engine',
    sub: 'First project built from conviction, not a coursework brief.',
  },
  {
    year: '2026',
    title: 'AI/ML Domain Head · SU Knowledge Hub',
    sub: 'Started teaching what I was still learning.',
  },
  {
    year: '2026',
    title: 'CivicPulse · Google Solution Challenge',
    sub: "Built something for people I'd never meet, about problems I'd never face.",
  },
];

const achievements = [
  {
    title: 'Google Solution Challenge Participant',
    body: 'CivicPulse selected as a project entry.',
  },
  {
    title: 'AI/ML Domain Head',
    body: 'Led the AI domain at SU Knowledge Hub, MJCET.',
  },
  {
    title: 'Student Innovation Ambassador',
    body: 'Institutional representative for innovation initiatives.',
  },
];

export default function Education() {
  return (
    <div className="education-page">
      {/* ====== HEADER ====== */}
      <section className="edu-header zone-a">
        <ScrollReveal>
          <span className="label-mono" style={{ letterSpacing: '0.2em' }}>
            THE JOURNEY
          </span>
          <h1 className="display-text" style={{ marginTop: 8 }}>
            Where it began.
          </h1>
        </ScrollReveal>
      </section>

      {/* ====== EDUCATION CARDS ====== */}
      <section className="edu-cards zone-b">
        <ScrollReveal>
          <span className="label-mono" style={{ letterSpacing: '0.2em' }}>
            EDUCATION
          </span>
          <h2 className="section-title" style={{ marginTop: 8, marginBottom: 48 }}>
            Academic background.
          </h2>
        </ScrollReveal>

        {educationEntries.map((entry, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="edu-card">
              <div className="edu-card__period">{entry.period}</div>
              <div className="edu-card__center">
                <h3 className="edu-card__degree">{entry.degree}</h3>
                <p className="edu-card__institution">{entry.institution}</p>
              </div>
              <div className="edu-card__score-wrap">
                <span className="edu-card__score">{entry.score}</span>
                <span className="edu-card__score-label">{entry.scoreLabel}</span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </section>

      {/* ====== TIMELINE ====== */}
      <section className="timeline-section zone-a">
        <ScrollReveal>
          <span className="label-mono" style={{ letterSpacing: '0.2em' }}>
            TIMELINE
          </span>
          <h2 className="section-title" style={{ marginTop: 8, marginBottom: 48 }}>
            The progression.
          </h2>
        </ScrollReveal>

        <div className="timeline">
          <div className="timeline__line" />
          {timelineEntries.map((entry, i) => (
            <ScrollReveal key={i} delay={i * 0.12}>
              <div className="timeline__entry">
                <div className="timeline__dot" />
                <div className="timeline__content">
                  <span className="timeline__year">{entry.year}</span>
                  <h3 className="timeline__title">{entry.title}</h3>
                  <p className="timeline__sub">{entry.sub}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ====== ACHIEVEMENTS ====== */}
      <section className="achievements zone-b">
        <ScrollReveal>
          <div className="achievements__grid">
            {achievements.map((a, i) => (
              <div key={i} className="achievement-card">
                <h3 className="achievement-card__title">
                  <span className="achievement-card__arrow">→</span> {a.title}
                </h3>
                <p className="achievement-card__body">{a.body}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
