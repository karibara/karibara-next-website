"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type NavlinkProps = {
  href: string;
  className?: string;
};
type HamburgerProps = {
  onClick: VoidFunction;
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

const Hamburger: React.FC<HamburgerProps> = ({ onClick, className }) => (
  <button onClick={onClick} aria-label="Menu" className={className}>
    <svg
      className="lg:hidden items-center"
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.97485 1.97502H17.9749"
        stroke="#333333"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.97485 7.97502H17.9749"
        stroke="#333333"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.97485 13.975H17.9749"
        stroke="#333333"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="flex w-full flex-col place-content-center gap-4 backdrop-blur-md bg-peachKari/20 lg:hidden fixed h-dvh z-40"
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
      <div className="grid lg:place-items-center bg-peachKari fixed top-0 w-dvw z-50 drop-shadow- ">
        <div className="flex  py=5 px-5 lg:px-0 justify-between lg:w-[1140px] z-50">
          <Link href="#" className="p-2 ">
            <Image
              src="/karibara_logo.png"
              width="36"
              height="36"
              alt="logo karibara"
            ></Image>
          </Link>
          <div>
            <nav className="lg:flex gap-8 items-end mt-4 hidden">
              {links.map((link) => (
                <Navlink href={link.href} key={link.label}>
                  {link.label}
                </Navlink>
              ))}
            </nav>
            <Hamburger
              onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
              className="mt-4"
            />
          </div>
        </div>
      </div>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};
