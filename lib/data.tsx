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
import lowkey from '@/public/lowkey.png'
import home from '@/public/home.png'

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
    title: "Lowkey Autos",
    description:
      "The Lowkey Autos website is a sleek, user-friendly platform designed with a focus on aesthetics and functionality.",
    tags: ["HTML", "ReactJS / NextJS", "Tailwind CSS", "Framer Motion"],
    imageUrl: lowkey,
    githubUrl: "https://github.com/agbaniongithub/lowkey-autos",
    siteUrl: "https://testdomainlowkeyautos.vercel.app"
  },
  {
    title: "VoltStore",
    description:
      "Voltstore is a MERN stack e-commerce website. I was the Frontend Developer.",
    tags: ["NextJS", "Git", "Typescript", "Tailwind CSS", "MongoDB", 'NodeJS', 'ExpressJS'],
    imageUrl: home,
    githubUrl: "https://github.com/IbnuJabir/Voltstore/",
    siteUrl: "https://github.com/IbnuJabir/Voltstore/"
  },
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
    title: "Word Analytics",
    description:
    "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: wordanalyticsImg,
    githubUrl: "https://github.com/agbaniongithub/Word-Analytics",
    siteUrl: "https://wordanalyticsbyagbani.netlify.app"
  },
  {
    title: "Space Tourism",
    description:
      "A challenging UI for a space exploration website courtesy of FrontEnd Mentor",
    tags: ["Next.JS", "Tailwind CSS"],
    imageUrl: "/space-tourism.png",
    githubUrl: "https://github.com/agbaniongithub/space-tourism-website",
    siteUrl: "https://space-tourism-website-drab.vercel.app"
  },
  {
    title: "CorpComment",
    description:
      "Users can give public feedback to companies.",
    tags: ["HMTL", "CSS", "Javascript", "Node.JS"],
    imageUrl: "/corpcomment.png",
    githubUrl: "https://github.com/agbaniongithub/corpcomment",
    siteUrl: "https://corpcommentbyagbani.netlify.app"
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "ReactJS",
  "NextJS",
  "NodeJS",
  "Git",
  "Tailwind CSS",
  "PHP",
  "Wordpress",
  "MySQL",
  "Prisma",
  "MongoDB",
  "Framer Motion",
  "Oracle Flexcube"
] as const;