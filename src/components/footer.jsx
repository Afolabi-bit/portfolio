import { Citation, Socials } from "./utilities";
import { RiExternalLinkLine } from "react-icons/ri";
import { FaGithub, FaTwitter, FaWhatsapp, FaCode, FaEye } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
	return (
		<footer
			id="footer"
			className="fixed bg-[var(--dark-bg-primary)] bottom-0 left-0 w-screen pb-[20px] flex flex-col justify-center items-center lg:pb-[40px]"
		>
			<Socials width={"250px"} />
			<Citation />
		</footer>
	);
};

export const DesktopFooter = () => {
	return (
		<footer>
			<div className="flex gap-[30px] w-fit  4xl:gap-[80px]">
				{/* Github */}
				<a
					href="https://github.com/Afolabi-bit"
					target="_blank"
					rel="noopener noreferrer external"
					className=" text-[var(--dark-text)] transition w-fit flex gap-[5px] items-center  hover:text-white 4xl:gap-[15px]"
				>
					{" "}
					<FaGithub className="w-[10px] h-[10px] 4xl:w-[30px] 4xl:h-[30px]" />
					<span className="text-[10px] text-white 4xl:text-[16px]">Github</span>
					<RiExternalLinkLine className="w-[10px] 4xl:w-[30px]" />
				</a>

				{/* Email */}
				<a
					href="mailto:maverickoluwatomisin@gmail.com"
					target="_blank"
					rel="noopener noreferrer external"
					className=" text-[var(--dark-text)] transition w-fit flex gap-[5px]   items-center hover:text-white "
				>
					{" "}
					<MdEmail className="w-10px[] h-[10px] 4xl:w-[30px] 4xl:h-[30px]" />
					<span className="text-[10px] text-white 4xl:text-[16px]">Email</span>
					<RiExternalLinkLine className="w-[10px] 4xl:w-[30px]" />
				</a>

				{/* WhatsApp */}
				<a
					href="https://wa.link/wxl5hi"
					target="_blank"
					rel="noopener noreferrer external"
					className=" text-[var(--dark-text)] transition w-fit flex gap-[5px] items-center hover:text-white 4xl:gap-[15px]"
				>
					{" "}
					<FaWhatsapp className="w-[10px] h-[10px] 4xl:h-[30px] 4xl:w-[30px]" />
					<span className="text-[10px] text-white 4xl:text-[16px]">
						WhatsApp
					</span>
					<RiExternalLinkLine className="w-[10px] 4xl:w-[30px]" />
				</a>
			</div>
			<Citation />
		</footer>
	);
};

export default Footer;
