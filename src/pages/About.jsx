import ScrollReveal from '../components/ScrollReveal';
import PortraitB from '../components/PortraitB';
import './About.css';

export default function About() {
  return (
    <div className="about">
      {/* ====== PORTRAIT HERO ====== */}
      <PortraitB />

      {/* ====== NARRATIVE ====== */}
      <section className="narrative zone-b">
        <div className="narrative__content">
          <ScrollReveal>
            <h2 className="narrative__question">
              What do all of these projects have in common?
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="narrative__para">
              I'm a CS student at MJCET working on AI, machine learning,
              and backend systems. I'm in my 6th semester.
            </p>
          </ScrollReveal>

          <div className="hairline" style={{ margin: '32px auto' }} />

          <ScrollReveal delay={0.2}>
            <p className="narrative__para">
              Most of my projects start with{' '}
              <em className="amber-italic">a question I can't leave alone</em>.
              Usually about what happens when a system fails the people depending
              on it — coordination breaks down, memory can't hold on, fairness
              isn't enforced. I build in response to that.
            </p>
          </ScrollReveal>

          <div className="hairline" style={{ margin: '32px auto' }} />

          <ScrollReveal delay={0.3}>
            <p className="narrative__para">
              I don't think of AI as the product. It's the layer that makes
              the response possible — the part that{' '}
              <em className="amber-italic">sees what a human would have missed</em>,
              or responds{' '}
              <em className="amber-italic">faster than an institution could</em>.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ====== PERSONALITY ====== */}
      <section className="personality zone-a">
        <div className="personality__grid">
          <ScrollReveal delay={0}>
            <div className="personality__cell">
              <span className="personality__num">01</span>
              <h3 className="personality__title">When I'm not coding</h3>
              <p className="personality__body">
                I'm usually thinking about why things break at scale,
                reading about system design, or watching how institutions
                actually function vs how they're supposed to. I'm also a Radio
                Jockey at Aakashvani Hyderabad for the Yuvavani program.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="personality__cell">
              <span className="personality__num">02</span>
              <h3 className="personality__title">What drives the work</h3>
              <p className="personality__body">
                I'm drawn to problems where delay has a real cost.
                The urgency is what makes it interesting.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="personality__cell">
              <span className="personality__num">03</span>
              <h3 className="personality__title">Currently learning</h3>
              <p className="personality__body">
                Deeper ML engineering — training pipelines, model evaluation,
                deployment patterns. Less demo, more production.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ====== EXPERIENCE ====== */}
      <section className="experience zone-b">
        <ScrollReveal>
          <span className="label-mono" style={{ letterSpacing: '0.14em' }}>
            EXPERIENCE
          </span>
          <h2 className="section-title" style={{ marginTop: 8, marginBottom: 48 }}>
            Where I've contributed.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="exp-card">
            <div className="exp-card__left">
              <h3 className="exp-card__role">AI/ML Domain Head</h3>
              <p className="exp-card__org">SU Knowledge Hub, MJCET</p>
              <p className="exp-card__desc">
                Lead the AI/ML technical domain. Mentor students, run workshops,
                and translate complex concepts into accessible knowledge.
              </p>
            </div>
            <span className="exp-card__period">Until Nov 2025</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="exp-card">
            <div className="exp-card__left">
              <h3 className="exp-card__role">Student Innovation Ambassador</h3>
              <p className="exp-card__org">MJCET</p>
              <p className="exp-card__desc">
                Represented the institution's innovation initiatives. Bridged
                student ideas with institutional resources and opportunities.
              </p>
            </div>
            <span className="exp-card__period">Until Nov 2025</span>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
