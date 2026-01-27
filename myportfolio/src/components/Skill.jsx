import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaPhp,
  FaUserShield,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiMysql,
  SiMongodb,
  SiSpring,
  SiSelenium,
  SiPostman,
  SiJira,
  SiNextdotjs,
  SiFirebase,
  SiApachejmeter,
} from "react-icons/si";

/* 🔹 Skill Data */
const skills = [
  { name: "Selenium", level: 90, icon: <SiSelenium /> },
  { name: "Postman", level: 95, icon: <SiPostman /> },
  { name: "JMeter", level: 75, icon: <SiApachejmeter /> },
  { name: "Jira", level: 85, icon: <SiJira /> },

  { name: "React", level: 90, icon: <FaReact /> },
  { name: "Next.js", level: 75, icon: <SiNextdotjs /> },
  { name: "JavaScript", level: 95, icon: <FaJsSquare /> },
  { name: "TypeScript", level: 70, icon: <SiTypescript /> },
  { name: "Tailwind CSS", level: 85, icon: <SiTailwindcss /> },

  { name: "Node.js", level: 80, icon: <FaNodeJs /> },
  { name: "Spring Boot", level: 90, icon: <SiSpring /> },
  { name: "PHP", level: 95, icon: <FaPhp /> },
  { name: "Clerk Auth", level: 70, icon: <FaUserShield /> },

  { name: "MySQL", level: 95, icon: <SiMysql /> },
  { name: "MongoDB", level: 85, icon: <SiMongodb /> },
  { name: "Firebase", level: 80, icon: <SiFirebase /> },
];

/* 🔹 Circular Progress Component */
const CircularSkill = ({ skill, index }) => {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (skill.level / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-green-400 transition"
    >
      <div className="relative w-28 h-28">
        <svg className="w-full h-full -rotate-90">
          <circle
            cx="56"
            cy="56"
            r={radius}
            stroke="#374151"
            strokeWidth="8"
            fill="transparent"
          />
          <motion.circle
            cx="56"
            cy="56"
            r={radius}
            stroke="#4ade80"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            strokeLinecap="round"
          />
        </svg>

        {/* Center Icon */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl text-green-400">{skill.icon}</span>
          <span className="text-xs text-gray-300 mt-1">{skill.level}%</span>
        </div>
      </div>

      <p className="text-sm font-semibold text-gray-200">{skill.name}</p>
    </motion.div>
  );
};

const Skill = () => {
  return (
    <section id="skills" className="py-24 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-green-400 mb-16"
        >
          Skills & Expertise
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <CircularSkill key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
