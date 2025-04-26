"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaServer, FaDatabase, FaMobileAlt, FaDesktop } from "react-icons/fa";
import { RiCodeSSlashLine } from "react-icons/ri";

export default function WebAppService() {
  const [isHovered, setIsHovered] = useState(false);
  const [viewMode, setViewMode] = useState("desktop"); // desktop, mobile, or code

  // Animation variants for code building
  const codeVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.15,
      },
    }),
  };

  // Simulated code that builds line by line
  const codeLines = [
    '<div className="header">',
    '  <nav className="navbar">',
    '    <Logo />',
    '    <Menu items={navItems} />',
    '  </nav>',
    '</div>',
    '',
    'function App() {',
    '  return (',
    '    <Layout>',
    '      <HeroSection />',
    '      <Features />',
    '      <Pricing />',
    '      <ContactForm />',
    '    </Layout>',
    '  );',
    '}',
  ];

  // Mobile UI elements
  const mobileUI = (
    <div className="flex flex-col h-full">
      <div className="bg-primary/30 text-white p-2 text-center text-xs">
        MyApp Mobile View
      </div>
      <div className="flex-1 overflow-hidden flex flex-col items-center p-2">
        <div className="w-full h-8 bg-primary/50 rounded-md mb-2 flex items-center justify-center">
          <span className="text-xs text-white">Mobile Header</span>
        </div>
        <div className="w-full h-24 bg-gray-700/50 rounded-md mb-2 flex items-center justify-center">
          <span className="text-xs text-white">Hero Banner</span>
        </div>
        <div className="w-full h-12 bg-gray-700/30 rounded-md mb-2"></div>
        <div className="grid grid-cols-2 gap-2 w-full mb-2">
          <div className="h-16 bg-gray-700/30 rounded-md"></div>
          <div className="h-16 bg-gray-700/30 rounded-md"></div>
        </div>
        <div className="w-full h-12 bg-gray-700/30 rounded-md mb-2"></div>
        <div className="w-full h-8 bg-primary/30 rounded-md mt-auto flex items-center justify-around">
          <motion.div
            className="w-6 h-6 flex items-center justify-center"
            whileHover={{ scale: 1.2 }}
          >🏠</motion.div>
          <motion.div
            className="w-6 h-6 flex items-center justify-center"
            whileHover={{ scale: 1.2 }}
          >👤</motion.div>
          <motion.div
            className="w-6 h-6 flex items-center justify-center"
            whileHover={{ scale: 1.2 }}
          >⚙️</motion.div>
        </div>
      </div>
    </div>
  );

  // Desktop UI elements
  const desktopUI = (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between bg-primary/30 p-2 mb-3 rounded">
        <div className="text-white text-sm font-bold">MyApp</div>
        <div className="flex space-x-3">
          {["Home", "Features", "Pricing", "Contact"].map((item) => (
            <motion.div
              key={item}
              className="text-white text-xs cursor-pointer"
              whileHover={{ scale: 1.1, color: "#a78bfa" }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-3">
        <div className="h-32 bg-gray-700/40 rounded flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-primary text-sm"
          >
            Hero Content
          </motion.div>
        </div>
        <div className="h-32 bg-gray-700/30 rounded flex items-center justify-center">
          <motion.div
            animate={{
              rotateY: [0, 360],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear"
            }}
            style={{ transformStyle: "preserve-3d" }}
            className="w-16 h-16 bg-primary/40 rounded"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-3">
        {[1, 2, 3].map((item) => (
          <motion.div
            key={item}
            className="h-16 bg-gray-700/30 rounded flex items-center justify-center"
            whileHover={{ y: -5, backgroundColor: "rgba(161, 103, 255, 0.2)" }}
          >
            <span className="text-xs text-white">Feature {item}</span>
          </motion.div>
        ))}
      </div>

      <div className="mt-auto h-8 bg-gray-800/60 rounded flex items-center justify-center">
        <span className="text-xs text-gray-400">© MyApp {new Date().getFullYear()}</span>
      </div>
    </div>
  );

  // Render current view based on the selected mode
  const renderCurrentView = () => {
    switch (viewMode) {
      case "mobile":
        return mobileUI;
      case "code":
        return (
          <div className="bg-gray-800 text-gray-300 p-3 rounded text-xs font-mono overflow-hidden h-full flex flex-col">
            {codeLines.map((line, i) => (
              <motion.div
                key={`code-line-${i}`}
                custom={i}
                initial="hidden"
                animate={isHovered ? "visible" : "hidden"}
                variants={codeVariants}
                className="whitespace-pre"
              >
                {line.startsWith(' ') ? (
                  <><span className="text-gray-500">·{line.substring(1)}</span></>
                ) : (
                  <>{line}</>
                )}
              </motion.div>
            ))}
          </div>
        );
      default: // desktop
        return desktopUI;
    }
  };

  return (
    <motion.div
      className="relative h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <motion.div
        className="bg-secondary/40 backdrop-blur-sm border border-secondary rounded-xl overflow-hidden h-full shadow-lg"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Service Header with Browser-style UI */}
        <div className="bg-primary/20 p-4 relative">
          <div className="flex items-center">
            <div className="mr-3 bg-primary/80 p-2 rounded-full">
              <FaLaptopCode className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold">Web App Development</h3>
          </div>

          {/* Browser UI Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary/50" />
        </div>

        {/* Service Content */}
        <div className="p-6">
          <p className="text-muted-foreground mb-6">
            Modern, responsive web applications built with the latest technologies and frameworks for exceptional
            user experiences across all devices.
          </p>

          {/* Browser Frame with Responsive Showcase */}
          <div className="border border-gray-700 rounded-md mb-6 overflow-hidden">
            {/* Browser Chrome */}
            <div className="bg-gray-800 px-4 py-2 flex items-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 mx-2">
                <div className="bg-gray-700 rounded h-6 flex items-center px-3 text-xs text-gray-400">
                  <span>https://</span>
                  <span className="text-green-400">myapp</span>
                  <span>.example.com</span>
                  {viewMode === "mobile" && (
                    <span className="ml-2 text-primary">(Mobile View)</span>
                  )}
                </div>
              </div>
            </div>

            {/* Browser Content with Transition Effects */}
            <div
              className={`bg-gray-100 dark:bg-gray-900 p-4 overflow-hidden ${
                viewMode === "mobile" ? "h-72" : "h-64"
              }`}
            >
              <motion.div
                className={`h-full ${viewMode === "mobile" ? "max-w-[240px] mx-auto" : "w-full"}`}
                transition={{ duration: 0.5 }}
              >
                {renderCurrentView()}
              </motion.div>
            </div>

            {/* Responsive Control Buttons */}
            <div className="bg-gray-800 px-4 py-2 flex justify-center space-x-6">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setViewMode("mobile")}
                className={`flex items-center space-x-1 cursor-pointer ${
                  viewMode === "mobile" ? "text-primary" : "text-gray-400 hover:text-primary"
                }`}
              >
                <FaMobileAlt size={14} />
                <span className="text-xs">Mobile</span>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setViewMode("desktop")}
                className={`flex items-center space-x-1 cursor-pointer ${
                  viewMode === "desktop" ? "text-primary" : "text-gray-400 hover:text-primary"
                }`}
              >
                <FaDesktop size={14} />
                <span className="text-xs">Desktop</span>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setViewMode("code")}
                className={`flex items-center space-x-1 cursor-pointer ${
                  viewMode === "code" ? "text-primary" : "text-gray-400 hover:text-primary"
                }`}
              >
                <RiCodeSSlashLine size={14} />
                <span className="text-xs">Code</span>
              </motion.div>
            </div>
          </div>

          {/* Feature List */}
          <ul className="space-y-3 text-foreground">
            <li className="flex items-center">
              <div className="mr-3 text-primary">
                <FaLaptopCode className="w-5 h-5" />
              </div>
              <span>Responsive & cross-browser compatible designs</span>
            </li>
            <li className="flex items-center">
              <div className="mr-3 text-primary">
                <FaServer className="w-5 h-5" />
              </div>
              <span>Full-stack development with modern frameworks</span>
            </li>
            <li className="flex items-center">
              <div className="mr-3 text-primary">
                <FaDatabase className="w-5 h-5" />
              </div>
              <span>Database design and API integration</span>
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}
