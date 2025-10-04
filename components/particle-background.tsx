
"use client"

import { useEffect, useRef, useCallback } from "react"
import { useTheme } from "next-themes"
import * as THREE from "three"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
  life: number
}

interface Comet {
  x: number
  y: number
  length: number
  speed: number
  opacity: number
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const threeContainerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()
  const particlesRef = useRef<Particle[]>([])
  const cometsRef = useRef<Comet[]>([])
  const { resolvedTheme } = useTheme()

  const threeRef = useRef<{ scene: THREE.Scene; camera: THREE.PerspectiveCamera; renderer: THREE.WebGLRenderer; starField: THREE.Points } | null>(null)

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()

    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    canvas.style.width = rect.width + "px"
    canvas.style.height = rect.height + "px"

    const ctx = canvas.getContext("2d")
    if (ctx) ctx.scale(dpr, dpr)
  }, [])

  const createParticles = useCallback(
    (width: number, height: number) => {
      const lightColors = ["#3b82f6", "#1d4ed8", "#06b6d4", "#0891b2", "#8b5cf6"]
      const darkColors = ["#a855f7", "#ec4899", "#f97316", "#eab308", "#06b6d4"]

      const colors = resolvedTheme === "dark" ? darkColors : lightColors
      const particleCount = Math.min(30, Math.floor((width * height) / 20000))

      const particles: Particle[] = []
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.3 + 0.1,
          color: colors[Math.floor(Math.random() * colors.length)],
          life: Math.random() * 100 + 100,
        })
      }
      return particles
    },
    [resolvedTheme],
  )

  const createComets = useCallback((width: number, height: number) => {
    const comets: Comet[] = []
    const cometCount = 3
    for (let i = 0; i < cometCount; i++) {
      comets.push({
        x: Math.random() * width,
        y: Math.random() * height,
        length: Math.random() * 50 + 20,
        speed: Math.random() * 3 + 1,
        opacity: Math.random() * 0.7 + 0.3,
      })
    }
    return comets
  }, [])

  const initThreeJS = useCallback(() => {
    if (!threeContainerRef.current) return

    const width = window.innerWidth
    const height = window.innerHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    camera.position.z = 50

    const renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(width, height)
    threeContainerRef.current.appendChild(renderer.domElement)

    const starGeometry = new THREE.BufferGeometry()
    const starCount = 500
    const positions = []

    for (let i = 0; i < starCount; i++) {
      const x = (Math.random() - 0.5) * 200
      const y = (Math.random() - 0.5) * 200
      const z = -Math.random() * 200
      positions.push(x, y, z)
    }

    starGeometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3))
    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.5, transparent: true, opacity: 0.7 })
    const starField = new THREE.Points(starGeometry, starMaterial)
    scene.add(starField)

    threeRef.current = { scene, camera, renderer, starField }
  }, [])

  const animate = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const width = window.innerWidth
    const height = window.innerHeight

    ctx.clearRect(0, 0, width, height)

    // Main particles
    particlesRef.current.forEach((particle, index) => {
      particle.x += particle.vx
      particle.y += particle.vy
      particle.life -= 0.5
      if (particle.x < 0 || particle.x > width) particle.vx *= -1
      if (particle.y < 0 || particle.y > height) particle.vy *= -1
      if (particle.life <= 0) {
        particle.x = Math.random() * width
        particle.y = Math.random() * height
        particle.life = Math.random() * 100 + 100
      }
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      ctx.fillStyle =
        particle.color +
        Math.floor(particle.opacity * 255)
          .toString(16)
          .padStart(2, "0")
      ctx.fill()
      for (let j = index + 1; j < particlesRef.current.length; j++) {
        const other = particlesRef.current[j]
        const dx = particle.x - other.x
        const dy = particle.y - other.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        if (distance < 100) {
          ctx.beginPath()
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(other.x, other.y)
          ctx.strokeStyle = particle.color + "10"
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      }
    })

    // Comets
    cometsRef.current.forEach((comet) => {
      comet.x += comet.speed
      comet.y += comet.speed
      if (comet.x > width || comet.y > height) {
        comet.x = -comet.length
        comet.y = Math.random() * height * 0.5
      }
      ctx.beginPath()
      ctx.moveTo(comet.x, comet.y)
      ctx.lineTo(comet.x - comet.length, comet.y - comet.length)
      ctx.strokeStyle = `rgba(255,255,255,${comet.opacity})`
      ctx.lineWidth = 1
      ctx.stroke()
    })

    // Three.js galaxy
    if (threeRef.current) {
      const { scene, camera, renderer, starField } = threeRef.current
      starField.rotation.y += 0.0005
      renderer.render(scene, camera)
    }

    animationRef.current = requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    resizeCanvas()
    const width = window.innerWidth
    const height = window.innerHeight
    particlesRef.current = createParticles(width, height)
    cometsRef.current = createComets(width, height)
    initThreeJS()
    animate()

    const handleResize = () => {
      resizeCanvas()
      const width = window.innerWidth
      const height = window.innerHeight
      particlesRef.current = createParticles(width, height)
      cometsRef.current = createComets(width, height)
      if (threeRef.current) {
        threeRef.current.renderer.setSize(width, height)
        threeRef.current.camera.aspect = width / height
        threeRef.current.camera.updateProjectionMatrix()
      }
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [resizeCanvas, createParticles, createComets, initThreeJS, animate])

  useEffect(() => {
    const lightColors = ["#3b82f6", "#1d4ed8", "#06b6d4", "#0891b2", "#8b5cf6"]
    const darkColors = ["#a855f7", "#ec4899", "#f97316", "#eab308", "#06b6d4"]
    const colors = resolvedTheme === "dark" ? darkColors : lightColors
    particlesRef.current.forEach((particle, index) => {
      particle.color = colors[index % colors.length]
    })
  }, [resolvedTheme])

  return (
    <>
      <div ref={threeContainerRef} className="fixed inset-0 pointer-events-none z-[-1]" />
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0 opacity-80"
        style={{
          width: "100vw",
          height: "100vh",
          mixBlendMode: resolvedTheme === "dark" ? "screen" : "multiply",
        }}
      />
    </>
  )
}
