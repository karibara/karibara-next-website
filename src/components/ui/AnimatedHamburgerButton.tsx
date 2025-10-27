import React, { useState } from "react";
import { MotionConfig, motion } from "framer-motion";

type AnimatedHamburgerButtonProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
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
> = ({ isOpen, setIsOpen, className }) => {
  const [isHovered, setIsHovered] = useState(false);

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
        onClick={() => setIsOpen((prev) => !prev)}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className={`relative h-12 w-12 flex items-center justify-center ${className}`}
      >
        {/* circle background */}
        <motion.div
          className="absolute rounded-full bg-orangeKari"
          initial={{ scale: 0.8, opacity: 1 }}
          animate={{
            scale: isHovered ? 1.3 : 1,
            opacity: isOpen ? 1 : 0.8,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        />

        {/* lines */}
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-1 w-6 bg-blackKari"
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-1 w-6 bg-blackKari"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-1 w-4 bg-blackKari"
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
