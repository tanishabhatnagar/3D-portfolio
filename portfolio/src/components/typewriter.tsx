"use client";

import { Typewriter } from "react-simple-typewriter";

export default function HeroText() {
  return (
    <h1 className="text-8xl  font-bold text-blue-100 ">
        <p>
      {"Tanisha Bhatnagar"}
      </p>
      <span className="text-blue-300 text-7xl  whitespace-nowrap">
        <Typewriter
          words={[
            "I am Full Stack Developer",
            "I build things for the web",
            "I solve problems",
          ]}
          loop={0} // 0 = infinite
          cursor
          cursorStyle="|"
          typeSpeed={60}
          deleteSpeed={40}
          delaySpeed={1500}
        />
      </span>
    </h1>
  );
}
