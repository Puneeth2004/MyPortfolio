"use client";

import { useState, useEffect } from 'react';

interface TypingTextProps {
  text: string;
  speed?: number;
  className?: string;
}

export function TypingText({ text, speed = 100, className = '' }: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed]);

  return (
    <span className={className}>
      {/* Hidden full text for SEO and screen readers */}
      <span className="sr-only">{text}</span>
      
      {/* Visible typing animation */}
      <span aria-hidden="true" className="inline-block">
        {displayedText}
        {!isTypingComplete && (
          <span className="inline-block w-0.5 h-[0.9em] bg-current ml-0.5 animate-blink align-middle" />
        )}
      </span>
    </span>
  );
}
