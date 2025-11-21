"use client";
import React, { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "motion/react";

const CountUp = ({ to }: { to: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      animate(count, to, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, to, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

export default CountUp;
