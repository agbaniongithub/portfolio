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
        "Hey there! 👋 I'm David, a passionate developer from Nigeria with a flair for turning lines of code into captivating user experiences. I believe in fundamentals and principles, and I also believe in thinking outside the box. I'm currently open to tackling new projects or joining a creative team."
      </p>
    </motion.section>
  );
}