"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useHasMounted } from "@/hooks/useHasMounted";
import { FaDiscord, FaGithub, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function HireMe() {
  const hasMounted = useHasMounted();
  const [activeContact, setActiveContact] = useState<string | null>(null);

  // For blob animation
  const blobControls = useAnimation();

  // Contact options - Priyanshu's actual info
  const contactOptions = [
    { id: "discord", label: "Discord", icon: FaDiscord, url: "https://discordapp.com/users/931059762173464597", color: "from-indigo-500 to-purple-600", detail: "br4d77" },
    { id: "github", label: "GitHub", icon: FaGithub, url: "https://github.com/bre4d77", color: "from-gray-700 to-gray-900", detail: "bre4d77" },
    { id: "email", label: "Email", icon: FaEnvelope, url: "mailto:Priyanshu.uwu.u@gmail.com", color: "from-red-400 to-pink-600", detail: "Priyanshu.uwu.u@gmail.com" },
  ];

  useEffect(() => {
    // Animate blob continuously
    blobControls.start({
      d: [
        "M60.5,-65.3C77.4,-50.3,89.7,-30.2,93.1,-8.7C96.5,12.9,91,35.8,77.6,54C64.1,72.2,42.8,85.6,18.9,90.8C-5,95.9,-31.4,92.8,-52.7,80.1C-74,67.4,-90.1,45.1,-93.4,22.1C-96.7,-0.9,-87,-24.5,-71.4,-41.3C-55.9,-58.1,-34.5,-68,-12.8,-73.6C8.9,-79.2,43.6,-80.4,60.5,-65.3Z",
        "M57.7,-64.2C71.9,-49.9,78.7,-28.8,80.9,-7.6C83.1,13.5,80.7,34.7,69.4,50.8C58.1,66.9,37.8,77.8,15.5,83.1C-6.9,88.3,-31.3,87.8,-49,77.8C-66.8,67.8,-77.9,48.3,-83.7,27.2C-89.5,6.1,-90.1,-16.8,-80.2,-32.8C-70.3,-48.9,-50,-58.2,-31.5,-71.4C-13,-84.6,3.7,-102,22.1,-97.6C40.5,-93.3,43.5,-78.5,57.7,-64.2Z",
        "M61.4,-68.9C75.9,-55.8,81.9,-32.6,84.6,-9.8C87.3,13,86.7,35.4,75.8,51.4C64.9,67.4,43.6,77,20.6,85.2C-2.4,93.3,-27.1,99.8,-47.5,92.8C-67.9,85.8,-84,65.3,-89.5,43.5C-95,21.6,-89.9,-1.5,-81.2,-21.4C-72.5,-41.3,-60.3,-58,-44.8,-70.5C-29.3,-83,-14.7,-91.3,3.7,-95.4C22,-99.6,44.1,-99.6,61.4,-68.9Z"
      ],
      transition: {
        duration: 10,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    });
  }, [blobControls]);

  if (!hasMounted) {
    return null;
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-black/50" />

        {/* Animated Particles */}
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={`particle-${i}-${Math.random()}`}
            className="absolute w-2 h-2 rounded-full bg-primary/40"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              opacity: 0.3,
              scale: Math.random() * 2 + 0.5
            }}
            animate={{
              y: [
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`
              ],
              x: [
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`
              ],
              opacity: [0.2, 0.7, 0.2],
              scale: [Math.random() + 0.5, Math.random() * 2 + 0.5, Math.random() + 0.5]
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear"
            }}
          />
        ))}

        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute -top-80 -left-80 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(161, 103, 255, 0.7) 0%, rgba(102, 26, 230, 0.3) 70%, rgba(0, 0, 0, 0) 100%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute -bottom-80 -right-80 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(161, 103, 255, 0.7) 0%, rgba(102, 26, 230, 0.3) 70%, rgba(0, 0, 0, 0) 100%)",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
            rotate: [360, 0],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        {/* Animated SVG blob */}
        <svg
          className="absolute w-full h-full opacity-10"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            fill="url(#blob-gradient)"
            animate={blobControls}
            d="M60.5,-65.3C77.4,-50.3,89.7,-30.2,93.1,-8.7C96.5,12.9,91,35.8,77.6,54C64.1,72.2,42.8,85.6,18.9,90.8C-5,95.9,-31.4,92.8,-52.7,80.1C-74,67.4,-90.1,45.1,-93.4,22.1C-96.7,-0.9,-87,-24.5,-71.4,-41.3C-55.9,-58.1,-34.5,-68,-12.8,-73.6C8.9,-79.2,43.6,-80.4,60.5,-65.3Z"
          />
          <defs>
            <linearGradient id="blob-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(161, 103, 255)" />
              <stop offset="100%" stopColor="rgb(102, 26, 230)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header with 3D Effect */}
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-5xl font-bold mb-4 relative inline-block
                text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Hire Me
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-violet-400 to-purple-600"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Ready to bring your vision to life? I'm currently available for new projects.
              Choose your preferred contact method below!
            </motion.p>
          </div>

          {/* Contact Cards - Full-width on mobile, 3 cards per row on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactOptions.map((contact, index) => (
              <motion.div
                key={contact.id}
                className="relative"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                onHoverStart={() => setActiveContact(contact.id)}
                onHoverEnd={() => setActiveContact(null)}
                whileHover="hover"
              >
                <Link
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <motion.div
                    className={`relative overflow-hidden bg-gradient-to-br ${contact.color} rounded-xl text-white p-8 flex flex-col items-center transform-gpu h-full`}
                    whileHover={{
                      scale: 1.05,
                      y: -8,
                      boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 10
                    }}
                  >
                    {/* Icon with floating animation */}
                    <motion.div
                      animate={{
                        y: activeContact === contact.id ? [0, -10, 0] : 0
                      }}
                      transition={{
                        duration: 2,
                        repeat: activeContact === contact.id ? Number.POSITIVE_INFINITY : 0,
                        ease: "easeInOut"
                      }}
                      className="mb-6"
                    >
                      <contact.icon className="h-16 w-16 drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]" />
                    </motion.div>

                    {/* Label with glow effect */}
                    <motion.span
                      className="font-bold text-2xl mb-3 relative"
                      animate={{
                        textShadow: activeContact === contact.id ?
                          ["0 0 8px rgba(255,255,255,0.4)", "0 0 16px rgba(255,255,255,0.6)", "0 0 8px rgba(255,255,255,0.4)"] :
                          "0 0 0px rgba(255,255,255,0)"
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut"
                      }}
                    >
                      {contact.label}
                    </motion.span>

                    {/* Detail */}
                    <span className="text-sm opacity-90">{contact.detail}</span>

                    {/* Moving gradient overlay effect */}
                    <motion.div
                      className="absolute inset-0 opacity-40"
                      initial={{
                        background: `linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%)`,
                        backgroundSize: "200% 200%",
                        backgroundPosition: "0% 0%"
                      }}
                      animate={{
                        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
                      }}
                      transition={{
                        duration: 5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear"
                      }}
                    />

                    {/* Particle effect on hover */}
                    {activeContact === contact.id &&
                      Array.from({ length: 12 }).map((_, i) => (
                        <motion.div
                          key={`contact-particle-${contact.id}-${i}`}
                          className="absolute w-1.5 h-1.5 bg-white rounded-full"
                          initial={{
                            x: "50%",
                            y: "50%",
                            opacity: 0.8,
                            scale: 0
                          }}
                          animate={{
                            x: `${Math.random() * 100}%`,
                            y: `${Math.random() * 100}%`,
                            opacity: 0,
                            scale: Math.random() * 2
                          }}
                          transition={{
                            duration: Math.random() * 1.5 + 0.5,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatDelay: Math.random() * 0.5
                          }}
                        />
                      ))
                    }
                  </motion.div>
                </Link>

                {/* Glow effect */}
                <motion.div
                  className="absolute -z-10 -inset-0.5 rounded-xl blur-md bg-gradient-to-r from-primary/40 to-purple-700/40"
                  initial={{ opacity: 0.2 }}
                  whileHover={{
                    opacity: 0.8,
                    scale: 1.03
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Main Feature Card */}
          <motion.div
            id="hire-me-card"
            className="relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div
              className="relative bg-black/30 backdrop-blur-sm border border-white/10
                rounded-2xl p-8 md:p-10 overflow-hidden"
            >
              {/* Dynamic gradient background */}
              <motion.div
                className="absolute inset-0 z-0"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 10,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "mirror"
                }}
                style={{
                  backgroundSize: '200% 200%',
                  backgroundImage: 'linear-gradient(45deg, #14151a 0%, #24142c 50%, #14151a 100%)',
                }}
              />

              {/* Animated glow effect */}
              <motion.div
                className="absolute inset-0 opacity-30"
                animate={{
                  boxShadow: [
                    "inset 0 0 40px rgba(161, 103, 255, 0.2)",
                    "inset 0 0 80px rgba(161, 103, 255, 0.4)",
                    "inset 0 0 40px rgba(161, 103, 255, 0.2)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut"
                }}
              />

              {/* Service offerings with animated check icons */}
              <div className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-gray-200">
                  {[
                    "Custom solutions tailored to your specific needs",
                    "Clean, efficient code that's built to last",
                    "Clear communication throughout the project",
                    "Competitive rates with flexible payment options",
                    "Fast turnaround times for critical projects",
                    "Ongoing support and maintenance options"
                  ].map((item, index) => (
                    <motion.div
                      key={`service-${index}`}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                    >
                      <motion.div
                        className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary/20 rounded-full mr-3"
                        whileHover={{ scale: 1.2, backgroundColor: "rgba(161, 103, 255, 0.4)" }}
                        animate={{
                          boxShadow: [
                            "0 0 0 rgba(161, 103, 255, 0)",
                            "0 0 8px rgba(161, 103, 255, 0.5)",
                            "0 0 0 rgba(161, 103, 255, 0)"
                          ]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: index * 0.2
                        }}
                      >
                        <motion.span
                          className="text-primary"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: index * 0.2
                          }}
                        >
                          ✓
                        </motion.span>
                      </motion.div>
                      <span className="text-sm md:text-base">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
