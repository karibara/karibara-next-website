"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedHamburgerButton } from "./AnimatedHamburgerButton";

type NavlinkProps = {
  href: string;
  className?: string;
};

type MobileMenuProps = {
  isOpen: boolean;
  onClose: VoidFunction;
  className?: string;
};

const Navlink: React.FC<React.PropsWithChildren<NavlinkProps>> = ({
  href,
  children,
}) => (
  <Link
    href={href}
    className="font-semibold text-base hover:text-mintKari  hover:translate-y-px"
  >
    {children}
  </Link>
);

const links = [
  {
    label: "ABOUT",
    href: "#",
  },
  {
    label: "SKILLS",
    href: "#",
  },
  {
    label: "PROJECTS",
    href: "#",
  },
  {
    label: "FAQ",
    href: "#",
  },
];

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          initial={{ y: -850 }}
          animate={{ y: 0 }}
          exit={{ y: -850 }}
          transition={{ duration: 3, type: "spring" }}
          className="flex w-full flex-col place-content-center gap-4 backdrop-blur-md bg-peachKari/20 lg:hidden fixed h-3/4 rounded-b-xl border-black z-40"
        >
          {links.map((link) => (
            <Link
              onClick={onClose}
              className="flex place-content-center py-2"
              href={link.href}
              key={link.label}
            >
              {link.label}
            </Link>
          ))}
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="grid lg:place-items-center bg-orangeKari/15 fixed top-0 w-dvw z-50 drop-shadow- ">
        <div className="flex  py=5 px-5 lg:px-0 justify-between lg:w-[1140px] z-50">
          <Link href="#" className="p-2 ">
            <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.85 }}>
              <Image
                src="/karibara_logo.png"
                width="36"
                height="36"
                alt="logo karibara"
              ></Image>
            </motion.div>
          </Link>
          <div>
            <nav className="lg:flex gap-8 items-end mt-4 hidden">
              {links.map((link) => (
                <Navlink href={link.href} key={link.label}>
                  {link.label}
                </Navlink>
              ))}
            </nav>

            <AnimatedHamburgerButton
              onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
              className="mt-2 lg:hidden"
            />
          </div>
        </div>
      </div>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};
