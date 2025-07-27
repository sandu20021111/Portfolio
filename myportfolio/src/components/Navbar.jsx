import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 bg-black shadow z-50 px-6 py-4 flex justify-between items-center border-b border-green-400">
      <h1 className="text-2xl font-bold text-green-400">Sanduni.dev</h1>
      <ul className="flex gap-6 text-white font-medium">
        <li>
          <a href="#App" className="hover:text-green-400 transition-colors">
            Home
          </a>
        </li>
        <li>
          <a href="#About" className="hover:text-green-400 transition-colors">
            About
          </a>
        </li>
        <li>
          <a href="#Project" className="hover:text-green-400 transition-colors">
            Projects
          </a>
        </li>
        <li>
          <a
            href="#Technology"
            className="hover:text-green-400 transition-colors"
          >
            Technologies
          </a>
        </li>
        <li>
          <a
            href="#ContactForm"
            className="hover:text-green-400 transition-colors"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
