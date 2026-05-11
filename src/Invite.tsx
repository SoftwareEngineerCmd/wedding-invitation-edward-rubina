import { CountDown } from "./components/CountDown";
import { Hero } from "./components/Hero";
import "./App.css";
import { About } from "./components/About";
import { ProgramOfTheDay } from "./components/ProgramOfTheDay";

export const Invite = () => {
  return (
    <div className="invite pb-10">
      <Hero />
      <CountDown />
      <About />
      <ProgramOfTheDay />
      {/* GALLERY */}
      {/* SCHEDULE */}
    </div>
  );
};
