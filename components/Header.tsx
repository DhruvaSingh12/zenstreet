"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import BackButton from "./BackButton";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-700 lg:bg-blue-600 text-white py-3 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-row gap-2 items-center">
        <BackButton />
        {/* Logo Section */}
        <Link href="/" passHref>
          <div className="flex flex-row gap-2 cursor-pointer">
            <Image src="/logo.png" alt="ZenStreet.ai" width={60} height={60} />
            <h1 className="text-2xl font-bold mt-4">ZenStreet.ai</h1>
          </div>
        </Link>
        </div>
      

        {/* Navigation Section */}
        <nav className="hidden lg:flex gap-4">
          <a href="#" className="hover:underline">
            About us
          </a>
          <a href="#" className="hover:underline">
            Features
          </a>
          <a href="#" className="hover:underline">
            Why ZenStreet
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden rounded-lg bg-blue-800 py-2 mt-[2px]">
          <a href="#" className="block px-4 py-2 text-sm hover:underline">
            About us
          </a>
          <a href="#" className="block px-4 py-2 text-sm hover:underline">
            Features
          </a>
          <a href="#" className="block px-4 py-2 text-sm hover:underline">
            Why ZenStreet
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
