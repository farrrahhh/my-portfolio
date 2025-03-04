"use client";

import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Image from "next/image";

// Motion Animation Variants
const fadeIn = (direction = "up", delay = 0) => ({
  initial: { opacity: 0, y: direction === "up" ? 30 : -30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

// Optimized Tech Stack (Only the most important tools)
const techStack = [
  { name: "Python", icon: "/assets/python.webp" },
  { name: "JavaScript", icon: "/assets/javascript.png" },
  { name: "TypeScript", icon: "/assets/typescript.webp" },
  { name: "MySQL", icon: "/assets/mysql.webp" },
  { name: "PostgreSQL", icon: "/assets/postgresql.png" },
  { name: "MongoDB", icon: "/assets/mongodb.png" },
  { name: "React.js", icon: "/assets/react.png" },
  { name: "Next.js", icon: "/assets/nextjs.png" },
  { name: "Node.js", icon: "/assets/nodejs.png" },
  { name: "Tailwind", icon: "/assets/tailwind.png" },
  { name: "ScikitLearn", icon: "/assets/scikitlearn.png" },
  { name: "Tableau", icon: "/assets/tableau.png" },
  { name: "Git", icon: "/assets/git.png" },
  { name: "Postman", icon: "/assets/postman.png" },
  { name: "Trello", icon: "/assets/trello.webp" },
];

const TechSection = () => {
  return (
    <section className="py-24 px-6 sm:px-12 md:px-20 lg:px-32 bg-[#0f0f1a]">
      <motion.div variants={fadeIn()} className="text-center">
        <p className="text-gray-400 text-sm uppercase tracking-wide">Tech Stack</p>
        <h2 className="text-white text-5xl font-bold mt-2">
          Tools I Use<span className="text-[#915EFF]">.</span>
        </h2>
      </motion.div>

      <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            variants={fadeIn("up", index * 0.1)}
            className="flex flex-col items-center"
          >
            <Tilt
              tiltMaxAngleX={25}
              tiltMaxAngleY={25}
              scale={1.05}
              transitionSpeed={400}
              className="bg-[#15152a] border border-white/10 rounded-xl p-5 shadow-lg hover:scale-105 transition-transform w-24 h-24 flex justify-center items-center"
            >
              <Image
                src={tech.icon}
                alt={tech.name}
                width={64}
                height={64}
                className="object-contain"
                priority={index < 5} // Load first 5 images faster
              />
            </Tilt>
            <p className="text-white text-sm mt-3 font-medium">{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechSection;