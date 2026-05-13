import Photo from "../assets/wedding/photo-1.1.jpg";
import MonogramER from "../assets/monogram-brown.png";
import { AutoAudio } from "./AutoAudio";
import mp3 from "../assets/audio/John Legend - All of Me (Official Video).mp3";

export const Hero = () => {
  return (
    <>
      <header className="hero">
        <div className="hero-bg">
          <img
            src={Photo}
            alt="Edward and Rubina"
            className="object-cover object-[50%_20%]"
          />
        </div>
        <div className="hero-overlay" />

        <div className="hero-content">
          <img
            src={MonogramER}
            alt="E & R monogram"
            className="monogram object-cover"
            width={1024}
            height={1024}
          />
          <AutoAudio loop volume={0.8} src={mp3} />
          <h1 className="names">
            Edward &amp; Rubina <br />
          </h1>

          <p className="tagline">Our forever begins today</p>
        </div>
      </header>
    </>
  );
};
