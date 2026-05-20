import './Portrait.css';

export default function PortraitA() {
  return (
    <div className="portrait-a">
      <div className="portrait-a__img-wrap">
        <img
          src="/images/portrait-hero.jpg"
          alt="Sathvik Tumati portrait"
          loading="eager"
        />
      </div>
      <div className="portrait-a__fade" />
    </div>
  );
}
