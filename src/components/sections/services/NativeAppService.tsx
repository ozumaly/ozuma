"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMobileAlt, FaApple, FaAndroid, FaReact } from "react-icons/fa";
import { SiFlutter, SiSwift, SiKotlin } from "react-icons/si";

interface TicTacToeSquare {
  id: number;
  value: string | null;
}

export default function NativeAppService() {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Tic-Tac-Toe state
  const [board, setBoard] = useState<TicTacToeSquare[]>(Array(9).fill(null).map((_, i) => ({ id: i, value: null })));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState<string | null>(null);
  const [winningLine, setWinningLine] = useState<number[] | null>(null);
  const [isGameActive, setIsGameActive] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [showGameMenu, setShowGameMenu] = useState(false);
  const [aiThinking, setAiThinking] = useState(false);

  // Game statistics
  const [stats, setStats] = useState({
    playerWins: 0,
    aiWins: 0,
    draws: 0,
  });

  const winningPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6]            // diagonals
  ];

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      setMousePosition({ x, y });
    }
  };

  // Platform compatibility icons
  const platforms = [
    { icon: FaApple, name: "iOS", color: "text-gray-300" },
    { icon: FaAndroid, name: "Android", color: "text-green-400" },
    { icon: FaReact, name: "React Native", color: "text-blue-500" },
  ];

  // App features for display
  const features = [
    { name: "Offline Support", description: "Full functionality even without internet connection" },
    { name: "Push Notifications", description: "Real-time alerts and user engagement features" },
    { name: "Native APIs", description: "Access to device camera, location, and other native features" },
    { name: "Responsive UI", description: "Beautiful interfaces that work across device sizes" },
  ];

  // Handle game logic and AI moves
  useEffect(() => {
    if (!gameStarted) return;

    // Check for winner
    const checkForWinner = () => {
      for (const pattern of winningPatterns) {
        const [a, b, c] = pattern;
        if (
          board[a].value &&
          board[a].value === board[b].value &&
          board[a].value === board[c].value
        ) {
          setWinner(board[a].value);
          setWinningLine(pattern);
          setIsGameActive(false);

          // Update stats
          if (board[a].value === 'X') {
            setStats(prev => ({...prev, playerWins: prev.playerWins + 1}));
          } else {
            setStats(prev => ({...prev, aiWins: prev.aiWins + 1}));
          }
          return true;
        }
      }

      // Check for draw
      if (board.every(square => square.value !== null)) {
        setWinner('draw');
        setIsGameActive(false);
        setStats(prev => ({...prev, draws: prev.draws + 1}));
        return true;
      }

      return false;
    };

    const hasWinner = checkForWinner();

    // AI Move
    if (!hasWinner && !isXNext && isGameActive) {
      makeAiMove();
    }
  }, [board, isXNext, gameStarted, isGameActive]);

  const makeAiMove = () => {
    if (!isGameActive) return;

    setAiThinking(true);

    // Add a small delay to simulate thinking
    setTimeout(() => {
      const emptySquares = board
        .map((square, index) => ({ index, value: square.value }))
        .filter(square => square.value === null);

      if (emptySquares.length > 0) {
        const randomIndex = Math.floor(Math.random() * emptySquares.length);
        const aiMove = emptySquares[randomIndex].index;

        const newBoard = [...board];
        newBoard[aiMove] = { id: aiMove, value: 'O' };
        setBoard(newBoard);
        setIsXNext(true);
      }

      setAiThinking(false);
    }, 500);
  };

  const handleSquareClick = (index: number) => {
    if (!isGameActive || board[index].value || winner || aiThinking) return;

    const newBoard = [...board];
    newBoard[index] = { id: index, value: isXNext ? 'X' : 'O' };
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const startNewGame = () => {
    setBoard(Array(9).fill(null).map((_, i) => ({ id: i, value: null })));
    setWinner(null);
    setWinningLine(null);
    setIsXNext(true);
    setIsGameActive(true);
    setGameStarted(true);
    setShowGameMenu(false);
  };

  const openGameMenu = () => {
    setShowGameMenu(true);
  };

  return (
    <motion.div
      className="relative h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <motion.div
        ref={containerRef}
        className="bg-secondary/40 backdrop-blur-sm border border-secondary rounded-xl overflow-hidden h-full shadow-lg"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
      >
        {/* Service Header with Mobile-style UI */}
        <div className="bg-primary/20 p-4 relative">
          <div className="flex items-center">
            <div className="mr-3 bg-primary/80 p-2 rounded-full">
              <FaMobileAlt className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold">Native App Development</h3>
          </div>

          {/* Mobile UI Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary/50" />
        </div>

        {/* Service Content */}
        <div className="p-6">
          <p className="text-muted-foreground mb-6">
            High-performance native mobile applications for iOS and Android platforms, delivering
            seamless user experiences with device-specific features.
          </p>

          {/* 3D Device Frame */}
          <div className="mb-6 relative flex justify-center">
            <motion.div
              className="w-48 h-96 bg-black rounded-3xl overflow-hidden border-8 border-gray-800 shadow-xl"
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
                transform: isHovered
                  ? `rotateY(${mousePosition.x * 10}deg) rotateX(${-mousePosition.y * 10}deg)`
                  : "rotateY(0deg) rotateX(0deg)",
                transition: "transform 0.2s ease-out",
              }}
            >
              {/* Device Notch */}
              <div className="h-5 w-24 bg-black absolute top-0 left-1/2 transform -translate-x-1/2 z-10 rounded-b-xl" />

              {/* App Screen - TicTacToe Game */}
              <div className="w-full h-full bg-gradient-to-br from-purple-900 via-primary/30 to-blue-900 p-3 relative">
                {/* App Header */}
                <div className="flex justify-between items-center mb-4">
                  <motion.div
                    className="h-2 w-12 bg-white/50 rounded"
                    animate={{
                      width: isHovered ? [12, 48, 12] : 12,
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />
                  <div className="flex space-x-1">
                    <motion.div
                      className="h-4 w-4 rounded-full bg-white/50"
                      animate={{
                        opacity: isHovered ? [0.5, 1, 0.5] : 0.5,
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    />
                  </div>
                </div>

                {/* Game Area */}
                <div className="flex flex-col items-center">
                  <motion.div
                    className="text-white text-xs font-bold mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {!gameStarted && "uff"}
                    {gameStarted && !winner && (isXNext ? "Your Turn" : "AI Thinking...")}
                    {winner === 'X' && "You Win! 🎉"}
                    {winner === 'O' && "AI Wins! 🤖"}
                    {winner === 'draw' && "It's a Draw! 🤝"}
                  </motion.div>

                  {/* Game Stats */}
                  {gameStarted && (
                    <motion.div
                      className="flex justify-between w-full text-[7px] text-white/70 mb-2"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <span>You: {stats.playerWins}</span>
                      <span>Draws: {stats.draws}</span>
                      <span>AI: {stats.aiWins}</span>
                    </motion.div>
                  )}

                  {/* Game Board or Menu */}
                  {!gameStarted && !showGameMenu ? (
                    <motion.button
                      className="bg-primary/40 hover:bg-primary/60 text-white text-xs py-1 px-3 rounded-full mb-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={openGameMenu}
                    >
                      Play Game
                    </motion.button>
                  ) : showGameMenu ? (
                    <motion.div
                      className="bg-black/30 backdrop-blur-sm p-3 rounded-lg w-full"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-white text-xs font-bold mb-3 text-center">Tic-Tac-Toe</div>
                      <div className="flex flex-col space-y-2">
                        <motion.button
                          className="bg-primary/40 hover:bg-primary/60 text-white text-xs py-1 px-3 rounded-lg"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={startNewGame}
                        >
                          New Game
                        </motion.button>
                        <motion.button
                          className="bg-black/30 hover:bg-black/40 text-white text-xs py-1 px-3 rounded-lg"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setShowGameMenu(false)}
                        >
                          Cancel
                        </motion.button>
                      </div>
                    </motion.div>
                  ) : (
                    <div className="relative">
                      {/* Game Board */}
                      <div className="grid grid-cols-3 gap-1 bg-black/20 p-1 rounded-lg">
                        {board.map((square, index) => (
                          <motion.button
                            key={square.id}
                            className={`w-12 h-12 bg-black/30 rounded-md flex items-center justify-center text-lg font-bold
                              ${winningLine?.includes(index) ? 'bg-primary/40' : ''}
                              ${!isGameActive ? 'cursor-default' : 'hover:bg-black/40'}`}
                            onClick={() => handleSquareClick(index)}
                            whileHover={isGameActive && !square.value ? { scale: 1.05 } : {}}
                            whileTap={isGameActive && !square.value ? { scale: 0.95 } : {}}
                          >
                            <AnimatePresence mode="wait">
                              {square.value && (
                                <motion.span
                                  key={`${index}-${square.value}`}
                                  initial={{ scale: 0, opacity: 0 }}
                                  animate={{ scale: 1, opacity: 1 }}
                                  exit={{ scale: 0, opacity: 0 }}
                                  className={`text-lg ${square.value === 'X' ? 'text-blue-400' : 'text-red-400'}`}
                                >
                                  {square.value}
                                </motion.span>
                              )}
                            </AnimatePresence>
                          </motion.button>
                        ))}
                      </div>

                      {/* AI Thinking Indicator */}
                      {aiThinking && (
                        <motion.div
                          className="absolute -bottom-3 left-0 right-0 flex justify-center"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <div className="flex space-x-1">
                            {[0, 1, 2].map((dot) => (
                              <motion.div
                                key={`thinking-dot-${dot}`}
                                className="w-1.5 h-1.5 bg-primary rounded-full"
                                animate={{
                                  y: [0, -3, 0],
                                }}
                                transition={{
                                  duration: 0.6,
                                  repeat: Number.POSITIVE_INFINITY,
                                  delay: dot * 0.2,
                                }}
                              />
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  )}

                  {/* Game Controls */}
                  {gameStarted && (
                    <div className="mt-3 flex space-x-2">
                      <motion.button
                        className="bg-black/30 text-white text-[8px] py-1 px-2 rounded-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={startNewGame}
                      >
                        New Game
                      </motion.button>
                      <motion.button
                        className="bg-black/30 text-white text-[8px] py-1 px-2 rounded-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          setGameStarted(false);
                          setShowGameMenu(false);
                        }}
                      >
                        Exit
                      </motion.button>
                    </div>
                  )}
                </div>

                {/* App Navigation */}
                <div className="absolute bottom-3 left-0 right-0 flex justify-center">
                  <div className="flex space-x-1">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={`nav-dot-${i}`}
                        className="h-1 w-1 rounded-full bg-white/50"
                        animate={isHovered && i === 1 ? { opacity: [0.5, 1, 0.5] } : {}}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Platform Compatibility */}
          <div className="mb-6">
            <h4 className="text-sm text-foreground font-medium mb-3">Platform Compatibility</h4>
            <div className="flex justify-between">
              {platforms.map((platform, i) => (
                <motion.div
                  key={`platform-${platform.name}`}
                  className="flex flex-col items-center"
                  whileHover={{ y: -3 }}
                >
                  <div className={`${platform.color} mb-2`}>
                    <platform.icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs text-muted-foreground">{platform.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="bg-black/20 rounded-lg p-3">
            <h4 className="text-sm text-foreground font-medium mb-1">Technologies Used</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded">Swift</span>
              <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded">Kotlin</span>
              <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded">React Native</span>
              <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded">Firebase</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
