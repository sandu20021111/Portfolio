import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJsSquare } from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiMysql,
  SiMongodb,
  SiSpring,
} from "react-icons/si";

const skills = [
  {
    id: 1,
    name: "React",
    level: 90,
    icon: <FaReact className="text-blue-400" />,
  },
  {
    id: 2,
    name: "Node.js",
    level: 80,
    icon: <FaNodeJs className="text-green-600" />,
  },
  {
    id: 3,
    name: "Tailwind CSS",
    level: 85,
    icon: <SiTailwindcss className="text-teal-400" />,
  },
  {
    id: 4,
    name: "JavaScript",
    level: 95,
    icon: <FaJsSquare className="text-yellow-400" />,
  },
  {
    id: 5,
    name: "TypeScript",
    level: 70,
    icon: <SiTypescript className="text-blue-600" />,
  },
  {
    id: 6,
    name: "MySQL",
    level: 75,
    icon: <SiMysql className="text-blue-700" />,
  },
  {
    id: 7,
    name: "MongoDB",
    level: 65,
    icon: <SiMongodb className="text-green-700" />,
  },
  {
    id: 8,
    name: "Spring Boot",
    level: 60,
    icon: <SiSpring className="text-green-500" />,
  },
];

const barVariants = {
  hidden: { width: 0 },
  visible: (level) => ({
    width: `${level}%`,
    transition: { duration: 1.5, ease: "easeOut" },
  }),
};

const Skill = () => {
  return (
    <section className=" text-white py-16 px-4" id="skills">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-green-400 text-center">
          My Skills
        </h2>
        <div className="space-y-6">
          {skills.map(({ id, name, level, icon }) => (
            <div key={id}>
              <div className="flex justify-between items-center mb-1">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{icon}</span>
                  <span className="font-semibold">{name}</span>
                </div>
                <span>{level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <motion.div
                  className="h-3 bg-green-400 rounded-full"
                  custom={level}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.8 }}
                  variants={barVariants}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
