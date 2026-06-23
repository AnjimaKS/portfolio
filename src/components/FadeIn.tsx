import React from 'react';
import { motion } from 'framer-motion';

interface FadeInProps {
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = 'div',
  children,
  className = '',
  id,
}) => {
  // motion.create() allows us to dynamically create custom motion components
  const MotionComponent = motion.create(as);

  return (
    <MotionComponent
      id={id}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{
        delay,
        duration,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
};
