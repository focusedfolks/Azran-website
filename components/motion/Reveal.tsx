"use client";

import { createContext, useContext, type ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const DEFAULT_EASE: [number, number, number, number] = [0, 0, 0.2, 1];
const DEFAULT_DURATION = 0.32;
const DISTANCE = 20;
const DEFAULT_STAGGER = 0.09;

const HOME_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const HOME_DURATION = 0.7;
const HOME_STAGGER = 0.14;

type MotionTiming = {
  duration: number;
  ease: [number, number, number, number];
  stagger: number;
};

const DEFAULT_TIMING: MotionTiming = {
  duration: DEFAULT_DURATION,
  ease: DEFAULT_EASE,
  stagger: DEFAULT_STAGGER,
};

const HOME_TIMING: MotionTiming = {
  duration: HOME_DURATION,
  ease: HOME_EASE,
  stagger: HOME_STAGGER,
};

const MotionTimingContext = createContext<MotionTiming>(DEFAULT_TIMING);

export function HomeRevealScope({ children }: { children: ReactNode }) {
  return (
    <MotionTimingContext.Provider value={HOME_TIMING}>
      {children}
    </MotionTimingContext.Provider>
  );
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduce = useReducedMotion();
  const { duration, ease } = useContext(MotionTimingContext);

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: DISTANCE }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
};

export function Stagger({ children, className }: StaggerProps) {
  const reduce = useReducedMotion();
  const { stagger } = useContext(MotionTimingContext);

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  const variants: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: stagger },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: StaggerProps) {
  const reduce = useReducedMotion();
  const { duration, ease } = useContext(MotionTimingContext);

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  const variants: Variants = {
    hidden: { opacity: 0, y: DISTANCE },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration, ease },
    },
  };

  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}
