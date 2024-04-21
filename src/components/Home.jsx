"use client";
/* import { GoogleGeminiEffect } from "./ui/Gemini-effect";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react"; 
import { HeroHighlight, Highlight } from "./ui/Hero-highlight"; */
import Image from "next/image";
import React from "react";
import globe from "../../public/globe1.png";
const Content = () => {
  /* const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]); */

  return (
    <div className="bg-gradient-to-b from-codenotes-black-100 to-codenotes-black-300 w-full h-screen mt-16">
      <p className="text-white text-7xl text-center pt-12 font-bold">
        Saving The World
      </p>
      <p className="text-white text-4xl text-center font-bold">
        One Assignment at a Time
      </p>
      <div className="flex justify-center">
        <Image
          src={globe}
          alt="globe"
          className="w-5/12 relative flex items-center justify-center"
        />
      </div>

      {/* <HeroHighlight className="flex flex-col gap-4 items-center justify-center bg-codenotes-ooze w-full h-screen py-56 pb-56 opacity-25">
        <p className="text-4xl text-white font-semibold">CHANGING THE WORLD</p>
        <Highlight className="flex items-center px-3 py-2 text-white">
          ONE ASSIGNMENT AT A TIME
        </Highlight>
      </HeroHighlight>

  
       className="h-[400vh] bg-black w-full dark:border dark:border-white/[0.1] relative overflow-clip" 
       ref={ref} 
    >
      <HeroHighlight className="flex flex-col gap-4 items-center justify-center">
        <p className="text-4xl text-white font-semibold">CHANGING THE WORLD</p>

        <Highlight className="flex items-center px-3 py-2 text-white">
          ONE CHROMOSOME AT A TIME
        </Highlight>
      </HeroHighlight>
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
      /> */}
    </div>
  );
};

export default Content;
