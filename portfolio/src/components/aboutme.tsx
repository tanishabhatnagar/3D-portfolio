"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

// 🌌 Stars Background
function Stars() {
  const starRef = useRef<THREE.Points>(null);

  const [starGeo, starMat] = useMemo(() => {
    const starGeo = new THREE.BufferGeometry();
    const starCount = 4000;
    const positions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 500; // spread stars
    }

    starGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const starMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.15,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    return [starGeo, starMat];
  }, []);

  // Slow galaxy drift
  useFrame(() => {
    if (starRef.current) {
      starRef.current.rotation.y += 0.0004;
      starRef.current.rotation.x += 0.00015;
    }
  });

  return <points ref={starRef} geometry={starGeo} material={starMat} />;
}

// 🌟 About Page
export default function AboutPage() {
  return (
    <div className="relative w-full h-screen text-white overflow-hidden flex">
      {/* Right Half - Stars Background */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 100], fov: 75 }}>
          <Stars />
        </Canvas>
      </div>

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />

      {/* Left Half Content */}
      <div className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-20">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6  drop-shadow-lg">
          About Me
        </h2>
        <p className="max-w-xl text-lg md:text-xl text-gray-300 leading-relaxed drop-shadow-md">
          Hi, I’m{" "}
          <span className="font-semibold text-purple-300">Tanisha</span>.  
          I’m a frontend developer passionate about crafting immersive
          experiences with{" "}
          <span className="text-pink-400">React</span>,{" "}
          <span className="text-purple-400">Three.js</span>, and{" "}
          <span className="text-blue-400">WebGL</span>.  
          I love blending design and technology to build interactive
          applications that feel alive 
        </p>

        <button className="mt-10 w-fit px-8 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-110 hover:shadow-pink-500/40 transition-transform duration-300">
          Get in Touch
        </button>
      </div>
    </div>
  );
}
