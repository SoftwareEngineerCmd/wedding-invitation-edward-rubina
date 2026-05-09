import Photo from "../assets/wedding/photo-1.jpg";
export const Hero = () => {
  return (
    <>
      <header className="hero">
        <div className="hero-bg">
          <img src={Photo} alt="Edward and Rubina" />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Հարսանյաց հրավեր</p>
          <div className="monogram gold-shimmer">E &amp; R</div>
          <h1 className="names">Edward &amp; Rubina</h1>
          <p className="tagline">Our forever begins today</p>
          <p className="hero-date">03 · 07 · 2026</p>
          <div className="scroll-cue" />
        </div>
      </header>
    </>
  );
};
