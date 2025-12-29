'use client'

import { useEffect, useState } from 'react'

interface Snowflake {
  id: number
  left: number
  size: number
  duration: number
  delay: number
  opacity: number
}

export default function SnowEffect() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([])

  useEffect(() => {
    // 創建 50-80 個雪花
    const count = Math.floor(Math.random() * 30) + 50
    const flakes: Snowflake[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 4 + 2, // 2-6px
      duration: Math.random() * 3 + 2, // 2-5s
      delay: Math.random() * 2,
      opacity: Math.random() * 0.5 + 0.3, // 0.3-0.8
    }))
    setSnowflakes(flakes)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute top-0 rounded-full bg-white dark:bg-slate-300"
          style={{
            left: `${flake.left}%`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            opacity: flake.opacity,
            animation: `snowfall ${flake.duration}s linear infinite`,
            animationDelay: `${flake.delay}s`,
            boxShadow: '0 0 6px rgba(255, 255, 255, 0.5)',
          }}
        />
      ))}
      <style jsx>{`
        @keyframes snowfall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
          }
        }
      `}</style>
    </div>
  )
}

