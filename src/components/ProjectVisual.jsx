import './ProjectVisual.css';

export default function ProjectVisual({ visType, size = 'default' }) {
  const sizeClass = size === 'large' ? 'pv--large' : '';

  switch (visType) {
    case 'civic':
      return (
        <div className={`pv pv-civic ${sizeClass}`}>
          <svg className="pv-civic__grid" viewBox="0 0 200 120" fill="none">
            <line x1="0" y1="30" x2="200" y2="30" stroke="#C8922A" strokeOpacity="0.15" />
            <line x1="0" y1="60" x2="200" y2="60" stroke="#C8922A" strokeOpacity="0.15" />
            <line x1="0" y1="90" x2="200" y2="90" stroke="#C8922A" strokeOpacity="0.15" />
            <line x1="50" y1="0" x2="50" y2="120" stroke="#C8922A" strokeOpacity="0.15" />
            <line x1="100" y1="0" x2="100" y2="120" stroke="#C8922A" strokeOpacity="0.15" />
            <line x1="150" y1="0" x2="150" y2="120" stroke="#C8922A" strokeOpacity="0.15" />
          </svg>
          <div className="pv-civic__dot pv-civic__dot--1" />
          <div className="pv-civic__dot pv-civic__dot--2" />
          <div className="pv-civic__dot pv-civic__dot--3" />
          <div className="pv-civic__dot pv-civic__dot--4" />
          <div className="pv-civic__dot pv-civic__dot--5" />
          <div className="pv-civic__card">REQUEST LOGGED · ZONE 4B</div>
        </div>
      );

    case 'mem':
      return (
        <div className={`pv pv-mem ${sizeClass}`}>
          <div className="pv-mem__grid">
            <div className="pv-mem__cell" />
            <div className="pv-mem__cell" />
            <div className="pv-mem__cell" />
            <div className="pv-mem__cell pv-mem__cell--active">
              <div className="pv-mem__glow" />
            </div>
          </div>
          <div className="pv-mem__label">RECOGNISED</div>
        </div>
      );

    case 'epi':
      return (
        <div className={`pv pv-epi ${sizeClass}`}>
          <div className="pv-epi__bars">
            {[18, 25, 30, 35, 42, 55, 68, 80, 95].map((h, i) => (
              <div
                key={i}
                className="pv-epi__bar"
                style={{
                  height: `${h}%`,
                  animationDelay: `${i * 0.1}s`,
                  background: `linear-gradient(to top, rgba(30,50,80,0.6), rgba(200,146,42,${0.2 + i * 0.08}))`,
                }}
              />
            ))}
          </div>
          <div className="pv-epi__scan" />
          <div className="pv-epi__label">▲ SIGNAL DETECTED</div>
        </div>
      );

    case 'int':
      return (
        <div className={`pv pv-int ${sizeClass}`}>
          <div className="pv-int__lines">
            {[85, 70, 90, 60, 75, 80, 65].map((w, i) => (
              <div key={i} className="pv-int__line" style={{ width: `${w}%` }} />
            ))}
          </div>
          <div className="pv-int__highlight">
            <div className="pv-int__anomaly" />
          </div>
          <div className="pv-int__scan" />
        </div>
      );

    case 'dog':
      return (
        <div className={`pv pv-dog ${sizeClass}`}>
          <div className="pv-dog__frame">
            <div className="pv-dog__paw">🐾</div>
          </div>
          <div className="pv-dog__info">
            <span className="pv-dog__breed">Golden Retriever</span>
            <div className="pv-dog__bar-track">
              <div className="pv-dog__bar-fill" />
            </div>
            <span className="pv-dog__score">78.4%</span>
          </div>
        </div>
      );

    default:
      return <div className={`pv ${sizeClass}`} />;
  }
}
