"use client";

import React from "react";
import SectionHeading from "./SectionHeading"
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function AboutMe() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Electrical Engineering</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        My favorite part of programming is the
        ability to learn everyday. My core stack
        is{" "}
        <span className="font-medium">
          React.js, Next.js, Node.js, and MongoDB
        </span>
        . I am currently implementing TypeScript in all my Javascript projects. I am always eager to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a Frontend Developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy fitness, reading, and walking my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">sales and marketing.</span>
      </p>
    </motion.section>
  );
}