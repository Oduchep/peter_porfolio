'use client';

import { MotionConfig } from 'framer-motion';
import { ReactNode } from 'react';

// Turns off movement animations for visitors who ask for reduced motion.
const MotionProvider = ({ children }: { children: ReactNode }) => (
  <MotionConfig reducedMotion='user'>{children}</MotionConfig>
);

export default MotionProvider;
