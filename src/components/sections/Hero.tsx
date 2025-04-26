"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ParticleBackground from "../animations/ParticleBackground";
import { Button } from "@/components/ui/button";
import { useHasMounted } from "@/hooks/useHasMounted";

export default function Hero() {
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return null;
  }

  const scrollToAbout = () => {
    const techSection = document.getElementById("skills");
    if (techSection) {
      techSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-10 overflow-hidden"
    >
      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
        <ParticleBackground />
      </div>

      {/* Discord-style Banner */}
      <div className="container max-w-6xl mx-auto px-4 z-10 w-full">
        <div className="relative w-full rounded-3xl overflow-hidden bg-secondary/30 border border-secondary shadow-xl">
          {/* Banner Image */}
          <div className="relative w-full h-64 md:h-80 overflow-hidden">
            {/* Banner Image */}
            <Image
              src="/images/banner.gif"
              alt="Profile Banner"
              fill
              className="object-cover object-center"
              priority
            />

            {/* Overlay to make text more visible */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Banner Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Banner content removed as requested */}
            </div>
          </div>

          {/* Profile Section */}
          <div className="relative px-6 pb-8 pt-24 md:pt-28">
            {/* Profile Image */}
            <div className="absolute -top-16 left-8 z-10">
              <motion.div
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden gradient-border p-1"
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.3,
                }}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-primary/20 border-4 border-background">
                  <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center">
                    <Image
                      src="https://cdn.discordapp.com/avatars/931059762173464597/a_f64c97fb44b460f66bfcc50d5de6aceb.gif?size=512"
                      alt="Profile Avatar"
                      width={160}
                      height={160}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Name and Title */}
            <div className="ml-1 md:ml-44">
              <motion.h1
                className="text-3xl md:text-5xl font-bold text-foreground mb-2 reveal-text reveal-delay-1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                Priyanshu
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl reveal-text reveal-delay-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                Crafting beautiful experiences with clean code and
                creative solutions. Specializing in modern frontend development
                with a focus on performance and user experience.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-wrap gap-4 reveal-text reveal-delay-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <Button
                  size="lg"
                  className="relative overflow-hidden group font-medium"
                  onClick={scrollToAbout}
                >
                  <span className="relative z-10 flex items-center">
                    Know About Me
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-2 group-hover:translate-y-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-primary opacity-50 group-hover:opacity-80 transition-opacity duration-300" />
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-80 transition-opacity duration-500" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary hover:bg-primary/10 font-medium"
                  onClick={() =>
                    document.getElementById("contact")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                >
                  Contact Me
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
}
