import React, { useRef } from 'react';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';

interface CharacterProps {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

const Character: React.FC<CharacterProps> = ({ char, index, total, progress }) => {
  // Scale each character's visual active window along the overall scroll timeline
  const start = index / total;
  // Create a small overlap or sequence window
  const end = Math.min(1, (index + 2) / total); // using +2 or +1 to create smooth flow
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block">
      {/* Invisible placeholder maintains layout flow */}
      <span className="opacity-0">{char === ' ' ? '\u00A0' : char}</span>
      {/* Absolute positioned, opacity animated span */}
      <motion.span style={{ opacity }} className="absolute left-0 top-0 select-none">
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  );
};

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  // useScroll targets the paragraph container with start 80% screen and end 20% screen
  const { scrollYProgress } = useScroll({
    target: paragraphRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  const totalChars = text.length;
  let charAccumulator = 0;

  return (
    <p ref={paragraphRef} className={`${className} flex flex-wrap justify-center`}>
      {words.map((word, wordIdx) => {
        const wordChars = word.split('');
        const startCharIndex = charAccumulator;
        charAccumulator += wordChars.length + 1; // Increment for letters and space

        return (
          <span key={wordIdx} className="inline-block whitespace-nowrap mr-[0.25em]">
            {wordChars.map((char, charIdx) => {
              const idx = startCharIndex + charIdx;
              return (
                <Character
                  key={charIdx}
                  char={char}
                  index={idx}
                  total={totalChars}
                  progress={scrollYProgress}
                />
              );
            })}
          </span>
        );
      })}
    </p>
  );
};
