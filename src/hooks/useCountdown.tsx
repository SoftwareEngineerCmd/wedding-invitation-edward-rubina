import { useEffect, useState } from "react";

const WEDDING_DATE = new Date("2026-07-03T17:00:00+04:00").getTime();

type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const getTimeLeft = (): Countdown => {
  const diff = WEDDING_DATE - Date.now();

  const safeDiff = Math.max(0, diff);

  return {
    days: Math.floor(safeDiff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((safeDiff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((safeDiff / (1000 * 60)) % 60),
    seconds: Math.floor((safeDiff / 1000) % 60),
  };
};

const format = (n: number) => String(n).padStart(2, "0");

export const useCountdown = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return {
    days: format(timeLeft.days),
    hours: format(timeLeft.hours),
    minutes: format(timeLeft.minutes),
    seconds: format(timeLeft.seconds),
  };
};
