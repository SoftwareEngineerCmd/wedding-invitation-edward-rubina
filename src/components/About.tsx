import Photo1 from "../assets/wedding/photo-22.jpg";
import Photo2 from "../assets/wedding/photo-222.jpg";
import { CalendarSection } from "./CalendarSection";
import { Section } from "./UI/Section";
import { motion } from "framer-motion";

export const AboutGallery = () => {
  return (
    <div className="max-w-5xl mx-auto py-10 flex justify-center overflow-hidden">
      <div className="grid grid-cols-2 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ amount: 0.8, once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="translate-x-5 z-10 relative">
            <img
              src={Photo1}
              className="w-[320px] h-125 object-cover"
              alt="Edward & Rubina"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ amount: 0.8, once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="-translate-x-5 translate-y-16 z-20 relative">
            <img
              src={Photo2}
              alt="Edward & Rubina"
              className="w-[320px] h-125 object-cover object-top"
            />
          </div>
        </motion.div>
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
            🤎
          </p>

          <CalendarSection
            title="Հուլիս"
            days={[
              { label: "Երկ", value: 28 },
              { label: "Երք", value: 29 },
              { label: "Չրք", value: 30 },
              { label: "Հնգ", value: 1 },
              { label: "Ուրբ", value: 3, active: true },
              { label: "Շբթ", value: 4 },
              { label: "Կիր", value: 5 },
            ]}
          />
        </div>
      </Section>

      <AboutGallery />
    </>
  );
};
