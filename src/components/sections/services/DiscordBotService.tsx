"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaDiscord, FaCode, FaRobot, FaUserCircle, FaCog, FaPlus, FaHashtag, FaVolumeUp } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";
import { IoMdSend } from "react-icons/io";

export default function DiscordBotService() {
  const [isHovered, setIsHovered] = useState(false);
  const [typingText, setTypingText] = useState("");
  const [showTyping, setShowTyping] = useState(false);
  const [messages, setMessages] = useState([]);
  const [activeView, setActiveView] = useState("general");
  const [showBotResponse, setShowBotResponse] = useState(false);
  const [cmdInput, setCmdInput] = useState("");

  // Simulated Discord channels
  const channels = [
    { id: "general", name: "general", type: "text" },
    { id: "bot-commands", name: "bot-commands", type: "text" },
    { id: "announcements", name: "announcements", type: "text" },
  ];

  // Simulated commands and responses
  const botCommands = {
    "!help": {
      title: "Available Commands",
      response: [
        { command: "!help", description: "Shows this menu" },
        { command: "!stats", description: "Server statistics" },
        { command: "!mod", description: "Moderation tools" },
        { command: "!play", description: "Play music" },
      ]
    },
    "!stats": {
      title: "Server Stats",
      response: [
        { stat: "Members", value: "1,234" },
        { stat: "Online", value: "356" },
        { stat: "Channels", value: "28" },
        { stat: "Uptime", value: "99.9%" },
      ]
    },
    "!mod": {
      title: "Moderation Tools",
      response: [
        { command: "!ban", description: "Ban a user" },
        { command: "!kick", description: "Kick a user" },
        { command: "!mute", description: "Mute a user" },
        { command: "!clear", description: "Clear messages" },
      ]
    }
  };

  const handleCommand = (cmd) => {
    // Add user message
    setMessages(prev => [...prev, {
      id: Date.now(),
      user: "User",
      avatar: "JD",
      content: cmd,
      time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    }]);

    // Set typing indicator
    setShowTyping(true);

    // Delayed bot response
    setTimeout(() => {
      setShowTyping(false);
      setShowBotResponse(true);

      // Add bot response
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        user: "MyBot",
        avatar: "bot",
        content: cmd,
        isBot: true,
        command: cmd.toLowerCase(),
        time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
      }]);
    }, 1000);
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    if (cmdInput.trim()) {
      handleCommand(cmdInput);
      setCmdInput("");
    }
  };

  // Trigger simulated interaction when hovered
  useEffect(() => {
    if (isHovered && messages.length === 0) {
      handleCommand("!help");
    }
  }, [isHovered]);

  return (
    <motion.div
      className="relative h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="bg-secondary/40 backdrop-blur-sm border border-secondary rounded-xl overflow-hidden h-full shadow-lg"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Service Header with Discord-style UI */}
        <div className="bg-primary/20 p-4 relative">
          <div className="flex items-center">
            <div className="mr-3 bg-primary/80 p-2 rounded-full">
              <SiDiscord className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold">Discord Bot Development</h3>
          </div>

          {/* Discord UI Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary/50" />
        </div>

        {/* Service Content */}
        <div className="p-6">
          <p className="text-muted-foreground mb-6">
            Custom Discord bots with powerful features to enhance your community experience,
            moderation capabilities, and engagement.
          </p>

          {/* Discord-inspired UI with more interactive elements */}
          <div className="bg-[#36393f] rounded-md mb-6 overflow-hidden w-full">
            {/* Discord App UI */}
            <div className="flex h-[280px]">
              {/* Sidebar - Channel List */}
              <div className="bg-[#2f3136] w-1/4 min-w-[100px] flex flex-col">
                <div className="bg-[#202225] px-3 py-2 text-white font-semibold flex items-center justify-between">
                  <div className="truncate text-sm">Dev Server</div>
                  <motion.div
                    whileHover={{ rotate: 90 }}
                    className="text-gray-400 cursor-pointer"
                  >
                    <FaCog size={14} />
                  </motion.div>
                </div>
                <div className="p-2 flex-1 overflow-y-auto">
                  {channels.map(channel => (
                    <motion.div
                      key={channel.id}
                      className={`flex items-center py-1 px-2 rounded cursor-pointer mb-1 ${activeView === channel.id ? 'bg-[#42464D] text-white' : 'text-gray-400 hover:text-gray-300 hover:bg-[#42464D]/50'}`}
                      onClick={() => setActiveView(channel.id)}
                      whileHover={{ x: 2 }}
                    >
                      {channel.type === "text" ? (
                        <FaHashtag size={12} className="mr-1 flex-shrink-0" />
                      ) : (
                        <FaVolumeUp size={12} className="mr-1 flex-shrink-0" />
                      )}
                      <span className="text-sm truncate">{channel.name}</span>
                    </motion.div>
                  ))}

                  <motion.div
                    className="flex items-center py-1 px-2 text-gray-400 hover:text-gray-300 cursor-pointer mt-2"
                    whileHover={{ x: 2, color: '#a78bfa' }}
                  >
                    <FaPlus size={10} className="mr-1" />
                    <span className="text-xs">Add Channel</span>
                  </motion.div>
                </div>

                {/* User Area */}
                <div className="bg-[#292b2f] p-2 flex items-center mt-auto">
                  <FaUserCircle className="text-primary mr-2" size={20} />
                  <div className="text-white text-sm font-medium">You</div>
                </div>
              </div>

              {/* Chat Area */}
              <div className="flex-1 flex flex-col">
                {/* Channel Header */}
                <div className="bg-[#36393f] border-b border-[#202225] px-4 py-2 flex items-center">
                  <FaHashtag className="text-gray-400 mr-2" size={14} />
                  <span className="font-semibold text-white">
                    {channels.find(c => c.id === activeView)?.name || "general"}
                  </span>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.length === 0 && (
                    <div className="text-gray-400 text-center text-sm mt-4">
                      Try sending a command like <span className="text-green-400">!help</span>
                    </div>
                  )}

                  {messages.map(msg => (
                    <div key={msg.id} className="flex items-start">
                      <div className={`w-8 h-8 rounded-full ${msg.isBot ? 'bg-[#5865F2]' : 'bg-primary/80'} mr-3 flex items-center justify-center text-white`}>
                        {msg.isBot ? <FaRobot className="text-white text-sm" /> : msg.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center">
                          <span className="font-medium text-white mr-2">{msg.user}</span>
                          <span className="text-xs text-gray-400">{msg.time}</span>
                        </div>

                        {/* Regular message */}
                        {!msg.isBot && (
                          <div className="text-white mt-1 flex items-center">
                            <span className="text-green-400 mr-1">!</span>
                            <motion.span
                              animate={{ color: ['#ffffff', '#a78bfa', '#ffffff'] }}
                              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                            >
                              {msg.content.substring(1)}
                            </motion.span>
                          </div>
                        )}

                        {/* Bot response */}
                        {msg.isBot && botCommands[msg.content] && (
                          <motion.div
                            className="mt-1 p-3 bg-[#2f3136] rounded-md border-l-4 border-primary"
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <h4 className="text-white font-medium mb-2">{botCommands[msg.content].title}</h4>
                            <ul className="text-gray-300 text-sm space-y-1">
                              {botCommands[msg.content].response.map((item, i) => (
                                <motion.li
                                  key={i}
                                  className="flex items-center"
                                  initial={{ opacity: 0, x: -5 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: 0.1 * i }}
                                >
                                  {item.command ? (
                                    <>
                                      <span className="text-primary mr-2">!</span>
                                      {item.command} - {item.description}
                                    </>
                                  ) : (
                                    <>
                                      <span className="text-primary mr-2">•</span>
                                      <span className="font-medium">{item.stat}</span>: {item.value}
                                    </>
                                  )}
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  ))}

                  {/* Typing indicator */}
                  {showTyping && (
                    <div className="flex items-center text-xs text-gray-400 mt-2">
                      <span className="mr-1">MyBot is typing</span>
                      <motion.div
                        className="flex space-x-1"
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <span>•</span>
                        <span>•</span>
                        <span>•</span>
                      </motion.div>
                    </div>
                  )}
                </div>

                {/* Message Input */}
                <form
                  onSubmit={handleInputSubmit}
                  className="bg-[#40444b] m-4 rounded-lg flex items-center p-2"
                >
                  <input
                    type="text"
                    value={cmdInput}
                    onChange={(e) => setCmdInput(e.target.value)}
                    placeholder="Try !help, !stats or !mod"
                    className="bg-transparent flex-1 text-white outline-none text-sm px-2"
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-white p-1"
                  >
                    <IoMdSend size={18} />
                  </motion.button>
                </form>
              </div>
            </div>
          </div>

          {/* Feature List */}
          <ul className="space-y-3 text-foreground">
            <li className="flex items-center">
              <div className="mr-3 text-primary">
                <FaDiscord className="w-5 h-5" />
              </div>
              <span>Custom command & events integration</span>
            </li>
            <li className="flex items-center">
              <div className="mr-3 text-primary">
                <FaCode className="w-5 h-5" />
              </div>
              <span>Discord.js & Discord API expertise</span>
            </li>
            <li className="flex items-center">
              <div className="mr-3 text-primary">
                <FaRobot className="w-5 h-5" />
              </div>
              <span>AI & database integration options</span>
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}
