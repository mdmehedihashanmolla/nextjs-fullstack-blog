"use client";
import { motion } from "framer-motion";
import React from "react";

const LoadingArticle = () => {
  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.5, duration: 1, ease: "easeOut" },
    },
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 h-screen w-screen flex items-center justify-center">
      <motion.div
        className="flex flex-col items-center justify-center space-y-6"
        initial="initial"
        animate="animate"
      >
        <motion.div
          className="w-24 h-24 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-full 
            shadow-2xl flex items-center justify-center relative"
          variants={floatingVariants}
          animate="animate"
          initial="initial"
        >
          <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-pulse" />

          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-2 h-2 rounded-full ${
                i % 2 === 0 ? "bg-blue-300" : "bg-indigo-300"
              } shadow-sm`}
              style={{
                x: Math.cos((i * 90 * Math.PI) / 180) * 50,
                y: Math.sin((i * 90 * Math.PI) / 180) * 50,
              }}
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                delay: i * 0.3,
                repeat: Infinity,
              }}
            />
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <h1 className="text-3xl font-bold text-indigo-900">Welcome</h1>
          <p className="text-indigo-600 mt-2">Loading your experience...</p>
        </motion.div>

        <motion.div
          className="w-48 h-1.5 bg-indigo-200 rounded-full overflow-hidden"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.div
            className="h-full bg-indigo-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoadingArticle;
