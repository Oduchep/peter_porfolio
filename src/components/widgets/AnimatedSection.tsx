'use client';

import { useInView } from 'react-intersection-observer';
import { motion, Variants } from 'framer-motion';

type AnimationVariant =
  | 'fadeUp'
  | 'fadeDown'
  | 'fadeLeft'
  | 'fadeRight'
  | 'scaleIn'
  | 'fade';

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  variant?: AnimationVariant;
  className?: string;
  once?: boolean;
}

const variants: Record<AnimationVariant, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.93 },
    visible: { opacity: 1, scale: 1 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

const AnimatedSection = ({
  children,
  delay = 0,
  variant = 'fadeUp',
  className,
  once = true,
}: AnimatedSectionProps) => {
  const { ref, inView } = useInView({
    triggerOnce: once,
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px',
  });

  return (
    <motion.div
      ref={ref}
      variants={variants[variant]}
      initial='hidden'
      animate={inView ? 'visible' : 'hidden'}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
