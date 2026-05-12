import { CountDown } from "./components/CountDown";
import { Hero } from "./components/Hero";
import "./App.css";
import { About } from "./components/About";
import { ProgramOfTheDay } from "./components/ProgramOfTheDay";
import { Details } from "./components/Details";
import { Footer } from "./components/Footer";

export const Invite = () => {
  return (
    <div className="invite pb-10">
      <Hero />
      <CountDown />
      <About />
      <ProgramOfTheDay />
      <Details />
      <Footer />
    </div>
  );
};
