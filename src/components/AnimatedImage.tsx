import type { FC, ReactNode } from "react";
import { motion } from "framer-motion";

type Side = "left" | "right" | "bottom";

interface AnimatedOnScrollProps {
  children: ReactNode;
  side?: Side;
  className?: string;
  duration?: number;
  delay?: number;
}

export const AnimatedOnScroll: FC<AnimatedOnScrollProps> = ({
  children,
  side = "bottom",
  className,
  duration = 1,
  delay = 0,
}) => {
  const getInitial = () => {
    switch (side) {
      case "left":
        return { x: -100, opacity: 0 };
      case "right":
        return { x: 100, opacity: 0 };
      default:
        return { y: 60, opacity: 0 };
    }
  };

  return (
    <motion.div
      className={className}
      initial={getInitial()}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};
