import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPhp,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiSpring,
  SiTypescript,
  SiSelenium,
  SiPostman,
  SiJira,
  SiNextdotjs,
  SiFirebase,
  SiApachejmeter,
  SiClerk,
} from "react-icons/si";

/* 🔹 Technology Groups */
const techGroups = [
  {
    title: "QA & Testing",
    items: [
      { name: "Selenium", icon: <SiSelenium /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "JMeter", icon: <SiApachejmeter /> },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "JavaScript", icon: <FaJsSquare /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    title: "Backend & Services",
    items: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Spring Boot", icon: <SiSpring /> },
      { name: "PHP", icon: <FaPhp /> },
      { name: "Clerk Auth", icon: <SiClerk /> },
      { name: "Python", icon: <FaPython /> },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "Jira", icon: <SiJira /> },
    ],
  },
];

/* 🔹 Animations */
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Technologies = () => {
  return (
    <section id="technologies" className="py-24 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-green-400 mb-16"
        >
          Technologies & Tools
        </motion.h2>

        {/* Groups */}
        <div className="grid gap-16">
          {techGroups.map((group, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-gray-200 mb-6">
                {group.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {group.items.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex flex-col items-center justify-center gap-3 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-green-400 hover:bg-white/10 transition"
                  >
                    <div className="text-4xl text-green-400">{item.icon}</div>
                    <p className="text-sm text-gray-300 font-medium">
                      {item.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
