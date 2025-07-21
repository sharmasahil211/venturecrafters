"use client"

import { useEffect, useRef } from "react"

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: { x: number; y: number; size: number; speedX: number; speedY: number }[] = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight * 1.2
    }
    resizeCanvas()

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 1
        this.speedX = Math.random() * 0.4 - 0.2
        this.speedY = Math.random() * 0.4 - 0.2
      }
      update() {
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1
        this.x += this.speedX
        this.y += this.speedY
      }
      draw() {
        if (!ctx) return
        ctx.fillStyle = "rgba(156, 163, 175, 0.5)"
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const init = () => {
      particles = []
      // Reduced particle density for better performance
      const numberOfParticles = (canvas.width * canvas.height) / 18000
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle())
      }
    }
    init()

    const connect = () => {
      if (!ctx) return
      let opacityValue = 1
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const distance = Math.sqrt(
            (particles[a].x - particles[b].x) * (particles[a].x - particles[b].x) +
              (particles[a].y - particles[b].y) * (particles[a].y - particles[b].y),
          )
          // Reduced connection distance for better performance
          if (distance < 100) {
            opacityValue = 1 - distance / 100
            ctx.strokeStyle = `rgba(156, 163, 175, ${opacityValue})`
            ctx.lineWidth = 0.5 // Thinner lines
            ctx.beginPath()
            ctx.moveTo(particles[a].x, particles[a].y)
            ctx.lineTo(particles[b].x, particles[b].y)
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.update()
        p.draw()
      })
      connect()
      animationFrameId = requestAnimationFrame(animate)
    }
    animate()

    window.addEventListener("resize", () => {
      resizeCanvas()
      init()
    })

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />
}
