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
      Hi, I'm David, a passionate FrontEnd Developer based in Lagos, Nigeria. With a background in Engineering and Information Technology, I specialize in building the UI for Websites and Applications.
My journey began with a desire to study the web. I quickly discovered I was interested in manipulating the look and feel of websites from the underlying code. I believe in atomic habits, and setting out time to study daily helps me improve in my craft as a FrontEnd Developer. strive to incorporate that into everything I do. On this site, you'll find my portfolio of projects. Feel free to explore, and don't hesitate to reach out if you'd like to connect!</p>
    </motion.section>
  );
}