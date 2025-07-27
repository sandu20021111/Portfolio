import React from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { Github, Linkedin, Mail } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const About = () => {
  return (
    <section className="relative text-white py-50 px-10 md:px-0" id="about">
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Text Section */}
        <div className="z-10 flex flex-col items-start space-y-6 md:space-y-8">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-green-400"
            variants={itemVariants}
          >
            About Me
          </motion.h2>

          <motion.p
            className="text-lg text-gray-300 leading-relaxed"
            variants={itemVariants}
          >
            I'm{" "}
            <span className="text-green-400 font-semibold">Sanduni Vihara</span>
            , a Full-Stack Developer specializing in React, Next.js and Tailwind
            CSS. I build fast, responsive interfaces and ensure quality with
            Selenium testing.
          </motion.p>

          <motion.div
            className="text-gray-400 space-y-4"
            variants={itemVariants}
          >
            <div>
              <h3 className="text-gray-200 font-medium mb-2">My Approach:</h3>
              <ul className="space-y-2 pl-5 list-disc">
                <li>Pixel-perfect UIs with clean, maintainable code</li>
                <li>Automated testing to prevent bugs</li>
                <li>Full-stack solutions from design to deployment</li>
                <li>Performance optimization (Lighthouse ≥90)</li>
              </ul>
            </div>

            <p className="text-gray-300">
              When not coding, I contribute to open-source and write about web
              development. Let's build something great!
            </p>
          </motion.div>

          {/* Links with Icons */}
          <motion.div className="flex space-x-4 pt-4" variants={itemVariants}>
            <a
              href="https://github.com/sandu20021111"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/sanduni-vihara-56990528b"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href="mailto:sandunivihara228@gmail.com"
              className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
            >
              <Mail size={20} />
              Email
            </a>
          </motion.div>
        </div>

        {/* 3D Spline Section */}

        <Spline
          className="absolute lg:top-0 top-[55%] bottom-0 lg:right-[-35%] h-full sm:left-[22%]"
          scene="https://prod.spline.design/tB8n3zKVLXONWtzk/scene.splinecode"
        />
      </motion.div>
    </section>
  );
};

export default About;
