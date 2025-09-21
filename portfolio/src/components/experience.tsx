"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { motion } from "framer-motion";
import { useRef } from "react";
import * as THREE from "three";

const experiences = [
  {
    company: "Flam",
    position: "Frontend Developer Intern",
    timeline: "August - Present",
  },
  {
    company: "Pluralsight",
    position: "Software Engineer Intern",
    timeline: "Jan 2025 - July 2025",
  },
  {
    company: "Pgagi Consultancy",
    position: "Full Stack Developer",
    timeline: "Feb 2024 - May 2024",
  },
];

// 🌌 Moving Stars (Galaxy-like)


export default function ExperienceSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-start px-6 lg:px-20 py-20">
      {/* Stars Background */}
     

      {/* Text Content */}
      <div className="max-w-xl z-10 text-left">
        {/* Section Title */}
        <h2 className="text-5xl md:text-6xl font-bold text-blue-100 mb-16">
          My Experiences
        </h2>

        {/* Experiences List */}
        <div className="space-y-12 w-full">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 shadow-lg hover:shadow-blue-500/30 leading-8 transition whitespace-nowrap"
            >
              <h3 className="text-2xl font-semibold text-blue-300">{exp.company}</h3>
              <p className="text-5xl text-blue-100">{exp.position}</p>
              <span className="text-sm text-blue-200">{exp.timeline}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
