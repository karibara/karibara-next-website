import React, { useState } from "react";
import { MotionConfig, motion } from "framer-motion";

type AnimatedHamburgerButtonProps = {
  onClick: VoidFunction;
  className?: string;
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "66%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};

export const AnimatedHamburgerButton: React.FC<
  AnimatedHamburgerButtonProps
> = ({ onClick, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
    onClick();
  };

  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={isOpen ? "open" : "closed"}
        onClick={handleClick}
        className={`relative h-10 w-10 flex flex-col justify-between items-center ${className}`}
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-1 w-6 bg-wineKari"
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-1 w-6 bg-wineKari"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-1 w-4 bg-wineKari"
          style={{
            x: "-90%",
            y: "50%",
            bottom: "35%",
            left: "calc(70% + 10px)",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};
