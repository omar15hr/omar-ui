"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "motion/react"

export default function MatrixCard() {
  const [isHovered, setIsHovered] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const requestRef = useRef<number>(undefined)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isHovered || !canvasRef.current || !containerRef.current) return

    const canvas = canvasRef.current
    const container = containerRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)
    const drops: number[] = new Array(columns).fill(1)
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$@#%"

    ctx.font = `${fontSize}px monospace`

    const matrix = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = "#0F0"
      ctx.textAlign = "center"

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
      requestRef.current = requestAnimationFrame(matrix)
    }

    matrix()

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [isHovered])

  return (
    <div className="flex h-[400px] min-h-[300px] w-full items-center justify-center p-4 md:h-[640px]">
      <motion.div
        ref={containerRef}
        className="group border-dark-200 bg-dark-50 hover:border-dark-300 relative h-full w-full max-w-md overflow-hidden rounded-xl border p-6 transition-colors"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <canvas
          ref={canvasRef}
          className="pointer-events-none absolute inset-0 h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-20"
        />
        <div className="relative z-10 flex h-full flex-col items-center justify-center">
          <p className="text-dark-950 pointer-events-none mb-2 text-xl font-bold select-none">
            Matrix Effect Card
          </p>
          <p className="text-dark-900 pointer-events-none text-center select-none">
            Hover or hold down over this card to see the matrix rain effect in
            action.
          </p>
        </div>
      </motion.div>
    </div>
  )
}