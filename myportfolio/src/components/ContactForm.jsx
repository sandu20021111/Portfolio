import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null); // for success/error messages

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_gkcjx6p", // from EmailJS dashboard
        "template_qfwabx3", // from EmailJS dashboard
        formData,
        "6HmsADmz2n7U_Q3Qm" // from EmailJS dashboard (public key)
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="bg-gray-900 p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-green-400">Contact Me</h2>
      <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
        ></textarea>
        <button
          type="submit"
          className="bg-green-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-green-500 transition"
        >
          Send Message
        </button>
      </form>
      {status && (
        <p className="mt-4 text-center text-green-400 font-semibold">
          {status}
        </p>
      )}
    </div>
  );
};

export default ContactForm;
