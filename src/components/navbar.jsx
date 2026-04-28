import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Socials } from "./Socials";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <nav
      className={`w-full fixed top-0 left-0 right-0 z-30 bg-[var(--dark-bg-primary)] md:px-[50px] lg:px-[70px] transition-all duration-300 ${
        isMenuOpen ? "h-screen" : "h-[70px] overflow-hidden"
      }`}
    >
      {/* Logo and menu toggle button */}
      <div className="w-full h-[70px] flex items-center justify-between px-[10px] md:pl-[20px] md:pr-0">
        <Link
          to={"/"}
          className="jakarta text-white font-[600] text-[20px] tracking-[4px]"
        >
          {"FENIGMA".split("").map((letter, i) => (
            <span
              key={i}
              className="letter hover:text-[var(--dark-text)] transition-colors"
            >
              {letter}
            </span>
          ))}
        </Link>

        {/* Desktop Navigation */}
        <Link
          to={"/"}
          className="hidden xl:block text-white font-[500] text-[16px] hover:text-[var(--dark-text)] transition-colors"
        >
          Back to Home
        </Link>

        <button
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          className="cursor-pointer pl-[25px] h-[70px] md:px-[20px] block xl:hidden"
        >
          {isMenuOpen ? (
            <IoClose className="size-[35px] pointer-events-none text-[gray]" />
          ) : (
            <CgMenuRight className="size-[35px] pointer-events-none text-[gray]" />
          )}
        </button>
      </div>

      {/* Mobile Nav Links */}
      {isMenuOpen && (
        <div
          className="py-[60px] text-[--dark-text] z-20 flex justify-center
          w-full md:-mx-[50px] md:w-[calc(100%+100px)] lg:-mx-[70px] lg:w-[calc(100%+140px)]
          h-[calc(100vh-70px)]"
        >
          <div className="h-full w-full flex flex-col items-center">
            {/* Route links */}
            <div className="flex flex-col items-center h-1/3 justify-between w-full">
              <Link
                to={"/"}
                onClick={toggleMenu}
                className="text-[18px] transition-all hover:text-white hover:tracking-[1px]"
              >
                Home
              </Link>
              <Link
                to={"/projects"}
                onClick={toggleMenu}
                className="text-[18px] transition-all hover:text-white hover:tracking-[1px]"
              >
                Projects
              </Link>
              <Link
                to={"/blog"}
                onClick={toggleMenu}
                className="text-[18px] transition-all hover:text-white hover:tracking-[1px]"
              >
                Blog
              </Link>
              {/* <a
                href="https://linkedin.com/in/your-profil"
                target="_blank"
                rel="noreferrer"
                className="text-[18px] transition-all hover:text-white hover:tracking-[1px]"
              >
                LinkedIn
              </a> */}
            </div>

            {/* Social links */}
            <div className="flex flex-col items-center pt-[50px] w-full">
              <p className="text-white text-[20px] font-[600]">
                Reach Out to Me
              </p>
              <Socials width={"190px"} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
