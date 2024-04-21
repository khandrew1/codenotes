"use client";
import { GoogleGeminiEffect } from "./ui/Gemini-effect";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { HeroHighlight, Highlight } from "./ui/Hero-highlight";
const Content = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <div
      className="h-[400vh] bg-black w-full dark:border dark:border-white/[0.1] relative overflow-clip"
      ref={ref}
    >
      <GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
        title="CodeNotes"
        description="Deliver and grade assessments anywhere"
        className="YourClassName"
      />

      <HeroHighlight className="flex flex-col gap-4 items-center justify-center">
        <p className="text-4xl text-white font-semibold">CHANGING THE WORLD</p>

        <Highlight className="flex items-center px-3 py-2 text-white">
          ONE CHROMOSOME AT A TIME
        </Highlight>
      </HeroHighlight>
    </div>
  );
};

export default Content;
