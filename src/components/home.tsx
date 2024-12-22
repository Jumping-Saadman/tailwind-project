"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Button } from "./ui/button";

export default function HomeSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; // Slow down the video slightly
    }
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-800 text-white scroll-mt-16"
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-50 left-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source src="/videos/hero-video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        className="absolute top-50 left-0 w-full h-full bg-black bg-opacity-50"
        aria-hidden="true"
      ></div>
      <div className="relative z-10 text-center text-white">
        <Image
          src="/logos/AG-typeface-bangla.svg"
          alt=""
          width={200}
          height={200}
          className="ml-auto mr-auto mb-4 scale-110"
        />
        <p className="text-xl">Bringing revolution in esports</p>
        <p className="text-xl">production and ecosystem of Bangladesh</p>
        <Button
          className="
            h-12
            w-52
            mt-6
            border-2
            border-emerald-400
            transform
            transition
            duration-500
            hover:-translate-y-2
            hover:scale-105
            hover:bg-emerald-400
            hover:text-black
            bg-black
            font-mono
            font-bold
            text-2xl
            shadow-lg
           shadow-emerald-500/50
          "
        >
          CREDENTIALS
        </Button>
      </div>
    </section>
  );
}
