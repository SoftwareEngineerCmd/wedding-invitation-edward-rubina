import Photo from "../assets/wedding/photo-1.jpg";
import MonogramER from "../assets/monogram-er.png";

export const Hero = () => {
  return (
    <>
      <header className="hero">
        <div className="hero-bg">
          <img src={Photo} alt="Edward and Rubina" />
        </div>
        <div className="hero-overlay" />
        {/* <div className="h-1/1 flex flex-col  justify-between"> */}
        {/* <p className="eyebrow z-10 relative">Հարսանյաց հրավեր</p> */}

        <div className="hero-content">
          <img
            src={MonogramER}
            alt="E & R monogram"
            className="monogram"
            width={1024}
            height={1024}
          />
          <h1 className="names">Edward &amp; Rubina</h1>
          <p className="tagline">Our forever begins today</p>
        </div>
        {/* </div> */}
      </header>
    </>
  );
};
