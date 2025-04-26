"use client";

import React from "react";
import { motion } from "framer-motion";
import { useHasMounted } from "@/hooks/useHasMounted";
import DiscordBotService from "./services/DiscordBotService";
import WebAppService from "./services/WebAppService";
import NativeAppService from "./services/NativeAppService";

export default function Services() {
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return null;
  }

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-4 relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Premium Services
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
            Specialized development services tailored to bring your digital vision to life with cutting-edge
            technology and exceptional design.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <DiscordBotService />
          <WebAppService />
          <NativeAppService />
        </div>
      </div>
    </section>
  );
}
