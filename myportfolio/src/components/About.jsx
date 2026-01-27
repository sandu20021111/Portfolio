import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import aboutImg from "../assets/about.png";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const About = () => {
  return (
    <section className="relative text-white py-24 px-6 md:px-0" id="about">
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
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
            I’m{" "}
            <span className="text-green-400 font-semibold">Sanduni Vihara</span>
            , a <strong>QA Engineer</strong> with a strong background in{" "}
            <strong>UI/UX and full-stack development</strong>. I focus on
            delivering reliable, user-friendly applications by combining manual
            testing, automation, and usability-focused design thinking.
          </motion.p>

          <motion.div
            className="text-gray-400 space-y-4"
            variants={itemVariants}
          >
            <div>
              <h3 className="text-gray-200 font-medium mb-2">
                What I Focus On:
              </h3>
              <ul className="space-y-2 pl-5 list-disc">
                <li>Manual & automated testing (Selenium, TestNG)</li>
                <li>Finding UI/UX issues that impact real users</li>
                <li>Writing clear test cases & test scenarios</li>
                <li>Ensuring performance, stability & usability</li>
              </ul>
            </div>

            <p className="text-gray-300">
              With hands-on development experience, I understand how
              applications are built — which helps me identify bugs earlier and
              communicate effectively with developers.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex flex-wrap gap-4 pt-4"
            variants={itemVariants}
          >
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

        {/* Image Section */}
        <motion.div className="flex justify-center" variants={itemVariants}>
          <img
            src={aboutImg}
            alt="About Sanduni Vihara"
            className="w-[320px] md:w-[420px] rounded-xl shadow-lg object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
