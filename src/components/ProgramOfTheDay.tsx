import Photo1 from "../assets/wedding/photo-33.jpg";
import Photo2 from "../assets/wedding/photo-333.jpg";
import Photo3 from "../assets/wedding/photo-3333.jpg";
import Photo4 from "../assets/wedding/photo-4.jpg";
import Rings from "../assets/rings.svg";
import Cups from "../assets/cups.svg";
import { motion } from "framer-motion";

import { EventCard } from "./UI/EventCard";

const WeddingGallery = () => {
  return (
    <section className="relative overflow-hidden">
      {/* ================= DESKTOP ================= */}
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
            <img src={Photo1} alt="" className="w-full h-full object-cover " />
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
              src={Photo2}
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
            <img src={Photo3} alt="" className="w-full h-full object-cover " />
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

const CelebrationGallery = () => {
  return (
    <div className="max-w-5xl mx-auto py-10 flex justify-center">
      <motion.div
        initial={{ opacity: 0, x: -60, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        viewport={{ amount: 0.6, once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img src={Photo4} className="w-70 h-125 object-cover object-top" />
      </motion.div>
    </div>
  );
};

export const ProgramOfTheDay = () => {
  return (
    <section className="py-10">
      <div className="flex flex-col items-center">
        <p className="heading-script text-primary text-center">Օրվա Ծրագիր</p>
        <div className="w-px h-30 bg-primary " />
      </div>

      <WeddingGallery />
      <EventCard
        icon={Rings}
        title="Սուրբ Պսակի արարողություն"
        time="15:10"
        place="Սուրբ Հռիփսիմե եկեղեցի"
        address="ք. Վաղարշապատ (Էջմիածին)"
        href="https://yandex.ru/maps/org/35208500744?si=9e7zyen6mttgw15mu4tj8vw43w"
      />
      <CelebrationGallery />
      <EventCard
        icon={Cups}
        title="Տոնական խնջույք"
        time="18:00"
        place="Ոսկե Ծիրան Պրեմիում Հոլլ"
        address="ք. Արտաշատ, Ազատամարտիկների փողոցին կից, Աբովյան 91"
        href="https://yandex.com/navi/org/99509424178?si=rhp9103zw5u6wv3n9828p4yz8w"
      />
    </section>
  );
};
