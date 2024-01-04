import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import memegeneratorImg from "@/public/Meme Generator.png"
import sneakerImg from "@/public/sneakerImg.png";
import fancyImg from "@/public/fancy-counter.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Fancy Counter",
    description:
      "Fancy Counter is a simple yet powerful and beautiful counter application for the web.",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: fancyImg,
    githubUrl: "https://github.com/agbaniongithub/fancy-counter",
    siteUrl: "https://fancycounterbyagbani.netlify.app"
  },
  {
    title: "CorpComment",
    description:
      "Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
    githubUrl: "https://github.com/agbaniongithub/corpcomment",
    siteUrl: "https://corpcommentbyagbani.netlify.app"
  },
  {
    title: "Word Analytics",
    description:
    "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
    githubUrl: "https://github.com/agbaniongithub/Word-Analytics",
    siteUrl: "https://wordanalyticsbyagbani.netlify.app"
  },
  
  {
    title: "React Meme Generator",
    description:
    "A meme generator with nostalgic and popular memes built with React and Tailwind CSS.",
    tags: ["React", "Tailwind"],
    imageUrl: memegeneratorImg,
    githubUrl: "https://github.com/agbaniongithub/Word-Analytics",
    siteUrl: "https://memegeneratorbyagbani.netlify.app"
  },
  {
    title: "E-Commerce Page",
    description:
    "An E-Commerce landing page. I was the front-end developer.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: sneakerImg,
    githubUrl: "https://github.com/agbaniongithub/E-commerce-product-page",
    siteUrl: "https://e-commerce-agbani.netlify.app/"
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
    githubUrl: "https://github.com/agbaniongithub/corpcomment",
    siteUrl: "https://rmtdevbyagbani.netlify.app"
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Framer Motion",
] as const;