import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { FaGithub, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    document.getElementById("navbar").classList.toggle("open-menu");
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  }
  return (
    <nav
      id="navbar"
      className="w-screen h-[70px] overflow-hidden fixed  top-0 left-0 right-0 z-30 bg-[var(--dark-bg-primary)]"
    >
      {/* Logo and menu toggle button */}
      <div className="w-full h-[70px] flex items-center justify-between px-[10px]">
        <h2s className="jakarta text-white font-[600] text-[20px] tracking-[4px]">
          <span className="letter">F</span>
          <span className="letter">E</span>
          <span className="letter">N</span>
          <span className="letter">I</span>
          <span className="letter">G</span>
          <span className="letter">M</span>
          <span className="letter">A</span>
        </h2s>

        <div>
          <button
            onClick={toggleMenu}
            className=" cursor-pointer pl-[15px] py-[3px]"
          >
            {isMenuOpen ? (
              <IoClose className="text-white size-[35px]" />
            ) : (
              <CgMenuRight className="text-white size-[35px]" />
            )}
          </button>
        </div>
      </div>

      {/* Nav Links */}
      <div
        id="nav-links"
        className="py-[60px] text-[--dark-text] w-screen h-screen translate-y-[-40px] z-20 opacity-0"
      >
        {/* Route links for pages */}
        <div className="flex flex-col items-center h-1/3 justify-between">
          <Link to={"/"} className="text-[18px]">
            Home
          </Link>
          <Link to={"/projects"} className="text-[18px]">
            Projects
          </Link>
          <Link to={"/articles"} className="text-[18px]">
            Technical Articles
          </Link>
          <a href="#" className="text-[18px]">
            LinkedIn
          </a>
        </div>

        {/* Social links */}
        <div className="flex flex-col items-center pt-[50px]">
          <p className="text-white text-[20px] font-[600]">Reach Out to Me</p>
          <div className="flex w-[160px] justify-between pt-[20px]">
            <a
              href="https://github.com/Afolabi-bit"
              target="_blank"
              rel="noopener noreferrer external"
              className="size-[35px] text-[25px] text-[var(--dark-text)]"
            >
              {" "}
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/0xFola"
              target="_blank"
              rel="noopener noreferrer external"
              className="size-[35px] text-[25px] text-[var(--dark-text)]"
            >
              {" "}
              <FaTwitter />
            </a>

            <a
              href="mailto:maverickoluwatomisin@gmail.com"
              target="_blank"
              rel="noopener noreferrer external"
              className="size-[35px] text-[25px] text-[var(--dark-text)]"
            >
              {" "}
              <MdEmail />
            </a>

            <a
              href="https://wa.link/wxl5hi"
              target="_blank"
              rel="noopener noreferrer external"
              className="size-[35px] text-[25px] text-[var(--dark-text)]"
            >
              {" "}
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
