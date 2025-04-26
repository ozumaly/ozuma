"use client";

import type React from "react";
import { motion } from "framer-motion";
import { useHasMounted } from "@/hooks/useHasMounted";
import { FaComments, FaCode, FaMobileAlt, FaRocket } from "react-icons/fa";

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

const workProcess: ProcessStep[] = [
  {
    id: 1,
    title: "Project Brief",
    description:
      "We will discuss your project and its goals, target audience, and specific requirements to ensure a clear understanding of your vision.",
    icon: FaComments,
    color: "bg-primary",
  },
  {
    id: 2,
    title: "Design & Develop",
    description:
      "I will design and develop your website according to your needs, focusing on user experience, performance, and modern design principles.",
    icon: FaCode,
    color: "bg-primary/80",
  },
  {
    id: 3,
    title: "Testing & Review",
    description:
      "I will let you test the website and make any changes if needed, ensuring everything functions perfectly and meets your expectations.",
    icon: FaMobileAlt,
    color: "bg-primary/60",
  },
  {
    id: 4,
    title: "Launch",
    description:
      "I will give you the source code and help you with the launch, providing support for deployment and any technical assistance needed.",
    icon: FaRocket,
    color: "bg-primary/40",
  },
];

export default function WorkProcess() {
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return null;
  }

  return (
    <section id="process" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

        {/* Animated Background Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full bg-primary/10"
            style={{
              width: Math.random() * 120 + 50,
              height: Math.random() * 120 + 50,
              filter: "blur(40px)",
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
              ],
              y: [
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
              ],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: Math.random() * 20 + 30,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-4 relative inline-block text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Work Process
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-1 bg-primary"
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
            My structured approach ensures your project moves from concept to completion
            smoothly and efficiently, with clear communication at every step.
          </motion.p>
        </div>

        {/* Timeline Process Steps */}
        <div className="max-w-4xl mx-auto relative">
          {/* Central timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20" />

          {workProcess.map((step, index) => (
            <motion.div
              key={step.id}
              className={`flex items-stretch mb-16 last:mb-0 relative ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Left/Right content */}
              <div className="w-1/2 px-6">
                <div
                  className={`p-6 rounded-xl backdrop-blur-sm border border-primary/30 bg-black/30 h-full
                    shadow-[0_0_25px_rgba(161,103,255,0.15)] relative overflow-hidden transition-all duration-300
                    hover:shadow-[0_0_30px_rgba(161,103,255,0.3)] hover:border-primary/50 group`}
                >
                  {/* Gradient background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-40" />

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Center timeline node */}
              <div className="absolute left-1/2 top-10 transform -translate-x-1/2 z-10">
                <motion.div
                  className={`w-14 h-14 rounded-full ${step.color} flex items-center justify-center
                    border-4 border-background shadow-[0_0_15px_rgba(161,103,255,0.5)]`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <step.icon className="text-white w-6 h-6" />
                </motion.div>
              </div>

              {/* Line connector to timeline (visible on hover) */}
              <motion.div
                className="absolute h-0.5 bg-primary top-[3.25rem] w-[calc(25%-1.75rem)]"
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "calc(25% - 1.75rem)", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.2 }}
                style={{
                  left: index % 2 === 0 ? "auto" : "0",
                  right: index % 2 === 0 ? "0" : "auto",
                }}
              />

              {/* Empty space for alternating layout */}
              <div className="w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
