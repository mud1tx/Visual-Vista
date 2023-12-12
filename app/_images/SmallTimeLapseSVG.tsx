import React from 'react';
import { motion } from 'framer-motion';

const SVGComponent = () => (
  <motion.svg
    width={52}
    height={62}
    viewBox="0 0 52 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className="timer"
    aria-hidden="true"
  > 
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M29.2532 28.1943C27.7212 29.751 27.7212 32.249 29.2532 33.8057L50.3023 55.1943C52.7911 57.7232 50.9996 62 47.4513 62H26H4.54865C1.00044 62 -0.79113 57.7232 1.69768 55.1943L22.7468 33.8057C24.2788 32.249 24.2788 29.7511 22.7468 28.1943L1.69769 6.80572C-0.791119 4.27676 1.00044 5.24575e-07 4.54865 8.34769e-07L26 2.71011e-06L47.4514 4.58544e-06C50.9996 4.89564e-06 52.7911 4.27676 50.3023 6.80572L29.2532 28.1943Z"
      fill="url(#paint0_linear_2080_57096)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M29.2532 28.1943C27.7212 29.751 27.7212 32.249 29.2532 33.8057L50.3023 55.1943C52.7911 57.7232 50.9996 62 47.4513 62H26H4.54865C1.00044 62 -0.79113 57.7232 1.69768 55.1943L22.7468 33.8057C24.2788 32.249 24.2788 29.7511 22.7468 28.1943L1.69769 6.80572C-0.791119 4.27676 1.00044 5.24575e-07 4.54865 8.34769e-07L26 2.71011e-06L47.4514 4.58544e-06C50.9996 4.89564e-06 52.7911 4.27676 50.3023 6.80572L29.2532 28.1943Z"
      fill="url(#pattern-home-animate-timer-0)"
    />
    <defs>
      <pattern
        id="pattern-home-animate-timer-0"
        patternContentUnits="objectBoundingBox"
        width={8.06452}
        height={8.06452}
      >
        <use xlinkHref="#svg-noise" transform="scale(0.016129)" />
      </pattern>
      <linearGradient
        id="paint0_linear_2080_57096"
        x1={-7.77612}
        y1={17.8134}
        x2={63.2463}
        y2={31}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.0242443} stopColor="#EDBEFF" />
        <stop offset={0.84375} stopColor="#8E78DA" />
      </linearGradient>
    </defs>
  </motion.svg>
);
export default SVGComponent;
