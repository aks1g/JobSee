import { motion } from 'framer-motion';
import React from 'react';

const Logo = () => {
  const letterVariants = {
    hidden: { y: 0 },
    visible: { 
      y: [0, -10, 0],  // Bounce effect for each letter
      transition: { 
        duration: 0.5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut"
      },
    },
  };

  const letters = ["J", "o", "b", "S", "e", "e"];

  return (
    <motion.div
      className="text-3xl font-bold flex space-x-1 cursor-pointer"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.2 }}  // Stagger bounce for each letter
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          style={letter === "S" || letter === "e" ? { color: "red" } : {}}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default Logo;