import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiSpring,
  SiTypescript,
} from "react-icons/si";

const technologies = [
  { id: 1, name: "React", icon: <FaReact className="text-blue-400" /> },
  { id: 2, name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  {
    id: 3,
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-teal-400" />,
  },
  { id: 4, name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
  { id: 5, name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
  { id: 6, name: "Spring Boot", icon: <SiSpring className="text-green-500" /> },
  {
    id: 7,
    name: "JavaScript",
    icon: <FaJsSquare className="text-yellow-400" />,
  },
  {
    id: 8,
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600" />,
  },
  { id: 9, name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
  { id: 10, name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { id: 11, name: "Git", icon: <FaGitAlt className="text-red-600" /> },
  { id: 12, name: "Docker", icon: <FaDocker className="text-blue-500" /> },
  { id: 13, name: "Python", icon: <FaPython className="text-yellow-400" /> },
];

// Variants for initial scroll animation
const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 120,
    },
  }),
};

const Technologies = () => {
  return (
    <section className=" text-white py-16 px-4" id="technologies">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-green-400">
          Technologies I Use
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-center">
          {technologies.map(({ id, name, icon }, i) => (
            <motion.div
              key={id}
              title={name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              whileHover={{
                scale: 1.2,
                rotate: 5,
                transition: { type: "spring", stiffness: 300 },
              }}
              className="flex flex-col items-center space-y-2 cursor-default"
            >
              <div className="text-6xl">{icon}</div>
              <p className="text-sm font-medium">{name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
