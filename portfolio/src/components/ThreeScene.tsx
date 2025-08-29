"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { useGLTF, OrbitControls } from "@react-three/drei";
import AboutPage from "./aboutme";

function Model({ positionOffset = [1, -10, 0] }) {
  const gltf = useGLTF("/models/scene.gltf", true);
  const ref = useRef<THREE.Group>(null);

  const [scale, setScale] = useState(1); 
  const [offsetX, setOffsetX] = useState(positionOffset[0]); // ✅ dynamic X

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setScale(0.4);   // smaller model on mobile
        setOffsetX(0.4); // ✅ shift a bit left for mobile
      } else {
        setScale(1);     // normal desktop size
        setOffsetX(positionOffset[0]); // keep original
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [positionOffset]);

  useFrame(() => {
    if (ref.current) {
      ref.current.position.x = THREE.MathUtils.lerp(
        ref.current.position.x,
        offsetX,
        0.05
      );
      ref.current.position.y = THREE.MathUtils.lerp(
        ref.current.position.y,
        positionOffset[1] + 7,
        0.05
      );
      ref.current.position.z = THREE.MathUtils.lerp(
        ref.current.position.z,
        positionOffset[2] || 0,
        0.05
      );
    }
  });

  return (
    <primitive
      ref={ref}
      object={gltf.scene}
      scale={scale}
      position={[offsetX, positionOffset[1], positionOffset[2] || 0]}
      rotation={[0, -Math.PI / 2, 0]}
    />
  );
}


function CameraAnimation() {
  const { camera } = useThree();
  const t = useRef(0);
  const done = useRef(false);

  const start = new THREE.Vector3(-25, 10, -25);
  const end = new THREE.Vector3(0, 0, 6);

  useFrame(() => {
    if (!done.current) {
      t.current = Math.min(t.current + 0.003, 1);
      const easedT = THREE.MathUtils.smoothstep(t.current, 0, 1);

      camera.position.lerpVectors(start, end, easedT);
      camera.lookAt(0, 0, 0);

      if (t.current >= 1) done.current = true;
    }
  });

  return null;
}

export default function PortfolioStars() {
  return (
    <div className="w-full">
      <section className="relative w-full h-screen bg-black">
        {/* Text overlay */}
        <div className="absolute top-20 w-full text-center z-10 px-4">
          <h1 className="text-6xl md:text-7xl lg:text-8xl text-gray-300 font-extrabold font-sans">
            Tanisha Bhatnagar
          </h1>
          <h2 className="mt-4 text-2xl md:text-3xl text-gray-500 font-light tracking-wider uppercase">
            Portfolio
          </h2>
        </div>

        <Canvas camera={{ position: [-25, 10, -25] }} gl={{ antialias: true }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Model />
          <CameraAnimation />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </section>

      <AboutPage />
    </div>
  );
}
