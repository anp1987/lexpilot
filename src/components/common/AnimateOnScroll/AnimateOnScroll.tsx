import { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface AnimateOnScrollProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  className?: string;
  variant?: 'fade' | 'slide' | 'scale' | 'slideScale';
}

export default function AnimateOnScroll({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.5,
  className,
  variant = 'slide',
}: AnimateOnScrollProps) {
  const shouldReduceMotion = useReducedMotion();

  const directionOffset = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 },
    none: {},
  };

  const variants = {
    fade: { initial: { opacity: 0 }, animate: { opacity: 1 } },
    slide: { initial: { opacity: 0, ...directionOffset[direction] }, animate: { opacity: 1, x: 0, y: 0 } },
    scale: { initial: { opacity: 0, scale: 0.92 }, animate: { opacity: 1, scale: 1 } },
    slideScale: { initial: { opacity: 0, scale: 0.95, ...directionOffset[direction] }, animate: { opacity: 1, scale: 1, x: 0, y: 0 } },
  };

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={variants[variant].initial}
      whileInView={variants[variant].animate}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}
