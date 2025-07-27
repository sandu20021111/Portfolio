import React from "react";
import { motion } from "framer-motion";
import portfolioImg from "../assets/portfolio.png";
import bubbleteaImg from "../assets/bubbletea.png";
import chatbotImg from "../assets/chatbot.png";
import petImg from "../assets/pet.png";
import seleniumImg from "../assets/selenium.png";
import supervisedImg from "../assets/supervised.png";
import flowerImg from "../assets/flower.png";
import showcaseImg from "../assets/studentshowcase.png";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase my skills and projects.",
    image: portfolioImg,
    link: "https://github.com/sandu20021111/portfolio",
  },
  {
    id: 2,
    title: "Bubble Tea Shop Website",
    description:
      "Online store built with HTML, CSS and JS with cart and payments.",
    image: bubbleteaImg,
    link: "https://github.com/sandu20021111/Bubble-Tea-Shop-Website",
  },
  {
    id: 3,
    title: "AI Chatbot",
    description:
      "A conversational AI chatbot built with Python and TensorFlow.",
    image: chatbotImg,
    link: "https://github.com/sandu20021111/AI-Chatbot",
  },
  {
    id: 4,
    title: "Pet Therapy Website",
    description:
      "React + Spring Boot website with MongoDB for pet therapy booking.",
    image: petImg,
    link: "https://github.com/sandu20021111/pet-therapy",
  },
  {
    id: 5,
    title: "Selenium Automation for Instagram",
    description: "Automation script using Selenium for Instagram post upload.",
    image: seleniumImg,
    link: "https://github.com/sandu20021111/Automotive-Testing-Instagram-",
  },
  {
    id: 6,
    title: "Supervised Learning Tool Chatbot",
    description: "A Python-based chatbot using supervised learning.",
    image: supervisedImg,
    link: "https://github.com/sandu20021111/SmartLearningTool",
  },
  {
    id: 7,
    title: "Flower Shop Website",
    description:
      "HTML, CSS, JS, and PHP-based flower shop with delivery features.",
    image: flowerImg,
    link: "https://github.com/sandu20021111/flower_shop",
  },

  {
    id: 8,
    title: "Student Showcase Website",
    description:
      "A platform for students to showcase their projects and skills.",
    image: showcaseImg,
    link: "https://github.com/sandu20021111/skillhub",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, type: "spring" },
  }),
};

const Project = () => {
  return (
    <section className=" text-white py-16 px-4" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-green-400 text-center">
          My works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(({ id, title, description, image, link }, i) => (
            <motion.div
              key={id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={cardVariants}
            >
              {image && (
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover cursor-pointer"
                  />
                </a>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-300">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
