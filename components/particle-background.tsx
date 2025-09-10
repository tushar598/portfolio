"use client"

import { useEffect, useRef, useCallback } from "react"
import { useTheme } from "next-themes"

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

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const particlesRef = useRef<Particle[]>([])
  const { resolvedTheme } = useTheme()

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
    if (ctx) {
      ctx.scale(dpr, dpr)
    }
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

  const animate = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const rect = canvas.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    ctx.clearRect(0, 0, width, height)

    // Update and draw particles
    particlesRef.current.forEach((particle, index) => {
      particle.x += particle.vx
      particle.y += particle.vy
      particle.life -= 0.5

      // Bounce off edges
      if (particle.x < 0 || particle.x > width) particle.vx *= -1
      if (particle.y < 0 || particle.y > height) particle.vy *= -1

      // Respawn particle if life is over
      if (particle.life <= 0) {
        particle.x = Math.random() * width
        particle.y = Math.random() * height
        particle.life = Math.random() * 100 + 100
      }

      // Draw particle
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      ctx.fillStyle =
        particle.color +
        Math.floor(particle.opacity * 255)
          .toString(16)
          .padStart(2, "0")
      ctx.fill()

      // Draw connections (optimized - only check nearby particles)
      for (let j = index + 1; j < particlesRef.current.length; j++) {
        const otherParticle = particlesRef.current[j]
        const dx = particle.x - otherParticle.x
        const dy = particle.y - otherParticle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 100) {
          ctx.beginPath()
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(otherParticle.x, otherParticle.y)
          ctx.strokeStyle = particle.color + "10"
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      }
    })

    animationRef.current = requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    resizeCanvas()

    const rect = canvas.getBoundingClientRect()
    particlesRef.current = createParticles(rect.width, rect.height)

    animate()

    const handleResize = () => {
      resizeCanvas()
      const rect = canvas.getBoundingClientRect()
      particlesRef.current = createParticles(rect.width, rect.height)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [resizeCanvas, createParticles, animate])

  // Update particle colors when theme changes
  useEffect(() => {
    const lightColors = ["#3b82f6", "#1d4ed8", "#06b6d4", "#0891b2", "#8b5cf6"]
    const darkColors = ["#a855f7", "#ec4899", "#f97316", "#eab308", "#06b6d4"]

    const colors = resolvedTheme === "dark" ? darkColors : lightColors

    particlesRef.current.forEach((particle, index) => {
      particle.color = colors[index % colors.length]
    })
  }, [resolvedTheme])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-60"
      style={{
        width: "100vw",
        height: "100vh",
        mixBlendMode: resolvedTheme === "dark" ? "screen" : "multiply",
      }}
    />
  )
}
