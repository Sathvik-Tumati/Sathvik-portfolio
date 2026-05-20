import ScrollReveal from '../components/ScrollReveal';
import './Skills.css';

const pillars = [
  {
    number: '01',
    subtitle: 'How I think about AI',
    headline: 'AI as augmentation, not product.',
    body: "I build AI into systems to close the gap between what humans can process and what the situation requires. The model is only as useful as the problem it's solving for a specific person in a specific moment.",
    belief: 'The model is the layer, not the product.',
    label: 'TOOLS I USE',
    tools: 'Python / TensorFlow / Keras / Scikit-learn / OpenCV / Gemini API / NumPy',
  },
  {
    number: '02',
    subtitle: 'How I think about backend systems',
    headline: 'Systems that respond, not just store.',
    body: "A backend that can't respond in time hasn't solved the problem. I design around real-time requirements first — websocket connections, event-driven architectures — then build storage around them.",
    belief: "A system that can't respond when it matters hasn't solved the problem.",
    label: 'TOOLS I USE',
    tools: 'FastAPI / SQLite / Firebase / Socket.IO / Uvicorn / AWS S3 / Pydantic',
  },
  {
    number: '03',
    subtitle: 'How I think about interfaces',
    headline: 'The interface is the argument.',
    body: "Every UI decision is a claim about what matters. I build interfaces that make the system's intelligence legible — not through decoration, but through information hierarchy and interaction clarity.",
    belief: 'If the interface is confusing, the system failed.',
    label: 'TOOLS I USE',
    tools: 'React / Vite / Tailwind CSS / Leaflet / Chart.js / Framer Motion',
  },
];

const toolkit = [
  {
    label: 'LANGUAGES',
    items: ['C++', 'C', 'Python', 'JavaScript'],
  },
  {
    label: 'ML / VISION',
    items: ['NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow', 'Keras', 'OpenCV', 'Seaborn'],
  },
  {
    label: 'FRAMEWORKS / INFRA',
    items: ['React', 'FastAPI', 'Socket.IO', 'Uvicorn', 'Firebase', 'AWS S3', 'Vite', 'Tailwind CSS'],
  },
  {
    label: 'FOUNDATIONS',
    items: ['OOP', 'OS', 'DBMS', 'DSA', 'Computer Vision', 'System Design'],
  },
];

const softSkills = [
  {
    number: '01',
    title: 'Leadership',
    body: 'Led the AI/ML domain at SU Knowledge Hub — managing projects, running workshops, mentoring peers.',
  },
  {
    number: '02',
    title: 'Communication',
    body: "Represented the institution as Innovation Ambassador. Technical ideas only matter when they're understood.",
  },
  {
    number: '03',
    title: 'Problem Solving',
    body: "Every project starts with a gap, not a feature list. The problem is always harder than it looks.",
  },
];

export default function Skills() {
  return (
    <div className="skills-page">
      {/* ====== HEADER ====== */}
      <section className="skills-header zone-a">
        <ScrollReveal>
          <span className="label-mono" style={{ letterSpacing: '0.2em' }}>
            THE METHOD
          </span>
          <h1 className="display-text" style={{ marginTop: 8 }}>
            How I actually build things.
          </h1>
          <p className="skills-header__body">
            No percentages. No bar charts. The actual questions I ask
            before writing a line of code.
          </p>
        </ScrollReveal>
      </section>

      {/* ====== PILLARS ====== */}
      <section className="pillars zone-b">
        {pillars.map((p, i) => (
          <ScrollReveal key={p.number} delay={i * 0.1}>
            <div className="pillar">
              <div className="pillar__left">
                <span className="pillar__number">{p.number}</span>
                <h2 className="pillar__headline">{p.headline}</h2>
                <p className="pillar__body">{p.body}</p>
                <p className="pillar__belief">{p.belief}</p>
              </div>
              <div className="pillar__right">
                <span className="label-mono-sm">{p.label}</span>
                <p className="pillar__tools">{p.tools}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </section>

      {/* ====== FULL TOOLKIT ====== */}
      <section className="toolkit zone-a">
        <ScrollReveal>
          <span className="label-mono" style={{ letterSpacing: '0.14em' }}>
            FULL TOOLKIT
          </span>
          <h2 className="section-title" style={{ marginTop: 8, marginBottom: 48 }}>
            Languages, tools, fundamentals.
          </h2>
        </ScrollReveal>

        <div className="toolkit__grid">
          {toolkit.map((col, i) => (
            <ScrollReveal key={col.label} delay={i * 0.08}>
              <div className="toolkit__col">
                <span className="label-mono-sm">{col.label}</span>
                <ul className="toolkit__list">
                  {col.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ====== SOFT SKILLS ====== */}
      <section className="soft-skills zone-b">
        <div className="soft-skills__grid">
          {softSkills.map((s, i) => (
            <ScrollReveal key={s.number} delay={i * 0.1}>
              <div className="soft-skill">
                <span className="soft-skill__num">{s.number}</span>
                <h3 className="soft-skill__title">{s.title}</h3>
                <p className="soft-skill__body">{s.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
