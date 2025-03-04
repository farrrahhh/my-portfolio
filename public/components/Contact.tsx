"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import Image from "next/image";

// Animation Variants
const fadeIn = (direction = "up", delay = 0) => ({
  initial: { opacity: 0, y: direction === "up" ? 30 : -30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_9eozp9i", 
        "template_0am7a4p", 
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "8W-S8C7h6-LIbzWOz"
      )
      .then(() => {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => setSuccess(false))
      .finally(() => setLoading(false));
  };

  return (
    <section className="py-24 px-6 sm:px-12 md:px-20 lg:px-32 bg-[#0f0f1a]">
      <motion.div variants={fadeIn()} className="text-center">
        <p className="text-gray-400 text-sm uppercase tracking-wide">Get in Touch</p>
        <h2 className="text-white text-5xl font-bold mt-2">
          Contact Me<span className="text-[#915EFF]">.</span>
        </h2>
      </motion.div>

      {/* Two-Column Layout */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        {/* Left: Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          variants={fadeIn("up", 0.2)}
          className="bg-[#15152a] p-8 rounded-xl shadow-lg w-full"
        >
          <div className="flex flex-col gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-4 bg-[#1d1d2c] text-white rounded-lg focus:ring-2 focus:ring-[#915EFF] outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-4 bg-[#1d1d2c] text-white rounded-lg focus:ring-2 focus:ring-[#915EFF] outline-none"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="p-4 bg-[#1d1d2c] text-white rounded-lg focus:ring-2 focus:ring-[#915EFF] outline-none"
            />
            <button
              type="submit"
              className="w-full bg-[#915EFF] hover:bg-[#7d4dfb] transition-all text-white font-medium py-3 rounded-lg flex justify-center"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
          {success !== null && (
            <p className={`text-center mt-4 ${success ? "text-green-400" : "text-red-400"}`}>
              {success ? "Message sent successfully!" : "Failed to send message. Try again."}
            </p>
          )}
        </motion.form>

        {/* Right: Contact Image */}
        <motion.div variants={fadeIn("up", 0.4)} className="hidden md:block">
          <Image
            src="/assets/contact.svg" 
            alt="Contact"
            width={400}
            height={400}
            className="mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;