"use client";

import React from "react";
import { motion } from "framer-motion";
import { Fredoka } from "next/font/google";

const fredoka = Fredoka({
  variable: "--font-fredoka-sans",
  subsets: ["latin"],
});

const DURATION = 0.3;
const STAGGER = 0.04;

type FlipLinkProps = {
  href: string;
  children: string;
};

const FlipLink: React.FC<React.PropsWithChildren<FlipLinkProps>> = ({
  children,
  href,
}) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className={`${fredoka.variable} relative block overflow-hidden whitespace-nowrap  font-bold font-fredoka uppercase   text-7xl sm:text-8xl lg:text-9xl`}
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>

      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export const SocialMediaLinks: React.FC = () => {
  return (
    <section className="grid place-content-center gap-2 text-roseKari-light font-fredoka px-6 md:px-10">
      <FlipLink href="https://www.linkedin.com/in/malgorzatabozykowska/">
        Linkedin
      </FlipLink>
      <FlipLink href="https://github.com/karibara">GitHub</FlipLink>
      <FlipLink href="https://www.behance.net/malgorzatabozykowska">
        Behance
      </FlipLink>
    </section>
  );
};
