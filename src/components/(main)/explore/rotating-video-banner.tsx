"use client"

import { useEffect, useState } from 'react';

const videos = [
  "https://cdn.web.imagine.art/remote-config/assets/main-dashboard/videos/banner/15.webm",
  "https://cdn.web.imagine.art/remote-config/assets/main-dashboard/videos/banner/16.webm",
  "https://cdn.web.imagine.art/remote-config/assets/main-dashboard/videos/banner/17.webm",
  "https://cdn.web.imagine.art/remote-config/assets/main-dashboard/videos/banner/18.webm",
  "https://cdn.web.imagine.art/remote-config/assets/main-dashboard/videos/banner/19.webm",
]

export function RotatingVideosBanner() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length)
        setIsTransitioning(false)
      }, 1000)
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full overflow-hidden rounded-xl">
      <div
        className={`transition-opacity duration-1000 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
      >
        <video
          key={currentVideoIndex}
          className="w-full"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videos[currentVideoIndex]} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 p-4 text-white">
        <h2 className="mb-2 text-7xl font-bold">Introducing Pandorra.ai</h2>
        <p className="text-center text-lg">
          Try out the latest video models in VideoCraft
        </p>
      </div>
    </div>
  )
}
