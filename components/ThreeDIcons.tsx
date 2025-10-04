"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React from "react";

// 3D Heart (using torusKnot)
export const Heart3D = () => (
  <Canvas camera={{ position: [0, 0, 4] }}>
    <ambientLight intensity={1.2} />
    <directionalLight position={[2, 2, 2]} />
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <torusKnotGeometry args={[0.8, 0.25, 100, 16]} />
      <meshStandardMaterial color="#ec4899" />
    </mesh>
  </Canvas>
);

// 3D Star
export const Star3D = () => (
  <Canvas camera={{ position: [0, 0, 4] }}>
    <ambientLight intensity={1.2} />
    <directionalLight position={[2, 2, 2]} />
    <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color="#facc15" />
    </mesh>
  </Canvas>
);

// 3D Users (multiple spheres)
export const Users3D = () => (
  <Canvas camera={{ position: [0, 0, 6] }}>
    <ambientLight intensity={1.2} />
    <directionalLight position={[2, 2, 2]} />
    <group>
      <mesh position={[-1.2, 0, 0]}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial color="#8b5cf6" />
      </mesh>
      <mesh position={[1.2, 0, 0]}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial color="#a855f7" />
      </mesh>
    </group>
  </Canvas>
);

// 3D Award (cone)
export const Award3D = () => (
  <Canvas camera={{ position: [0, 0, 5] }}>
    <ambientLight intensity={1.2} />
    <directionalLight position={[2, 2, 2]} />
    <mesh>
      <coneGeometry args={[0.6, 1, 6]} />
      <meshStandardMaterial color="#facc15" />
    </mesh>
  </Canvas>
);

// 3D Coffee (cylinder)
export const Coffee3D = () => (
  <Canvas camera={{ position: [0, 0, 5] }}>
    <ambientLight intensity={1.2} />
    <directionalLight position={[2, 2, 2]} />
    <mesh>
      <cylinderGeometry args={[0.4, 0.4, 0.8, 32]} />
      <meshStandardMaterial color="#a855f7" />
    </mesh>
  </Canvas>
);

// 3D Zap (octahedron)
export const Zap3D = () => (
  <Canvas camera={{ position: [0, 0, 5] }}>
    <ambientLight intensity={1.2} />
    <directionalLight position={[2, 2, 2]} />
    <mesh rotation={[0.4, 0.3, 0]}>
      <octahedronGeometry args={[0.6, 0]} />
      <meshStandardMaterial color="#3b82f6" />
    </mesh>
  </Canvas>
);

// 3D User (single sphere)
export const User3D = () => (
  <Canvas camera={{ position: [0, 0, 4] }}>
    <ambientLight intensity={1.2} />
    <directionalLight position={[2, 2, 2]} />
    <mesh>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="#38bdf8" />
    </mesh>
  </Canvas>
);
