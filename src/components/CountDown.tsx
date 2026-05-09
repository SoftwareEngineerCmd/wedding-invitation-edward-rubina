import { useCountdown } from "../hooks/useCountdown";
import { Section } from "./UI/Section";

import React from "react";

export const CountDown = () => {
  const { days, hours, minutes, seconds } = useCountdown();

  return (
    <Section>
      <p className="text-center text-sm uppercase tracking-[0.4em] text-muted-foreground">
        Մնաց
      </p>

      <div className="grid grid-flow-col justify-between gap-3 text-center auto-cols-max">
        <TimeBox value={days} label="Օր" />

        <div className="w-px h-12 bg-primary" />

        <TimeBox value={hours} label="Ժամ" />

        <div className="w-px h-12 bg-primary" />

        <TimeBox value={minutes} label="Րոպե" />

        <div className="w-px h-12 bg-primary" />

        <TimeBox value={seconds} label="Վայրկյան" />
      </div>
    </Section>
  );
};

function TimeBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col text-center items-center text-primary">
      <span className="countdown font-mono text-4xl sm:text-7xl ">
        <span
          style={{ "--value": value, "--digits": 2 } as React.CSSProperties}
          aria-live="polite"
          aria-label={String(value)}
        >
          {value}
        </span>
      </span>
      {label}
    </div>
  );
}
