import { Link } from "react-router-dom";
import { MdArrowRight } from "react-icons/md";
import { HeroParagraph } from "./utilities";
import { motion } from "motion/react";

const Hero = () => {
	return (
		<section className="w-full h-screen flex flex-col justify-center">
			<div className="text-center flex justify-center flex-col items-center">
				<div className="flex justify-center w-[250px] items-center relative z-10 md:w-[600px]  md:mb-[10px] lg:w-[710px] lg:mb-[15px]">
					<h1 className="text-[1.5rem] text-white text-left font-semibold jakarta leading-[2.6rem] md:text-[1.8rem] md:translate-x-[-20px] lg:text-[2.2rem]">
						<span>Hey there,</span> <br className="md:hidden" />
						<span>I'm Afolabi Joseph</span>
					</h1>
					<motion.img
						src="https://res.cloudinary.com/dkpoealta/image/upload/v1705073703/wave_wqkqvu.webp"
						alt="a waving hand"
						id="waving-hand"
						style={{
							transformOrigin: "bottom center",
						}}
						animate={{
							rotate: [0, 12, -8, 12, -8, 8, 0, 0],
							translateY: [0, -4, -2, -4, -2, -3, 0, 0],
							translateX: [0, 3, -5, 3, -5, 2, 0, 0],
							scale: [1, 1.05, 1.05, 1.05, 1.05, 1.03, 1, 1],
						}}
						transition={{
							duration: 4,
							ease: "easeInOut",
							times: [0, 0.08, 0.16, 0.24, 0.32, 0.4, 0.48, 1],
							repeat: Infinity,
							repeatDelay: 0.5,
						}}
						className="w-[80px] h-[80px] translate-y-[5px] absolute top-[-20px] right-[15px] md:w-[120px] md:h-[120px] md:top-[-50px] md:right-[0px]"
					/>
				</div>
				<div className="pt-[2px] px-[7px]">
					<HeroParagraph />
				</div>
			</div>

			<div className="text-center  my-[30px]">
				<Link
					to={"/projects"}
					className="bg-[--dark-bg-optimal] text-white py-[7px] pl-[37px] pr-[28px] inline-flex items-center border border-[--dark-bg-optimal] transition hover:border-white lg:pl-[47px] lg:pr-[38px] lg:py-[10px]"
				>
					<span className="text-[14px] lg:text-[16px]">Explore</span>
					<MdArrowRight size={"30px"} />
				</Link>
			</div>
		</section>
	);
};

export default Hero;
