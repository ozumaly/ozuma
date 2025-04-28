"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useHasMounted } from "@/hooks/useHasMounted";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiDocker,
  SiAmazon,
  SiFigma,
  SiGraphql,
  SiFirebase,
} from "react-icons/si";

interface Technology {
  id: string;
  name: string;
  icon: React.ElementType;
  proficiency: number; // 1-5
  category: "frontend" | "backend" | "design" | "devops" | "mobile";
  isLearning?: boolean;
  years: number;
}

const technologies: Technology[] = [
  { id: "react", name: "React", icon: SiReact, proficiency: 5, category: "frontend", years: 4 },
  { id: "nextjs", name: "Next.js", icon: SiNextdotjs, proficiency: 4, category: "frontend", years: 3 },
  { id: "typescript", name: "TypeScript", icon: SiTypescript, proficiency: 4, category: "frontend", years: 3 },
  { id: "tailwind", name: "Tailwind CSS", icon: SiTailwindcss, proficiency: 5, category: "frontend", years: 3 },
  { id: "javascript", name: "JavaScript", icon: SiJavascript, proficiency: 5, category: "frontend", years: 5 },
  { id: "html", name: "HTML5", icon: SiHtml5, proficiency: 5, category: "frontend", years: 5 },
  { id: "css", name: "CSS3", icon: SiCss3, proficiency: 4, category: "frontend", years: 5 },
  { id: "nodejs", name: "Node.js", icon: SiNodedotjs, proficiency: 4, category: "backend", years: 3 },
  { id: "mongodb", name: "MongoDB", icon: SiMongodb, proficiency: 3, category: "backend", years: 2 },
  { id: "git", name: "Git", icon: SiGit, proficiency: 4, category: "devops", years: 4 },
  { id: "docker", name: "Docker", icon: SiDocker, proficiency: 3, category: "devops", years: 2 },
  { id: "aws", name: "AWS", icon: SiAmazon, proficiency: 3, category: "devops", years: 2 },
  { id: "figma", name: "Figma", icon: SiFigma, proficiency: 4, category: "design", years: 3 },
  { id: "graphql", name: "GraphQL", icon: SiGraphql, proficiency: 3, category: "backend", years: 2, isLearning: true },
  { id: "firebase", name: "Firebase", icon: SiFirebase, proficiency: 4, category: "backend", years: 3 },
];

export default function TechStack() {
  const hasMounted = useHasMounted();
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Get all unique categories
  const categories = [...new Set(technologies.map(tech => tech.category))];

  useEffect(() => {
    // Track mouse position for hover effects
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [selectedTech, hoveredTech]);

  if (!hasMounted) {
    return null;
  }

  // Helper function to check if a tech should be highlighted
  const isHighlighted = (tech: Technology) => {
    if (!hoveredTech && !selectedTech) return false;
    if (hoveredTech && tech.id === hoveredTech) return true;
    if (selectedTech && tech.id === selectedTech) return true;
    return false;
  };

  // Filter technologies by category
  const filteredTechnologies = selectedCategory
    ? technologies.filter(tech => tech.category === selectedCategory)
    : technologies;

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-black/10" />

        {/* Animated Grid Lines */}
        <div className="absolute top-0 left-0 w-full h-full grid grid-cols-6 grid-rows-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={`h-line-${i}`}
              className="absolute h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent"
              style={{ top: `${(i + 1) * 100 / 6}%` }}
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                repeatDelay: 5
              }}
            />
          ))}
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={`v-line-${i}`}
              className="absolute w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent"
              style={{ left: `${(i + 1) * 100 / 6}%` }}
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{
                duration: 2,
                delay: i * 0.2 + 0.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                repeatDelay: 6
              }}
            />
          ))}
        </div>

        {/* Floating 3D Orbs */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full bg-gradient-to-r from-primary/10 to-purple-600/5"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              filter: "blur(40px)",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ scale: 0.5, opacity: 0.1 }}
            animate={{
              scale: [0.5, 1, 0.5],
              opacity: [0.1, 0.3, 0.1],
              x: [0, Math.random() * 50 - 25, 0],
              y: [0, Math.random() * 50 - 25, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Enhanced Animated Code Effect Background */}
        <div className="absolute inset-0 opacity-10 text-[6px] font-mono text-primary overflow-hidden mix-blend-overlay">
          {Array.from({ length: 60 }).map((_, i) => (
            <motion.div
              key={`code-line-${i}-${Math.random().toString(36).substring(2, 9)}`}
              className="absolute whitespace-nowrap"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0.3 }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                x: [0, Math.random() * 40 - 20]
              }}
              transition={{
                duration: Math.random() * 8 + 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear"
              }}
            >
              {`const ${['data', 'app', 'component', 'hook', 'api', 'utils', 'store', 'context'][Math.floor(Math.random() * 8)]} = ${['()', '{}', '[]', 'async()', 'new Map()', '=>', '.then()', 'await'][Math.floor(Math.random() * 8)]};`}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-4 relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Tech Stack
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
            Modern technologies I use to build exceptional digital experiences,
            with expertise in frontend, backend, and development operations.
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full text-sm transition-all ${selectedCategory === null ? 'bg-primary text-white' : 'bg-secondary/20 hover:bg-secondary/40'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All
          </motion.button>
          {categories.map(category => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
              className={`px-4 py-2 rounded-full text-sm transition-all capitalize ${selectedCategory === category ? 'bg-primary text-white' : 'bg-secondary/20 hover:bg-secondary/40'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Hexagonal Tech Grid */}
        <div
          ref={containerRef}
          className="relative mx-auto max-w-5xl min-h-[400px] mt-10"
        >
          {/* Mouse Trail Effect */}
          <motion.div
            className="absolute w-10 h-10 rounded-full pointer-events-none"
            animate={{
              x: mousePosition.x - 20,
              y: mousePosition.y - 20,
              opacity: hoveredTech || selectedTech ? 0.2 : 0
            }}
            transition={{ type: "spring", damping: 15 }}
            style={{
              background: "radial-gradient(circle, rgba(161, 103, 255, 0.5) 0%, rgba(161, 103, 255, 0) 70%)",
              zIndex: 5
            }}
          />

          {/* Tech Hexagons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            <AnimatePresence>
              {filteredTechnologies.map((tech, index) => (
                <motion.div
                  key={tech.id}
                  className="flex flex-col items-center"
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                    delay: index * 0.05
                  }}
                  onHoverStart={() => setHoveredTech(tech.id)}
                  onHoverEnd={() => setHoveredTech(null)}
                  onClick={() => setSelectedTech(selectedTech === tech.id ? null : tech.id)}
                >
                  <div className="relative mb-2">
                    {/* Enhanced 3D Hexagon Shape */}
                    <motion.div
                      className={`w-24 h-24 relative flex items-center justify-center cursor-pointer
                        ${isHighlighted(tech) ? 'bg-primary/20' : 'bg-secondary/30'}
                        ${tech.isLearning ? 'border-2 border-primary/30' : ''}
                        transition-all duration-300
                        shadow-[0_0_15px_rgba(0,0,0,0.3)]`}
                      style={{
                        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                        transform: "perspective(800px)"
                      }}
                      whileHover={{
                        scale: 1.1,
                        rotateX: 10,
                        rotateY: 10,
                        boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 10
                        }
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Hexagon Border Glow */}
                      <motion.div
                        className={`absolute inset-0 ${isHighlighted(tech) ? 'opacity-100' : 'opacity-0'}`}
                        style={{
                          clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                          border: "2px solid",
                          borderImageSlice: 1,
                          borderImageSource: "linear-gradient(45deg, #a080ff, #44b4ff)",
                        }}
                        animate={{
                          opacity: isHighlighted(tech) ? [0.6, 1, 0.6] : 0,
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut"
                        }}
                      />

                      {/* Technology Icon with 3D Float Effect */}
                      <motion.div
                        animate={{
                          y: isHighlighted(tech) ? [0, -5, 0] : 0,
                        }}
                        transition={{
                          duration: 2,
                          repeat: isHighlighted(tech) ? Number.POSITIVE_INFINITY : 0,
                          ease: "easeInOut"
                        }}
                      >
                        <tech.icon
                          className={`w-10 h-10 transition-all duration-500
                            ${isHighlighted(tech) ? 'text-primary' : 'text-foreground/70'}`}
                        />
                      </motion.div>

                      {/* Enhanced Glow Effect for Mastered Technologies */}
                      {tech.proficiency >= 4 && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-tr from-primary/50 to-purple-500/30 opacity-0 pointer-events-none"
                          animate={{
                            opacity: isHighlighted(tech) ? [0.2, 0.5, 0.2] : 0,
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut"
                          }}
                          style={{
                            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                            filter: "blur(15px)"
                          }}
                        />
                      )}

                      {/* Enhanced Learning Indicator */}
                      {tech.isLearning && (
                        <motion.div
                          className="absolute -right-2 -top-2 w-6 h-6 bg-gradient-to-br from-primary to-purple-500 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg"
                          animate={{
                            scale: [1, 1.2, 1],
                            boxShadow: [
                              "0 0 0 0 rgba(161, 103, 255, 0)",
                              "0 0 0 4px rgba(161, 103, 255, 0.3)",
                              "0 0 0 0 rgba(161, 103, 255, 0)",
                            ]
                          }}
                          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                        >
                          +
                        </motion.div>
                      )}
                    </motion.div>

                    {/* Proficiency Indicator - Only visible on hover or selection */}
                    <AnimatePresence>
                      {(isHighlighted(tech) || hoveredTech === tech.id) && (
                        <motion.div
                          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex gap-0.5"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.2 }}
                        >
                          {[1, 2, 3, 4, 5].map((level) => (
                            <motion.div
                              key={`${tech.id}-level-${level}`}
                              className={`h-1 w-1.5 rounded-full
                                ${level <= tech.proficiency ? 'bg-primary' : 'bg-primary/30'}`}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{
                                duration: 0.2,
                                delay: level * 0.05
                              }}
                            />
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Tech Name */}
                  <div className="text-center">
                    <motion.p
                      className={`font-medium text-sm mb-0.5
                        ${isHighlighted(tech) ? 'text-primary' : 'text-foreground'}`}
                    >
                      {tech.name}
                    </motion.p>

                    {/* Experience Years - visible when selected */}
                    <AnimatePresence>
                      {selectedTech === tech.id && (
                        <motion.p
                          className="text-xs text-muted-foreground"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                        >
                          {tech.years} {tech.years === 1 ? 'year' : 'years'} exp.
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Empty state if no technologies match filter */}
          {filteredTechnologies.length === 0 && (
            <motion.div
              className="flex flex-col items-center justify-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-muted-foreground">No technologies found for this category.</p>
              <motion.button
                onClick={() => setSelectedCategory(null)}
                className="mt-4 px-4 py-2 bg-primary/20 hover:bg-primary/30 rounded-full text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Show all technologies
              </motion.button>
            </motion.div>
          )}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center mt-8 gap-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-primary/80 rounded-full mr-2" />
            <span>Mastered</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-secondary/40 rounded-full mr-2" />
            <span>Proficient</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 border-2 border-primary/30 rounded-full mr-2" />
            <span>Currently Learning</span>
          </div>
        </div>
      </div>
    </section>
  );
}
