"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
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
        Hi, I'm David, a Frontend Developer based in Lagos, Nigeria, with a
        strong foundation in Engineering and Information Technology. I
        specialize in crafting intuitive and visually appealing user interfaces
        for websites and applications. My journey into web development began
        with a curiosity to understand how the web works, and I quickly became
        fascinated by the art of shaping a website's look and feel through code.
        Driven by a commitment to continuous improvement, I practice daily
        learning and believe in the power of atomic habits to enhance my skills
        and creativity. This site showcases my portfolio of projects, where
        passion meets precision. Feel free to explore, and don't hesitate to
        reach out—I’d love to connect!
      </p>
    </motion.section>
  );
}
