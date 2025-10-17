"use client";

import React, { useEffect, useRef, useState } from "react";

type InfiniteHorizontalTextProps = {
  text: string;
  className?: string;
  speed?: number; // opcjonalnie: kontrola prędkości (sekundy)
};

export const InfiniteHorizontalText = ({
  text,
  className = "",
  speed = 20,
}: InfiniteHorizontalTextProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // ⏯️ Uruchamiaj animację tylko, gdy komponent jest widoczny
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`overflow-hidden bg-orangeKari text-white text-3xl font-bold py-2 relative ${className}`}
    >
      <div
        className={`flex will-change-transform [transform:translate3d(0,0,0)] ${
          isVisible ? "animate-infinite-scroll" : ""
        }`}
        style={{
          animationDuration: `${speed}s`, // ⏱️ kontrola prędkości
        }}
      >
        {/* Dwie powielone grupy dla płynnego loopa */}
        <div className="flex  min-w-full justify-around">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i}>{text}</span>
          ))}
        </div>
        <div className="flex  min-w-full justify-around">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i}>{text}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
