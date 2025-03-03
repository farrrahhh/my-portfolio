"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { clientX, clientY } = e
      const { width, height, left, top } = containerRef.current.getBoundingClientRect()

      const x = (clientX - left) / width
      const y = (clientY - top) / height

      containerRef.current.style.setProperty("--mouse-x", `${x}`)
      containerRef.current.style.setProperty("--mouse-y", `${y}`)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen flex flex-col justify-center items-center text-center overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%), rgba(145, 94, 255, 0.15), transparent 40%), linear-gradient(to bottom right, #0f0f1a, #1a1a2e, #16213e)",
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-purple-500/10 to-indigo-500/10 blur-3xl"
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
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIj48cGF0aCBkPSJNMCAwaDYwdjYwSDB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />

      <div className="relative z-10 px-6 max-w-5xl mx-auto">
        {/* Animated Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-block"
        >
          <span className="px-4 py-1.5 text-sm font-medium bg-white/10 text-white/80 rounded-full backdrop-blur-sm border border-white/10">
            Software Engineer
          </span>
        </motion.div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-white text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight"
          >
            Hi, I am{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#915EFF] to-[#BD7AFF]">Farah</span>
          </motion.h1>
        </div>

        <div className="overflow-hidden mt-2">
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-white/70 mt-4 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto font-light"
          >
            I specialize in <span className="text-[#915EFF] font-medium">software engineering</span> and <span className="text-[#915EFF] font-medium">data optimization</span> 
            ,building scalable systems and turning complex data into insights. 
          </motion.p>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-[#915EFF] to-[#BD7AFF] rounded-full shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all duration-300"
          >
            Explore My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 text-base font-medium text-white bg-white/10 backdrop-blur-sm border border-white/10 rounded-full hover:bg-white/15 transition-all duration-300"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-white/50 text-sm mb-2">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10"
        >
          <ArrowDown className="w-4 h-4 text-white/70" />
        </motion.div>
      </motion.div>

      {/* Tech stack floating badges */}
      <div className="absolute bottom-40 left-10 hidden lg:block">
        {["React", "Three.js", "TypeScript"].map((tech, i) => (
          <motion.div
            key={tech}
            className="px-3 py-1.5 text-xs font-medium bg-white/10 text-white/80 rounded-full backdrop-blur-sm border border-white/10 mb-2"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2 + i * 0.1, duration: 0.5 }}
          >
            {tech}
          </motion.div>
        ))}
      </div>

      <div className="absolute bottom-40 right-10 hidden lg:block">
        {["Node.js", "Tailwind", "WebGL"].map((tech, i) => (
          <motion.div
            key={tech}
            className="px-3 py-1.5 text-xs font-medium bg-white/10 text-white/80 rounded-full backdrop-blur-sm border border-white/10 mb-2"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2 + i * 0.1, duration: 0.5 }}
          >
            {tech}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Hero

