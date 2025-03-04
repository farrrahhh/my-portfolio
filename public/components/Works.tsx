"use client";

import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import Image from "next/image";

// Motion Animation Variants
const fadeIn = (direction = "up", type = "spring", delay = 0, duration = 0.75) => ({
  initial: { opacity: 0, y: direction === "up" ? 50 : -50 },
  animate: { opacity: 1, y: 0, transition: { type, delay, duration } },
});

const textVariant = () => ({
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
});

// Project Data
const projects = [
  {
    name: "CapyLingo",
    description: "CapyLingo is an interactive platform helping First-Year (TPB) students learn English through fun quizzes, modules, and activities, inspired by the calm yet smart capybara.",
    tags: [
      { name: "node", color: "text-blue-400" },
      { name: "MySQL", color: "text-green-400" },
      { name: "html css js", color: "text-pink-400" },
    ],
    image: "/assets/project1-.png", 
    source_code_link: "https://github.com/farrrahhh/II3140-K2-Kel19",
  },
  {
    name: "Machine Learning",
    description: "Developed a machine learning model using CRISP-DM to classify URLs as phishing or legitimate, leveraging Naïve Bayes and KNN.",
    tags: [
      { name: "python", color: "text-blue-400" },
      { name: "numpy", color: "text-green-400" },
      { name: "pandas", color: "text-pink-400" },
    ],
    image: "/assets/project2.png",
    source_code_link: "https://github.com/farrrahhh/49_Tugas_Besar_1_IF3070_Dasar_Inteligensi_Artifisial",
  },
  {
    name: "HarmonyRoom",
    description: "HarmonyRoom is a web platform that connects musicians with bandmates, studios, and instrument rentals, built with a service-oriented architecture for a seamless user experience.",
    tags: [
      { name: "nextjs", color: "text-blue-400" },
      { name: "tailwind", color: "text-green-400" },
      { name: "react", color: "text-pink-400" },
    ],
    image: "/assets/project3.png",
    source_code_link: "https://github.com/farrrahhh/harmony-room",
  },
];

// Project Card Component
interface ProjectCardProps {
  index: number;
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string;
  source_code_link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        tiltMaxAngleX={45}
        tiltMaxAngleY={45}
        scale={1}
        transitionSpeed={450}
        className="bg-[#15152a] p-5 rounded-2xl sm:w-[360px] w-full shadow-lg"
      >
        <div className="relative w-full h-[230px] rounded-2xl overflow-hidden">
          <Image src={image} alt={name} layout="fill" objectFit="cover" className="rounded-2xl" priority={index < 2} />
          <div className="absolute inset-0 flex justify-end m-3">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="bg-black/60 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <Image src="/assets/github.png" alt="source code" width={24} height={24} />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-gray-400 text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

// Works Component
const Works = () => {
  return (
    <section id="work" className="py-24 px-6 sm:px-12 md:px-20 lg:px-32 bg-[#0f0f1a]">
      <motion.div variants={textVariant()} className="text-center">
        <p className="text-gray-400 text-sm uppercase tracking-wide">My Work</p>
        <h2 className="text-white text-5xl font-bold mt-2">
          Projects<span className="text-[#915EFF]">.</span>
        </h2>
      </motion.div>

      <div className="w-full flex justify-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-6 text-gray-400 text-lg max-w-3xl text-center leading-relaxed"
        >
          Following projects showcase my skills and experience through real-world examples. Each project 
          includes a brief description, technologies used, and links to the code repository.
        </motion.p>
      </div>

      <div className="mt-16 flex flex-wrap justify-center gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Works;