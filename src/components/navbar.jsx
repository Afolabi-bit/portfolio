import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Socials } from "./utilities";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	function toggleMenu() {
		document.getElementById("navbar").classList.toggle("open-menu");
		setIsMenuOpen((isMenuOpen) => !isMenuOpen);
	}
	return (
		<nav
			id="navbar"
			className="w-[100%] h-[70px] overflow-hidden fixed top-0 left-0 right-0 z-30 bg-[var(--dark-bg-primary)] md:px-[50px] lg:px-[70px]"
		>
			{/* Logo and menu toggle button */}
			<div className="w-full h-[70px] flex items-center justify-between px-[10px] md:pl-[20px] md:pr-0">
				<Link
					to={"/"}
					className="jakarta text-white font-[600] text-[20px] tracking-[4px]"
				>
					<span className="letter hover:text-[var(--dark-text)] transition-colors">
						F
					</span>
					<span className="letter hover:text-[var(--dark-text)] transition-colors">
						E
					</span>
					<span className="letter hover:text-[var(--dark-text)] transition-colors">
						N
					</span>
					<span className="letter hover:text-[var(--dark-text)] transition-colors">
						I
					</span>
					<span className="letter hover:text-[var(--dark-text)] transition-colors">
						G
					</span>
					<span className="letter hover:text-[var(--dark-text)] transition-colors">
						M
					</span>
					<span className="letter hover:text-[var(--dark-text)] transition-colors">
						A
					</span>
				</Link>

				<button
					onClick={toggleMenu}
					className="cursor-pointer pl-[25px] h-[70px] md:px-[20px]"
				>
					{isMenuOpen ? (
						<IoClose className=" size-[35px] pointer-events-none text-[gray]" />
					) : (
						<CgMenuRight className=" size-[35px] pointer-events-none text-[gray]" />
					)}
				</button>
			</div>

			{/* Nav Links */}
			<div
				id="nav-links"
				className="py-[60px] text-[--dark-text] w-screen h-screen  z-20 opacity-0"
			>
				{/* Wrapper - for a micro animation */}
				<div
					id="nav-links-wrapper"
					className="translate-y-[-40px] h-full"
				>
					{/* Route links for pages */}
					<div className="flex flex-col items-center h-1/3 justify-between">
						<Link
							to={"/"}
							className="text-[18px] transition-all hover:text-white hover:tracking-[1px]"
						>
							Home
						</Link>
						<Link
							to={"/projects"}
							className="text-[18px] transition-all hover:text-white hover:tracking-[1px]"
						>
							Projects
						</Link>
						<Link
							to={"/blog"}
							className="text-[18px] transition-all hover:text-white hover:tracking-[1px]"
						>
							Blog
						</Link>
						<a
							href="#"
							className="text-[18px] transition-all hover:text-white hover:tracking-[1px]"
						>
							LinkedIn
						</a>
					</div>

					{/* Social links */}
					<div className="flex flex-col items-center pt-[50px]">
						<p className="text-white text-[20px] font-[600]">Reach Out to Me</p>
						<Socials width={"190px"} />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
