"use client";

import { motion } from "framer-motion";
import { styles } from "./styles";

const services = [
  {
    title: "Web Developer",
    icon: "/assets/web.svg",
  },
  {
    title: "Data Science",
    icon: "/assets/ai.svg",
  },
  {
    title: "Data Analytics",
    icon: "/assets/report.svg",
  },
  {
    title: "Business Intelligence",
    icon: "/assets/business.svg",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center py-24 px-6 sm:px-12 md:px-20 lg:px-32 bg-gradient-to-b from-[#0f0f1a] to-[#1a1a3f] overflow-hidden"
    >
      {/* Glowing Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-[#915EFF]/30 to-[#BD7AFF]/20 blur-3xl"
            initial={{
              width: `${Math.random() * 30 + 10}rem`,
              height: `${Math.random() * 30 + 10}rem`,
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              opacity: 0.1,
            }}
            animate={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white/70 uppercase tracking-wide text-sm font-medium"
        >
          Introduction
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-white text-5xl sm:text-6xl font-bold mt-4"
        >
          Overview<span className="text-[#915EFF]">.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className={`${styles.sectionSubText} mt-6 text-white/70 text-lg sm:text-xl font-light max-w-3xl mx-auto leading-relaxed`}
        >
          I am a software developer skilled in{" "}
          <span className="text-[#BD7AFF] font-semibold">TypeScript</span>,{" "}
          <span className="text-[#BD7AFF] font-semibold">JavaScript</span>, and{" "}
          <span className="text-[#BD7AFF] font-semibold">Data Engineering</span>,  
          with expertise in{" "}
          <span className="text-[#BD7AFF] font-semibold">React</span>,{" "}
          <span className="text-[#BD7AFF] font-semibold">Node.js</span>, and{" "}
          <span className="text-[#BD7AFF] font-semibold">Machine Learning</span>. 
          I build <span className="text-[#BD7AFF] font-semibold">scalable</span>,  
          <span className="text-[#BD7AFF] font-semibold"> user-centric</span> solutions  
          that solve real-world problems.
        </motion.p>
      </div>

      {/* Services Section */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto relative z-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 * index }}
            className="relative bg-[#15152a] border border-white/10 rounded-xl p-8 text-center shadow-lg hover:scale-105 transition-transform"
          >
            <div className="flex justify-center">
              <motion.img
                src={service.icon}
                alt={service.title}
                className="w-20 h-20 object-contain"
                whileHover={{ scale: 1.1 }}
              />
            </div>
            <h3 className="text-white font-semibold text-lg mt-6">{service.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;