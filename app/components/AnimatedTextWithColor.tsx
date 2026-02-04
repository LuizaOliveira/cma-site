'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap-trial/SplitText';

interface AnimatedTextWithColorProps {
  text: string;
  highlightText: string;
  className?: string;
  highlightClassName?: string;
  delay?: number;
}

export function AnimatedTextWithColor({ 
  text, 
  highlightText,
  className = '', 
  highlightClassName = '',
  delay = 0 
}: AnimatedTextWithColorProps) {
  const textRef = useRef<HTMLHeadingElement>(null);
  const splitRef = useRef<SplitText | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(SplitText);
    }
  }, []);

  useEffect(() => {
    if (!textRef.current) return;

    // Create split text
    splitRef.current = new SplitText(textRef.current, { type: 'chars' });

    // Animate characters
    gsap.from(splitRef.current.chars, {
      x: 150,
      opacity: 0,
      duration: 0.7,
      ease: 'power4',
      stagger: 0.04,
      delay: delay,
    });

    // Cleanup
    return () => {
      if (splitRef.current) {
        splitRef.current.revert();
      }
    };
  }, [text, highlightText, delay]);

  return (
    <h2 ref={textRef} className={className}>
      {text} <span className={highlightClassName}>{highlightText}</span>
    </h2>
  );
}
