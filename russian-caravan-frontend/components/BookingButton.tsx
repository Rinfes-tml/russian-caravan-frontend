'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const BookingButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
        isHovered ? 'bg-gold-light' : 'bg-gold'
      } text-cream transition-colors`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => console.log('Booking button clicked')}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-5 h-5"
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