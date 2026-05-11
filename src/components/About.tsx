import { ScrollReveal } from "@allwells/react-scroll-reveal";
import Photo1 from "../assets/wedding/photo-22.jpg";
import Photo2 from "../assets/wedding/photo-222.jpg";
import { Section } from "./UI/Section";

export const AboutGallery = () => {
  return (
    <div className="max-w-5xl mx-auto py-10 flex justify-center overflow-hidden">
      <div className="grid grid-cols-2 items-start">
        {/* Left image */}
        <ScrollReveal animationType="slideRight" duration={1200}>
          <div className="translate-x-5 z-10 relative">
            <img
              src={Photo1}
              className="w-[320px] h-125 object-cover"
              alt="Edward & Rubina"
            />
          </div>
        </ScrollReveal>

        {/* Right image */}
        <ScrollReveal animationType="slideLeft" duration={1200}>
          <div className="-translate-x-5 translate-y-16 z-20 relative">
            <img
              src={Photo2}
              alt="Edward & Rubina"
              className="w-[320px] h-125 object-cover object-top"
            />
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export const About = () => {
  return (
    <>
      <Section id="about">
        <div className="text-center">
          <p className="heading-script gold-shimmer">Սիրելի հյուրեր</p>

          <div className="divider">
            <span>❦</span>
          </div>

          <p className="about-text">
            Մեր սրտերում ծնված լույսը շուտով կդառնա մի գեղեցիկ միություն՝
            ընտանիք։ Սիրով հրավիրում ենք Ձեզ ներկա գտնվելու այդ հեքիաթային
            օրվան, որտեղ ամեն ինչ շնչում է սիրով, ջերմությամբ ու երջանկությամբ…
            🤍
          </p>

          <p className="about-date">03.07.2026</p>
        </div>
      </Section>

      <AboutGallery />
    </>
  );
};
