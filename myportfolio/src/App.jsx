import React, { useState, useEffect } from "react";
import profile from "./assets/profile.jpg";
import { TypeAnimation } from "react-type-animation";
import { Menu, X } from "lucide-react";
import About from "./components/About";
import Project from "./components/Project";
import Technology from "./components/Technology";
import Skill from "./components/Skill";
import ContactForm from "./components/ContactForm";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "technologies", "contact"];
      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section && window.scrollY >= section.offsetTop - 100) {
          setActiveSection(sections[i]);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["home", "about", "projects", "technologies", "contact"];

  return (
    <div className="relative overflow-hidden min-h-screen font-sans scroll-smooth dark">
      {/* Animated Background */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 animate-gradient bg-gradient-to-r from-purple-700 via-indigo-600 to-green-500 opacity-20 blur-2xl" />

      <div className="relative z-10 min-h-screen bg-black/80 text-white">
        {/* Navbar */}
        <nav className="w-full px-6 py-4 flex items-center justify-between sticky top-0 z-50 bg-black border-b border-gray-800">
          <div className="text-2xl font-bold text-green-400">
            SanduniVihara.
          </div>

          <div className="flex items-center gap-6">
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

            {/* Mobile Toggle */}
            <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
              {isOpen ? (
                <X size={28} className="text-green-400" />
              ) : (
                <Menu size={28} className="text-green-400" />
              )}
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden flex flex-col items-center gap-6 py-6 text-lg bg-black border-b border-gray-800">
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

        {/* Hero Section */}
        <section
          id="home"
          className="pt-20 px-4 flex flex-col items-center justify-center"
        >
          <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <div>
              <p className="text-lg text-gray-400 mb-2">Software Developer</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Hello I'm <span className="text-green-400">Sanduni Vihara</span>
              </h1>
              <TypeAnimation
                sequence={[
                  "I create elegant UI/UX experiences.",
                  2000,
                  "I build responsive websites.",
                  2000,
                  "I work with modern JavaScript frameworks.",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="text-xl text-gray-300"
                repeat={Infinity}
              />
              <div className="mt-6 flex gap-4">
                <a href="#contact">
                  <button className="bg-green-400 px-6 py-2 rounded-full font-medium text-black hover:bg-green-500 transition">
                    Contact Me
                  </button>
                </a>
                <a href="/Sanduni_CV.pdf" download>
                  <button className="border border-green-400 px-6 py-2 rounded-full font-medium hover:bg-green-400 hover:text-black transition">
                    Download CV
                  </button>
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div
              className="relative w-72 h-72 mx-auto cursor-pointer"
              onClick={() =>
                window.open("https://github.com/sandu20021111", "_blank")
              }
            >
              <div className="absolute inset-0 rounded-full border-4 border-green-400 animate-pulse shadow-[0_0_25px_#22c55e] z-0" />
              <div className="absolute inset-4 rounded-full border-t-4 border-green-400 animate-spin-slow z-0" />
              <img
                src={profile}
                alt="Profile"
                className="w-full h-full object-cover rounded-full border-4 border-black relative z-10"
              />
            </div>
          </div>
        </section>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl font-bold text-green-400">10+</p>
            <p className="text-gray-300">Projects Completed</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-green-400">10+</p>
            <p className="text-gray-300">Technologies Used</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-green-400">5+</p>
            <p className="text-gray-300">Public Research Papers</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-green-400">3+</p>
            <p className="text-gray-300">Years Experience</p>
          </div>
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

        <section id="contact" className="mt-20 px-4 max-w-3xl mx-auto">
          <ContactForm />
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-gray-400 py-8 mt-20">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-sm">
              © {new Date().getFullYear()} Sanduni Vihara. All rights reserved.
            </p>
            <p className="text-xs mt-2">Built with React and Tailwind CSS.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
