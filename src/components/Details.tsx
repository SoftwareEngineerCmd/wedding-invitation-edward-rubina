import { motion } from "framer-motion";
import Photo1 from "../assets/wedding/photo-5.jpg";
import Photo2 from "../assets/wedding/photo-55.jpg";
import Photo3 from "../assets/wedding/photo-555.jpg";
import Photo1Mobile from "../assets/wedding/photo-5.mobile.jpg";
import Photo2Mobile from "../assets/wedding/photo-55.mobile.jpg";
import Photo3Mobile from "../assets/wedding/photo-555.mobile.jpg";
import { Section } from "./UI/Section";

const Gallery = () => {
  return (
    <section className="relative overflow-hidden">
      <div className=" flex sm:hidden items-center justify-center pb-20">
        <div className="relative w-full max-w-6xl h-[100vw] py-2 flex items-center justify-center">
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="absolute z-20 w-[50vw] h-[75vw] right-1/2"
          >
            <img
              src={Photo2Mobile}
              alt=""
              className="w-full h-full object-cover "
            />
          </motion.div>

          {/* CENTER IMAGE (ABSOLUTE HERO) */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85 }}
            className="absolute z-10 w-[60vw] h-[90vw] right-0"
          >
            <img
              src={Photo1Mobile}
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="absolute z-30 w-[45vw] h-[65vw] top-2/3 "
          >
            <img
              src={Photo3Mobile}
              alt=""
              className="w-full h-full object-cover object-[40%_50%]"
            />
          </motion.div>
        </div>
      </div>

      {/* ================= SM+ (your design) ================= */}
      <div className="hidden sm:flex relative h-140 items-center justify-center">
        {/* LEFT */}
        <motion.img
          src={Photo1}
          initial={{ opacity: 0, x: 100, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-50 h-75 object-cover z-20 shadow-2xl"
          alt="Edward & Rubina"
        />

        {/* CENTER */}
        <motion.img
          src={Photo2}
          initial={{ opacity: 0, scale: 0.95, filter: "blur(20px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="w-75 h-105 object-cover z-10"
          alt="Edward & Rubina"
        />

        {/* RIGHT */}
        <motion.img
          src={Photo3}
          initial={{ opacity: 0, x: -100, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-50 h-75 object-cover z-30"
          alt="Edward & Rubina"
        />
      </div>
    </section>
  );
};

export const Details = () => {
  return (
    <>
      <Section>
        <Gallery />
      </Section>
      <Section>
        <section className="section details text-center">
          <h2 className="heading-script gold-shimmer monsieur">Details</h2>
          <p className="about-text center" style={{ marginTop: "1.5rem" }}>
            Ձեզ հետ բերեք ՍԵՐ, ժպիտներ ու անսահման դրական էմոցիաներ:
          </p>
          <p className="about-text center" style={{ marginTop: "1.25rem" }}>
            Հարսի պարի և հրավառության ընթացքում խնդրենք ծնողներին ուշադիր լինել
            իրենց բալիկների նկատմամբ:
          </p>
        </section>
      </Section>
    </>
  );
};
