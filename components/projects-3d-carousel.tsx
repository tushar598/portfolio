"use client"

import { useRef, useState, useEffect, Suspense } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { Text, RoundedBox, Environment, PerspectiveCamera, OrbitControls, Html } from "@react-three/drei"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import * as THREE from "three"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "#",
    live: "#",
    color: "#667eea",
  },
  {
    id: 2,
    title: "AI Task Manager",
    description: "An intelligent task management app with AI-powered scheduling.",
    technologies: ["Next.js", "TypeScript", "Prisma", "OpenAI"],
    github: "#",
    live: "#",
    color: "#764ba2",
  },
  {
    id: 3,
    title: "3D Portfolio Site",
    description: "An immersive 3D portfolio website built with Three.js.",
    technologies: ["Three.js", "React", "WebGL", "Framer Motion"],
    github: "#",
    live: "#",
    color: "#f093fb",
  },
  {
    id: 4,
    title: "Crypto Dashboard",
    description: "Real-time cryptocurrency tracking dashboard with advanced charts.",
    technologies: ["Vue.js", "D3.js", "WebSocket", "Chart.js"],
    github: "#",
    live: "#",
    color: "#f5576c",
  },
]

function ProjectCard({
  project,
  position,
  rotation,
  isActive,
  onClick,
}: {
  project: (typeof projects)[0]
  position: [number, number, number]
  rotation: [number, number, number]
  isActive: boolean
  onClick: () => void
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.05
    }
  })

  return (
    <group position={position} rotation={rotation}>
      <RoundedBox
        ref={meshRef}
        args={[2.5, 3.5, 0.1]}
        radius={0.05}
        smoothness={4}
        onClick={onClick}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        scale={isActive ? 1.1 : hovered ? 1.05 : 1}
      >
        <meshStandardMaterial
          color={project.color}
          metalness={0.6}
          roughness={0.3}
          transparent
          opacity={isActive ? 1 : 0.8}
        />
      </RoundedBox>

      {/* Project Title */}
      <Text
        position={[0, 0, 0.06]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
        maxWidth={2}
        textAlign="center"
      >
        {project.title}
      </Text>

      {/* Project Info HTML Overlay */}
      {isActive && (
        <Html position={[0, -2, 0.1]} center distanceFactor={6} style={{ pointerEvents: "none" }}>
          <div className="glass rounded-xl p-4 max-w-xs text-center shadow-xl">
            <h3 className="text-lg font-bold mb-2 text-white">{project.title}</h3>
            <p className="text-white/80 text-sm mb-3 line-clamp-2">{project.description}</p>
            <div className="flex flex-wrap gap-1 justify-center">
              {project.technologies.slice(0, 3).map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs bg-white/20 text-white border-white/30">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </Html>
      )}
    </group>
  )
}

function Scene({ currentIndex, setCurrentIndex }: { currentIndex: number; setCurrentIndex: (index: number) => void }) {
  const groupRef = useRef<THREE.Group>(null)
  const { camera } = useThree()

  useFrame(() => {
    if (groupRef.current) {
      const targetRotation = -(currentIndex * (Math.PI * 2)) / projects.length
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotation, 0.03)
    }
  })

  useEffect(() => {
    if (camera) {
      camera.position.set(0, 0, 6)
    }
  }, [camera])

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={75} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={true}
        autoRotate={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        rotateSpeed={0.5}
      />

      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <pointLight position={[-5, -5, -5]} intensity={0.3} color="#667eea" />

      <Suspense fallback={null}>
        <Environment preset="sunset" />
      </Suspense>

      <group ref={groupRef}>
        {projects.map((project, index) => {
          const angle = (index / projects.length) * Math.PI * 2
          const radius = 4
          const x = Math.cos(angle) * radius
          const z = Math.sin(angle) * radius

          return (
            <ProjectCard
              key={project.id}
              project={project}
              position={[x, 0, z]}
              rotation={[0, -angle + Math.PI / 2, 0]}
              isActive={index === currentIndex}
              onClick={() => setCurrentIndex(index)}
            />
          )
        })}
      </group>
    </>
  )
}

function LoadingFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center glass">
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="w-12 h-12 border-3 border-purple-500/30 border-t-purple-500 rounded-full mx-auto mb-4"
        />
        <p className="text-white font-medium">Loading 3D Experience...</p>
      </div>
    </div>
  )
}

export function Projects3DCarousel() {
  return null
}
