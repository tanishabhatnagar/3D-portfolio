"use client";

import React from "react";

interface Project {
  title: string;
  description: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: "Galactic Explorer",
    description: "A 3D globe with interactive data overlays. Travel the universe from your browser.",
    link: "#",
  },
  {
    title: "Aurora Notes",
    description: "A magical note-taking app with glowing highlights and dreamy animations.",
    link: "#",
  },
  {
    title: "Mystic Portfolio",
    description: "Portfolio showcasing projects with animated, celestial backgrounds.",
    link: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section className="relative w-full min-h-screen   text-cyan-400 py-20 px-5">
     

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-cyan-300 drop-shadow-lg">
          ✨ My Magical Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-opacity-50 backdrop-blur-md rounded-2xl p-6 flex flex-col justify-between transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-cyan-500/50 border border-cyan-500/20"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-cyan-200 drop-shadow-md">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <span className="self-end text-cyan-400 hover:text-cyan-200 transition-colors">
                Explore →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
