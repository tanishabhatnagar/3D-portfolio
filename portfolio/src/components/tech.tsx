"use client";

import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import Navbar from "@/components/navbar";
import MagicalCursor from "@/components/magicalCursor";
import { BackgroundGradient } from "@/components/ui/background-gradient";

const techs = [
  {
    name: "React",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    description: "A powerful UI library for building web apps.",
    color: "#61dafb",
  },
  {
    name: "Next.js",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original-wordmark.svg",
    description: "The React framework for production.",
    color: "#00f0ff",
  },
  {
    name: "TypeScript",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    description: "Typed superset of JavaScript for safer code.",
    color: "#3178c6",
  },
  {
    name: "Three.js",
    logo: "https://raw.githubusercontent.com/mrdoob/three.js/dev/docs/media/logo.png",
    description: "3D library for WebGL applications.",
    color: "#ff00ff",
  },
  {
    name: "Tailwind CSS",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg",
    description: "Utility-first CSS framework for rapid styling.",
    color: "#38bdf8",
  },
  {
    name: "Node.js",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    description: "JavaScript runtime for backend development.",
    color: "#8cc84b",
  },
  {
    name: "Sanity.io",
    logo: "https://cdn.sanity.io/images/0vv8moc6/dev/5c20d2c09dc556ebc1752d569a0f60c4943dba02-200x200.png",
    description: "Headless CMS for structured content.",
    color: "#ff1a1a",
  },
  {
    name: "Framer Motion",
    logo: "https://seeklogo.com/images/F/framer-motion-logo-9170A26F45-seeklogo.com.png",
    description: "Animation library for React.",
    color: "#05f2ff",
  },
];

function MovingStars() {
  return (
    <Stars
      radius={100}
      depth={200}
      count={6000}
      factor={4}
      saturation={0.5}
      fade
    />
  );
}

export default function TechPage() {
  return (
    <>
      <Navbar />
      <MagicalCursor />

      {/* Starry background */}
      <div className="fixed inset-0 -z-50">
        <Canvas camera={{ position: [0, 0, 100], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <MovingStars />
        </Canvas>
      </div>

      <main className="relative z-10 min-h-screen flex flex-col items-center justify-start px-6 py-20 text-white">
        <h1 className="text-5xl font-extrabold mb-16 text-cyan-400">
          Technologies & Tools
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 w-full max-w-6xl">
          {techs.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
             <BackgroundGradient className="rounded-[22px] p-6 sm:p-10 bg-black hover:scale-105 hover:shadow-cyan-400/50 transition-transform duration-300">
  {/* Tech Logo */}
  <div className="w-20 h-20 mx-auto mb-4">
    <img
      src={tech.logo}
      alt={tech.name}
      className="w-full h-full object-contain"
    />
  </div>

  {/* Tech Name */}
  <p className="text-xl font-bold text-cyan-300 text-center mb-2">
    {tech.name}
  </p>

  {/* Tech Description */}
  <p className="text-sm text-cyan-100 text-center">
    {tech.description}
  </p>
</BackgroundGradient>

            </motion.div>
          ))}
        </div>
      </main>
    </>
  );
}
