'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const BookingButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      className={`fixed bottom-8 right-8 z-50 px-6 py-3 rounded-full shadow-lg transition-all duration-300 flex items-center space-x-2 ${
        isHovered ? 'bg-black text-white' : 'bg-white text-black'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => console.log('Opening booking form...')}
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      <span>Забронировать тур</span>
    </motion.button>
  );
};

export default BookingButton; 