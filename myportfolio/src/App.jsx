import React, { useState, useEffect } from "react";
import profile from "./assets/profile.jpg";
import { TypeAnimation } from "react-type-animation";
import {
  Menu,
  X,
  ArrowUp,
  Mail,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";

import About from "./components/About";
import Project from "./components/Project";
import Technology from "./components/Technology";
import Skill from "./components/Skill";
import ContactForm from "./components/ContactForm";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [loading, setLoading] = useState(true);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleCv = () => setCvOpen(!cvOpen);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "projects",
        "technologies",
        "skills",
        "contact",
      ];

      sections.forEach((sec) => {
        const el = document.getElementById(sec);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sec);
        }
      });

      setShowScrollTop(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const navItems = [
    "home",
    "about",
    "projects",
    "technologies",
    "skills",
    "contact",
  ];

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="w-12 h-12 border-4 border-green-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen font-sans scroll-smooth dark overflow-hidden">
      {/* Background glow */}
      <div className="fixed inset-0 -z-10 animate-gradient bg-gradient-to-r from-purple-700 via-indigo-600 to-green-500 opacity-20 blur-2xl" />

      <div className="relative z-10 bg-black/90 text-white min-h-screen">
        {/* Navbar */}
        <nav className="sticky top-0 z-50 bg-black border-b border-gray-800 px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-400 tracking-wide">
            Sanduni<span className="text-white">.dev</span>
          </h1>

          <ul className="hidden md:flex gap-8 text-lg">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className={`capitalize transition ${
                    activeSection === item
                      ? "text-green-400 font-semibold"
                      : "hover:text-green-400"
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
            {isOpen ? (
              <X size={28} className="text-green-400" />
            ) : (
              <Menu size={28} className="text-green-400" />
            )}
          </div>
        </nav>

        {/* Mobile menu */}
        {isOpen && (
          <ul className="md:hidden bg-black border-b border-gray-800 py-6 flex flex-col items-center gap-6">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="capitalize hover:text-green-400"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        )}

        {/* Scroll to top */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 bg-green-400 text-black p-3 rounded-full shadow-lg hover:bg-green-500 transition"
          >
            <ArrowUp size={18} />
          </button>
        )}

        {/* Hero */}
        <section
          id="home"
          className="pt-24 px-4 flex items-center justify-center"
        >
          <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-400 mb-2">
                QA Engineer | UI/UX Focused | Full-Stack Background
              </p>

              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Hello, I’m{" "}
                <span className="text-green-400">Sanduni Vihara</span>
              </h1>

              <TypeAnimation
                sequence={[
                  "I ensure software quality through manual & automation testing.",
                  2000,
                  "I automate test cases using Selenium & TestNG.",
                  2000,
                  "I focus on UI/UX usability and visual consistency.",
                  2000,
                  "I understand full-stack workflows to catch bugs early.",
                  2000,
                ]}
                speed={70}
                repeat={Infinity}
                className="text-xl text-gray-300"
              />

              <div className="mt-6 flex flex-col sm:flex-row gap-4 relative">
                <a href="#contact">
                  <button className="bg-green-400 px-6 py-2 rounded-full font-medium text-black hover:bg-green-500 transition w-full sm:w-auto">
                    Contact Me
                  </button>
                </a>

                {/* CV Dropdown */}
                <div className="relative w-full sm:w-auto">
                  <button
                    onClick={toggleCv}
                    className="w-full sm:w-auto bg-black border border-green-400 px-6 py-2 rounded-full font-medium hover:bg-green-400 hover:text-black transition flex justify-between items-center"
                  >
                    Download CV
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {cvOpen && (
                    <ul className="absolute bg-black border border-green-400 mt-1 rounded-lg w-full text-left z-50">
                      <li>
                        <a
                          href="./Sanduni_CV_QA.pdf"
                          download
                          className="block px-4 py-2 hover:bg-green-400 hover:text-black transition"
                        >
                          QA CV
                        </a>
                      </li>
                      <li>
                        <a
                          href="./Sanduni_CV_FullStack.pdf"
                          download
                          className="block px-4 py-2 hover:bg-green-400 hover:text-black transition"
                        >
                          Full-Stack CV
                        </a>
                      </li>
                      <li>
                        <a
                          href="./Sanduni_CV_UIUX.pdf"
                          download
                          className="block px-4 py-2 hover:bg-green-400 hover:text-black transition"
                        >
                          UI/UX CV
                        </a>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div
              className="relative w-72 h-72 mx-auto cursor-pointer"
              onClick={() =>
                window.open("https://github.com/sandu20021111", "_blank")
              }
            >
              <div className="absolute inset-0 rounded-full border-4 border-green-400 animate-pulse shadow-[0_0_25px_#22c55e]" />
              <div className="absolute inset-4 rounded-full border-t-4 border-green-400 animate-spin-slow" />
              <img
                src={profile}
                alt="Sanduni Vihara"
                className="w-full h-full object-cover rounded-full border-4 border-black relative z-10"
              />
            </div>
          </div>
        </section>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <Stat value="10+" label="Projects Tested & Built" />
          <Stat value="10+" label="Tools & Technologies" />
          <Stat value="3+" label="Research Works" />
          <Stat value="3+" label="Certificates Earned" />
        </div>

        {/* Sections */}
        <section id="about">
          <About />
        </section>
        <section id="projects" className="mt-20 px-4 max-w-6xl mx-auto">
          <Project />
        </section>
        <section id="technologies" className="mt-20 px-4 max-w-6xl mx-auto">
          <Technology />
        </section>
        <section id="skills" className="mt-20 px-4 max-w-6xl mx-auto">
          <Skill />
        </section>
        <section id="contact">
          <ContactForm />
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-800 mt-20 py-10 text-center">
          <h3 className="text-2xl font-bold text-green-400 mb-2">
            Sanduni Vihara
          </h3>

          <div className="flex justify-center gap-6 mb-4">
            <a href="mailto:sandunivihara228@gmail.com">
              <Mail />
            </a>
            <a href="https://github.com/sandu20021111" target="_blank">
              <Github />
            </a>
            <a href="#" target="_blank">
              <Linkedin />
            </a>
            <a href="https://instagram.com/sandu.vihara2002" target="_blank">
              <Instagram />
            </a>
          </div>

          <p className="text-xs text-gray-600">
            Built with React & Tailwind CSS
          </p>
        </footer>
      </div>
    </div>
  );
};

const Stat = ({ value, label }) => (
  <div>
    <p className="text-3xl font-bold text-green-400">{value}</p>
    <p className="text-gray-300">{label}</p>
  </div>
);

export default App;
