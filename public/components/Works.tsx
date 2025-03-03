"use client";

import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import githubIcon from "../assets/github.png"; // Replace with actual path

const fadeIn = (direction = "up", type = "spring", delay = 0, duration = 0.75) => ({
  initial: { opacity: 0, y: direction === "up" ? 50 : -50 },
  animate: { opacity: 1, y: 0, transition: { type, delay, duration } },
});

const textVariant = () => ({
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
});

const projects = [
  {
    name: "Car Rent",
    description: "Web-based platform for renting cars with a user-friendly interface and secure booking system.",
    tags: [
      { name: "react", color: "text-blue-400" },
      { name: "mongodb", color: "text-green-400" },
      { name: "tailwind", color: "text-pink-400" },
    ],
    image: "./assets/tracer-study.png", // Replace with actual path
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description: "A job portal to search for job openings and view salary insights based on location.",
    tags: [
      { name: "react", color: "text-blue-400" },
      { name: "restapi", color: "text-green-400" },
      { name: "scss", color: "text-pink-400" },
    ],
    image: "/assets/iit.png",
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description: "A travel booking website with curated recommendations for popular destinations.",
    tags: [
      { name: "nextjs", color: "text-blue-400" },
      { name: "supabase", color: "text-green-400" },
      { name: "css", color: "text-pink-400" },
    ],
    image: "../assets/itb.png",
    source_code_link: "https://github.com/",
  },
];

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
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-[#15152a] p-5 rounded-2xl sm:w-[360px] w-full shadow-lg"
      >
        <div className="relative w-full h-[230px] rounded-2xl overflow-hidden">
          <img src={image} alt="project_image" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex justify-end m-3">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="bg-black/60 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={githubIcon} alt="source code" className="w-6 h-6 object-contain" />
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

const Works = () => {
  return (
    <section id="projects" className="py-24 px-6 sm:px-12 md:px-20 lg:px-32 bg-[#0f0f1a]">
      <motion.div variants={textVariant()} className="text-center">
        <p className="text-gray-400 text-sm uppercase tracking-wide">My Work</p>
        <h2 className="text-white text-5xl font-bold mt-2">Projects<span className="text-[#915EFF]">.</span></h2>
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