"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-900 text-white">
      {/* Logo */}
      <div className="text-lg font-bold">MyApp</div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-4">
        <Link href="#" className="hover:text-gray-300">
          Home
        </Link>
        <Link href="#" className="hover:text-gray-300">
          About
        </Link>
        <Link href="#" className="hover:text-gray-300">
          Contact
        </Link>
      </div>

      {/* Mobile Navigation Button */}
      <div className="md:hidden">
        <Button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? "Close" : "Menu"}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 md:hidden">
          <ul className="flex flex-col items-center space-y-4 p-4">
            <li>
              <Link href="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
