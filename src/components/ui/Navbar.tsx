"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedHamburgerButton } from "./AnimatedHamburgerButton";

const links = [
  {
    label: "CONTACT ME",
    href: "#contact",
  },
  {
    label: "MY FRONTEND DEV CV",
    href: "/check_this_cv.pdf",
  },
  {
    label: "LINKEDIN",
    href: "https://www.linkedin.com/in/malgorzatabozykowska/",
  },
];

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // scroll to top
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[740px] z-50   bg-white/40 md:bg-white/0 backdrop-blur-md md:backdrop-blur-none drop-shadow-xl md:drop-shadow-none border-b-2 border-white/50 md:border-none">
        <div className="flex items-center justify-between py-2 px-5 lg:py-5 lg:px-10">
          <Link href="#" className="p-2 ">
            <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.85 }}>
              <Image
                src="/karibara_logo.png"
                width="50"
                height="50"
                alt="logo karibara"
                onClick={handleScrollToTop}
              ></Image>
            </motion.div>
          </Link>

          <AnimatedHamburgerButton
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          />
        </div>
      </div>

      {/* menu with animated background */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="menu"
            className="fixed inset-0 z-40 flex items-center justify-center backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Big circle from hamburger menu background */}
            <motion.div
              className="absolute bg-orangeKari rounded-full"
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 160, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{
                duration: 2,
                ease: [0.76, 0, 0.24, 1],
              }}
              style={{
                width: "3rem",
                height: "3rem",
                top: "2.2rem",
                right: "1.8rem",
                transformOrigin: "center",
              }}
            />

            {/* Links after a while */}
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="relative z-50 flex flex-col items-center gap-6 text-2xl font-semibold text-kariBlack"
            >
              {links.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="hover:scale-110 transition-transform"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
