"use client";

import React from "react";
import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// Motion Variants
// const fadeIn = (direction = "up", type = "spring", delay = 0, duration = 0.75) => ({
//   initial: { opacity: 0, y: direction === "up" ? 50 : -50 },
//   animate: { opacity: 1, y: 0, transition: { type, delay, duration } },
// });

const textVariant = () => ({
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
});

// Experience Data (Previously Imported)
const experiences = [
  {
    title: "Data Engineer",
    company_name: "Tracer Study ITB",
    icon: "../assets/tracer.png",
    iconBg: "#383E56",
    date: "September 2024 - Present",
    points: [
        "Migrated database from MySQL to PostgreSQL for better scalability",
        "Normalized JSON data into 43 tables for structured optimization",
        "Cleaned & categorized 60K+ rows using K-Means clustering & standardization",
        "Optimized 30+ databases, ensuring high availability & performance",
        "Developed SQL views to streamline data access across departments",
    ],
  },
  {
    title: "Data Analyst",
    company_name: "Tracer Study ITB",
    icon: "../assets/tracer.png",
    iconBg: "#E6DEDD",
    date: "August 2024 - November 2024",
    points: [
        "Created interactive Tableau & Excel visualizations for 1K+ data points.",
        "Analyzed data for key insights in the ITB Tracer Study book.",
    ],
  },
  {
    title: "Project Manager",
    company_name: "Inkubator IT HMIF ITB",
    icon: "../assets/iit-operasional.png",
    iconBg: "#383E56",
    date: "November 2023 - Present",
    points: [
        "Led & managed 4 projects worth IDR 70M+, handling analysis, budgeting, and execution"
    ],
  },
  {
    title: "Computational Thinking Practicum Assistant ",
    company_name: "Comlabs-USDI ITB	",
    icon: "../assets/comlabs.png",
    iconBg: "#E6DEDD",
    date: "October 2024 - December 2024",
    points: [
        "Supervised & mentored 50+ students in Python practical sessions."
    ],
  },
];

// Experience Card Component
interface Experience {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain" />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-gray-400 text-[16px] font-semibold m-0">{experience.company_name}</p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`} className="text-gray-300 text-[14px] pl-1 tracking-wide">
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

// Main Experience Component
const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 sm:px-12 md:px-20 lg:px-32 bg-[#0f0f1a]">
      <motion.div variants={textVariant()} className="text-center">
        <p className="text-gray-400 text-sm uppercase tracking-wide">What I Have Done So Far</p>
        <h2 className="text-white text-5xl font-bold mt-2">Work Experience<span className="text-[#915EFF]">.</span></h2>
      </motion.div>

      <div className="mt-16 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;