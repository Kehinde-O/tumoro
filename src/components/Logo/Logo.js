import React from 'react';
import { motion } from 'framer-motion';
import styles from './Logo.module.css';

const Logo = ({ size = 'medium' }) => {
  const logoVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case 'small': return styles.small;
      case 'large': return styles.large;
      default: return styles.medium;
    }
  };

  return (
    <motion.div 
      className={`${styles.logo} ${getSizeClass()}`}
      variants={logoVariants}
      whileHover="hover"
    >
      <svg 
        viewBox="0 0 60 60" 
        className={styles.logoSvg}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Circle with African Pattern */}
        <defs>
          <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C65D00" />
            <stop offset="50%" stopColor="#F4A261" />
            <stop offset="100%" stopColor="#2D5016" />
          </linearGradient>
          
          <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F4A261" />
            <stop offset="100%" stopColor="#C65D00" />
          </linearGradient>

          {/* African Pattern */}
          <pattern id="africanPattern" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
            <circle cx="4" cy="4" r="1" fill="rgba(255,255,255,0.1)" />
          </pattern>
        </defs>

        {/* Main Circle Background */}
        <circle 
          cx="30" 
          cy="30" 
          r="28" 
          fill="url(#primaryGradient)"
          className={styles.mainCircle}
        />
        
        {/* African Pattern Overlay */}
        <circle 
          cx="30" 
          cy="30" 
          r="28" 
          fill="url(#africanPattern)"
          opacity="0.3"
        />

        {/* Stylized "T" Letter */}
        <g className={styles.letterT}>
          {/* Horizontal bar of T */}
          <rect 
            x="15" 
            y="18" 
            width="30" 
            height="6" 
            rx="3"
            fill="#FAF7F2"
          />
          
          {/* Vertical bar of T */}
          <rect 
            x="27" 
            y="18" 
            width="6" 
            height="24" 
            rx="3"
            fill="#FAF7F2"
          />
          
          {/* African-inspired decorative elements */}
          <circle cx="20" cy="21" r="2" fill="url(#accentGradient)" />
          <circle cx="40" cy="21" r="2" fill="url(#accentGradient)" />
          <circle cx="30" cy="35" r="2" fill="url(#accentGradient)" />
        </g>

        {/* Subtle highlight */}
        <circle 
          cx="25" 
          cy="25" 
          r="8" 
          fill="rgba(255,255,255,0.15)"
          className={styles.highlight}
        />
      </svg>
    </motion.div>
  );
};

export default Logo; 