"use client";

import React from "react";

type InfiniteHorizontalTextProps = {
  text: string;
  className?: string;
};

export const InfiniteHorizontalText = ({
  text,
  className,
}: InfiniteHorizontalTextProps) => {
  const repeatCount = 25;

  return (
    <div
      className={`overflow-hidden bg-orangeKari text-4xl font-bold text-white py-4 group ${className}`}
    >
      {/* Pierwsza warstwa */}
      <div className="flex animate-marquee whitespace-nowrap gap-10">
        {Array.from({ length: repeatCount }).map((_, i) => (
          <span key={`marquee1-${i}`}>{text}</span>
        ))}
      </div>
    </div>
  );
};
