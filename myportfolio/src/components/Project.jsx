import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaProjectDiagram, FaCertificate, FaFileAlt } from "react-icons/fa";

// Images
import portfolioImg from "../assets/portfolio.png";
import chatbotImg from "../assets/chatbot.png";
import petImg from "../assets/pet.png";
import seleniumImg from "../assets/selenium.png";
import supervisedImg from "../assets/supervised.png";
import flowerImg from "../assets/flower.png";
import showcaseImg from "../assets/studentshowcase.png";
import seleniumImg2 from "../assets/selenium2.jpg";
import wallet from "../assets/wallet.png";
import game from "../assets/game.png";
import certificateImg from "../assets/C1.jpg";
import certificateImg2 from "../assets/C2.png";
import researchImg from "../assets/R1.png";
import researchImg2 from "../assets/R2.png";
import researchImg3 from "../assets/R3.png";
import researchImg4 from "../assets/R4.png";
import quizImg from "../assets/quiz.png";

// Data
const allItems = [
  {
    id: 1,
    type: "Project",
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase my skills and projects.",
    image: portfolioImg,
    link: "https://github.com/sandu20021111/portfolio",
  },
  {
    id: 2,
    type: "Project",
    title: "Selenium Automation for Instagram",
    description: "Automation script using Selenium for Instagram post upload.",
    image: seleniumImg,
    link: "https://github.com/sandu20021111/Automotive-Testing-Instagram-",
  },
  {
    id: 3,
    type: "Project",
    title: "Pet Therapy Website",
    description:
      "React + Spring Boot website with MongoDB for pet therapy booking.",
    image: petImg,
    link: "https://github.com/sandu20021111/pet-therapy",
  },
  {
    id: 4,
    type: "Project",
    title: "Selenium Automation for Instagram part II",
    description:
      "Automation script using Selenium for Instagram Profile update, note upload and delete.",
    image: seleniumImg2,
    link: "https://github.com/sandu20021111/Automative-Testing-Instagram-profile-photo-upload-add-note-",
  },
  {
    id: 5,
    type: "Project",
    title: "Supervised Learning Tool Chatbot",
    description: "A Python-based chatbot using supervised learning.",
    image: supervisedImg,
    link: "https://github.com/sandu20021111/SmartLearningTool",
  },
  {
    id: 6,
    type: "Project",
    title: "AI Chatbot",
    description:
      "A conversational AI chatbot built with Python and TensorFlow.",
    image: chatbotImg,
    link: "https://github.com/sandu20021111/AI-Chatbot",
  },
  {
    id: 7,
    type: "Project",
    title: "Flower Shop Website",
    description:
      "HTML, CSS, JS, and PHP-based flower shop with delivery features.",
    image: flowerImg,
    link: "https://github.com/sandu20021111/flower_shop",
  },
  {
    id: 8,
    type: "Project",
    title: "Student Showcase Website",
    description:
      "A platform for students to showcase their projects and skills.",
    image: showcaseImg,
    link: "https://github.com/sandu20021111/skillhub",
  },
  {
    id: 9,
    type: "Project",
    title: "Wallet-Expense Tracking Mobile App",
    description: "A mobile app for tracking expenses and managing budgets.",
    image: wallet,
    link: "https://github.com/sandu20021111/Wallet-Expenses-Tracking-Mobile-App",
  },
  {
    id: 10,
    type: "Certificate",
    title: "Java Programming Certificate",
    description: "Completed Advanced Java Course.",
    image: certificateImg,
    link: "#",
  },
  {
    id: 11,
    type: "Research",
    title: "Travel Planner",
    description: "Published research on Travel Planning Tools.",
    image: researchImg,
    link: "./pdfs/Travel_Planner.pdf",
  },
  {
    id: 12,
    type: "Certificate",
    title: "Web Development Certificate",
    description: "Completed Modern Web Development.",
    image: certificateImg2,
    link: "./pdfs/Web_Dev_Certificate.pdf",
  },
  {
    id: 13,
    type: "Research",
    title: "Machine Learning Paper",
    description: "Published research on supervised learning tools.",
    image: researchImg2,
    link: "https://app.readytensor.ai/publications/ai-chatbot-built-with-flask-and-openrouters-mistral-7b-model-D6EdQW6LCAdQ",
  },
  {
    id: 14,
    type: "Project",
    title: "SmartMind Quiz Website",
    description: "A web-based quiz application built with React.",
    image: quizImg,
    link: "https://github.com/sandu20021111/SmartMind-Quiz-Website",
  },
  {
    id: 15,
    type: "Project",
    title: "Breakout Game",
    description:
      "A classic arcade game where players break bricks with a ball.",
    image: game,
    link: "https://github.com/sandu20021111/Breakout-Game",
  },
  {
    id: 16,
    type: "Research",
    title: "AI based sport identification",
    description:
      "Research on AI techniques for identifying sports skills in rural areas.",
    image: researchImg3,
    link: "./pdfs/AI_in_sports.pdf",
  },
  {
    id: 17,
    type: "Research",
    title: "Sustainable fishing locations finder",
    description: "Research on innovative solutions for sustainable fishing.",
    image: researchImg4,
    link: "./pdfs/Sustainable_Fishing_Solutions.pdf",
  },
];

const filters = ["All", "Project", "Certificate", "Research"];

const iconMap = {
  Project: <FaProjectDiagram className="text-green-400 w-5 h-5" />,
  Certificate: <FaCertificate className="text-yellow-400 w-5 h-5" />,
  Research: <FaFileAlt className="text-blue-400 w-5 h-5" />,
};

const cardVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.5, type: "spring" },
  }),
};

const Project = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems =
    activeFilter === "All"
      ? allItems
      : allItems.filter((item) => item.type === activeFilter);

  return (
    <section
      id="portfolio"
      className="text-white bg-gray-900 py-16 px-6 md:px-12"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center text-green-400 mb-8">
        My Works & Achievements
      </h2>

      {/* Filter Buttons */}
      <div className="flex justify-center mb-8 space-x-4 flex-wrap">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${
              activeFilter === filter
                ? "bg-green-400 text-gray-900"
                : "bg-gray-700 hover:bg-green-500"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Horizontal Scroll Carousel */}
      <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide">
        {filteredItems.map((item, i) => (
          <motion.a
            key={item.id}
            href={item.link}
            {...(item.type === "Certificate" || item.type === "Research"
              ? { download: item.title.replace(/\s+/g, "_") + ".pdf" }
              : { target: "_blank", rel: "noopener noreferrer" })}
            className="min-w-[250px] bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-transform duration-300 flex-shrink-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            variants={cardVariants}
          >
            {item.image && (
              <div className="relative h-36 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-sm p-2 text-center">
                  {item.description}
                </div>
              </div>
            )}

            <div className="p-4 space-y-2">
              <div className="flex items-center space-x-2">
                {iconMap[item.type]}
                <span className="text-sm uppercase text-gray-300 font-semibold">
                  {item.type}
                </span>
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Project;
