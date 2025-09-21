"use client";

import AboutPage from "@/components/aboutme";
import Navbar from "@/components/navbar";
import MagicalCursor from "@/components/magicalCursor";
import ExperienceSection from "@/components/experience";
import ProjectsSection from "@/components/projects";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import TechPage from "@/components/tech";

function MovingStars() {
  const starsRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (starsRef.current) {
      starsRef.current.rotation.y += delta * 0.03;
      starsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;

      starsRef.current.children.forEach((child, i) => {
        child.rotation.z += delta * 0.02 * (i % 2 === 0 ? 1 : -1);
      });
    }
  });

  return (
    <group ref={starsRef}>
      <Stars radius={100} depth={200} count={6000} factor={4} saturation={0} fade />
    </group>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <MagicalCursor />

      {/* Full-page stars background */}
      <div className="fixed inset-0 -z-50">
        <Canvas camera={{ position: [0, 0, 100], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <MovingStars />
        </Canvas>
      </div>

      {/* Foreground content */}
      <main className="relative z-10">
        <AboutPage />
        <ProjectsSection />
        <ExperienceSection />
        <TechPage/>
      </main>
    </>
  );
}
