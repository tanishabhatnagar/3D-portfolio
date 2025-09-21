"use client";

import HeroText from "./typewriter";



export default function AboutPage() {
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center px-8 lg:px-20 text-white">
      <h2 className="text-4xl font-extrabold drop-shadow-lg bg-clip-text text-white">
        Hey, my name is
      </h2>
      <HeroText />
      <p className="mt-4">
        Innovative Full Stack Developer passionate about creating seamless
        and impactful web solutions...
      </p>
      <div className="mt-10 flex space-x-3">
        <button className="w-fit px-8 py-3 rounded-2xl bg-cyan-600 text-white font-semibold shadow-lg hover:scale-110 hover:shadow-blue-500/40 transition-transform duration-300">
          View my work
        </button>
        <button className="w-fit px-8 py-3 rounded-2xl bg-gradient-to-r border-cyan-500 border-2 text-cyan-500 font-semibold shadow-lg hover:scale-110 hover:shadow-blue-500/40 transition-transform duration-300">
          Download CV
        </button>
      </div>
    </div>
  );
}
