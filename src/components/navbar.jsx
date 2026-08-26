"use client";

import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { Socials } from "./Socials";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <nav
      className={`w-full fixed top-0 left-0 right-0 z-30 bg-(--dark-bg-primary) md:px-12.5 lg:px-17.5 transition-all duration-300 ${
        isMenuOpen ? "h-screen overflow-y-auto" : "h-17.5 overflow-hidden"
      }`}
    >
      {/* Logo and menu toggle button */}
      <div className="w-full h-17.5 flex items-center justify-between px-2.5 md:pl-5 md:pr-0">
        <Link
          href={"/"}
          className="jakarta text-white font-semibold text-[20px] tracking-[4px]"
        >
          {"FENIGMA".split("").map((letter, i) => (
            <span
              key={i}
              className="letter hover:text-(--dark-text) transition-colors"
            >
              {letter}
            </span>
          ))}
        </Link>

        {/* Desktop Navigation */}
        <Link
          href={"/"}
          className="hidden xl:block text-white font-medium text-[16px] hover:text-(--dark-text) transition-colors"
        >
          Back to Home
        </Link>

        <button
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          className="cursor-pointer pl-6.25 h-17.5 md:px-5 block xl:hidden"
        >
          {isMenuOpen ? (
            <IoClose className="size-8.75 pointer-events-none text-[gray]" />
          ) : (
            <CgMenuRight className="size-8.75 pointer-events-none text-[gray]" />
          )}
        </button>
      </div>

      {/* Mobile Nav Links */}
      {isMenuOpen && (
        <div
          className="py-10 text-(--dark-text) z-20 flex justify-center
          w-full md:-mx-12.5 md:w-[calc(100%+100px)] lg:-mx-17.5 lg:w-[calc(100%+140px)]
          min-h-[calc(100vh-70px)] pb-15"
        >
          <div className="w-full flex flex-col items-center justify-around">
            {/* Route links */}
            <div className="flex flex-col items-center justify-between w-full gap-6">
              <Link
                href={"/"}
                onClick={toggleMenu}
                className="text-[18px] transition-all hover:text-white hover:tracking-[1px]"
              >
                Home
              </Link>
              <Link
                href={"/projects"}
                onClick={toggleMenu}
                className="text-[18px] transition-all hover:text-white hover:tracking-[1px]"
              >
                Projects
              </Link>
              <Link
                href={"/blog"}
                onClick={toggleMenu}
                className="text-[18px] transition-all hover:text-white hover:tracking-[1px]"
              >
                Blog
              </Link>
            </div>

            {/* Social links */}
            <div className="flex flex-col items-center pt-10 w-full">
              <p className="text-white text-[20px] font-semibold">
                Reach Out to Me
              </p>
              <Socials width={"190px"} onLinkClick={toggleMenu} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;