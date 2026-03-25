import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';

const ScrollBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      className="fixed left-0 right-0 z-[4000] bg-[#292A76] rounded-r-2xl top-15 md:top-17 lg:top-[4.5rem] xl:top-[4.8rem] h-[0.2vh]"
      style={{
        scaleX: scaleX,
        transformOrigin: '0%',
      }}
      transition={{
        duration: 0.5,
        ease: [0.68, -0.55, 0.27, 1.55],
      }}
    />
  );
};

export default ScrollBar;