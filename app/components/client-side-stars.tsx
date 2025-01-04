'use client'

import React, { useEffect, useState } from 'react'

interface Star {
  top: string;
  left: string;
  animationDelay: string;
  opacity: number;
}

export default function ClientSideStars() {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    const newStars = Array.from({ length: 20 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 2}s`,
      opacity: Math.random() * 0.7
    }))
    setStars(newStars)
  }, [])

  return (
    <div className="fixed inset-0 -z-10">
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
          style={{
            top: star.top,
            left: star.left,
            animationDelay: star.animationDelay,
            opacity: star.opacity
          }}
        />
      ))}
    </div>
  )
}

