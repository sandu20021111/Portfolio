import React, { useState } from "react";
import emailjs from "emailjs-com";
import { MapPin, Mail, Phone, Github, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_gkcjx6p",
        "template_qfwabx3",
        formData,
        "6HmsADmz2n7U_Q3Qm"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="text-white py-20 px-4 ">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <motion.div
          className="bg-gray-900 p-8 rounded-2xl shadow-xl"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-green-400">Contact Me</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <motion.input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              variants={fadeIn}
              custom={0.1}
            />
            <motion.input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              variants={fadeIn}
              custom={0.2}
            />
            <motion.textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              variants={fadeIn}
              custom={0.3}
            />
            <motion.button
              type="submit"
              className="bg-green-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-green-500 transition shadow-lg"
              variants={fadeIn}
              custom={0.4}
            >
              Send Message
            </motion.button>
          </form>
          {status && (
            <p className="mt-4 text-center text-green-400 font-semibold">
              {status}
            </p>
          )}
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="bg-gray-750 p-8 rounded-2xl shadow-xl space-y-8"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}
        >
          <h3 className="text-2xl font-semibold text-green-400">
            Get in Touch
          </h3>
          <p className="text-gray-300 leading-relaxed">
            I'd love to hear from you! Whether it’s a project idea, job
            opportunity, or just a hello — drop a message!
          </p>
          <div className="text-gray-100 space-y-3">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-green-400" />
              <span>sandunivihara228@example.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-green-400" />
              <span>+94 77 479 0107</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-green-400" />
              <span>Colombo, Sri Lanka</span>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-green-400 mb-3 text-center">
              Follow Me
            </h4>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/sandu20021111"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/sanduni-vihara-56990528b"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com/sandu_vihara2002"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
