"use client";
import React from "react";
import { Building2, Users2, HardHat, Link2 } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    id: 1,
    number: 250,
    label: "PROJECTS+",
    icon: Building2,
  },
  {
    id: 2,
    number: 150,
    label: "EMPLOYEES+",
    icon: Users2,
  },
  {
    id: 3,
    number: 50,
    label: "SITE SUPERVISORS+",
    icon: HardHat,
  },
  {
    id: 4,
    number: 10,
    label: "JV-PARTNERS+",
    icon: Link2,
  },
];

const Analytics = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="bg-[#000035] py-25 text-white" ref={ref}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center justify-center gap-4 group hover:scale-105 transition-transform duration-300"
            >
              {/* Icon Circle */}
              <div className="w-24 h-24 rounded-full bg-[#9ca3af]/30 flex items-center justify-center mb-2 group-hover:bg-[#9ca3af]/40 transition-colors">
                <stat.icon
                  strokeWidth={1}
                  className="w-12 h-12 text-white/90"
                />
              </div>

              {/* Number */}
              <div className="text-4xl font-bold">
                {inView ? <CountUp end={stat.number} duration={2.5} /> : 0}
              </div>

              {/* Label */}
              <div className="text-xs tracking-[0.2em] font-light text-white/80 uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
