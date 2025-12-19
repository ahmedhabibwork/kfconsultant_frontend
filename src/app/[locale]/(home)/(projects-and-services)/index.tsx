"use client";

import React from "react";
import { Link } from "@/i18n/navigation";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Project } from "@/types/homeTypes";
import { motion } from "motion/react";

interface ProjectsAndServicesProps {
  projects: Project[];
  whatsappNumber: string;
  phoneNumber: string;
}

function useCardsPerView() {
  const [cards, setCards] = React.useState(3);

  React.useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      // keep it responsive; still "3 cards" on desktop
      if (w < 640) setCards(1);
      else if (w < 1024) setCards(2);
      else setCards(3);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  return cards;
}

function useElementWidth<T extends HTMLElement>() {
  const ref = React.useRef<T | null>(null);
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    const ro = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect?.width ?? 0;
      setWidth(w);
    });
    ro.observe(el);

    // initial
    setWidth(el.getBoundingClientRect().width);

    return () => ro.disconnect();
  }, []);

  return { ref, width };
}

const ProjectsAndServices = ({ projects }: ProjectsAndServicesProps) => {
  const featuredProjects = projects; // use all; show 3 per view
  const cardsPerView = useCardsPerView();
  const { ref: viewportRef, width: viewportWidth } = useElementWidth<HTMLDivElement>();

  const [index, setIndex] = React.useState(0);

  const maxIndex = Math.max(0, featuredProjects.length - cardsPerView);
  const canSlide = featuredProjects.length > cardsPerView;

  React.useEffect(() => {
    // clamp when resizing / data changes
    setIndex((i) => Math.min(Math.max(0, i), maxIndex));
  }, [maxIndex]);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

  // pixels to move for 1 card
  const cardStep = cardsPerView > 0 ? viewportWidth / cardsPerView : 0;
  const x = -index * cardStep;

  const totalPages = Math.ceil(featuredProjects.length / cardsPerView);
  const activePage = Math.floor(index / cardsPerView);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <div>
              <motion.span
                variants={itemVariants}
                className="text-xs font-semibold tracking-widest text-[#666666] uppercase mb-2 block"
              >
                SHOWCASE
              </motion.span>
              <motion.h2
                variants={itemVariants}
                className="text-3xl lg:text-4xl font-bold text-black tracking-tight"
              >
                Featured Projects
              </motion.h2>
            </div>

            <motion.div variants={itemVariants}>
              <Link
                href="/projects"
                className="group inline-flex items-center text-sm font-bold text-black hover:text-[#666666] transition-colors"
              >
                Show All Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* 3-cards slider (only slides if there are more) */}
          <motion.div variants={itemVariants} className="relative">
            <div ref={viewportRef} className="relative overflow-hidden">
              <motion.div
                className="flex gap-6 will-change-transform"
                animate={{ x }}
                transition={{ type: "spring", stiffness: 260, damping: 28 }}
                drag={canSlide ? "x" : false}
                dragConstraints={{
                  left: -maxIndex * cardStep,
                  right: 0,
                }}
                dragElastic={0.06}
                onDragEnd={(_, info) => {
                  if (!canSlide) return;

                  const swipe = info.offset.x + info.velocity.x * 120;
                  if (swipe < -80) next();
                  else if (swipe > 80) prev();
                }}
              >
                {featuredProjects.map((project) => (
                  <div
                    key={project.id}
                    className={[
                      "shrink-0",
                      "basis-full",
                      "sm:basis-[calc(50%-12px)]",
                      "lg:basis-[calc(33.333%-16px)]",
                    ].join(" ")}
                  >
                    <motion.div className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="block w-full h-full"
                      >
                        {/* Background Image */}
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                          style={{ backgroundImage: `url(${project.cover_image})` }}
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          <h3 className="text-2xl font-bold mb-1 leading-tight">
                            {project.title}
                          </h3>
                          <p className="text-gray-300 text-sm font-medium line-clamp-1">
                            {[project.category?.title, project.location]
                              .filter(Boolean)
                              .join(", ")}
                          </p>
                        </div>
                      </Link>
                    </motion.div>
                  </div>
                ))}
              </motion.div>

              {/* Controls (only if we can slide) */}
              {canSlide && (
                <>
                  <button
                    type="button"
                    aria-label="Previous"
                    onClick={prev}
                    disabled={index === 0}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/90 hover:bg-white text-black shadow-sm p-2 transition disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  <button
                    type="button"
                    aria-label="Next"
                    onClick={next}
                    disabled={index === maxIndex}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/90 hover:bg-white text-black shadow-sm p-2 transition disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>

                  {/* Dots by page */}
                  <div className="mt-6 flex items-center justify-center gap-2">
                    {Array.from({ length: totalPages }).map((_, p) => (
                      <button
                        key={p}
                        type="button"
                        aria-label={`Go to page ${p + 1}`}
                        onClick={() => setIndex(Math.min(maxIndex, p * cardsPerView))}
                        className={`h-2.5 w-2.5 rounded-full transition ${
                          p === activePage ? "bg-black" : "bg-black/20 hover:bg-black/35"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsAndServices;
