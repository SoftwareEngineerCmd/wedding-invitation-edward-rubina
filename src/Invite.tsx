import { CountDown } from "./components/CountDown";
import { Petals } from "./components/UI/Petals";
import { Hero } from "./components/Hero";
import "./App.css";

export const Invite = () => {
  return (
    <div className="invite">
      <Petals />
      <Hero />
      <CountDown />
      {/* ABOUT */}
      {/* GALLERY */}
      {/* SCHEDULE */}
    </div>
  );
};
