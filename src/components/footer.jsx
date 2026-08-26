import { Citation } from "./Citation";
import { Socials } from "./Socials";
import { RiExternalLinkLine } from "react-icons/ri";
import { FaGithub, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="fixed bg-(--dark-bg-primary) bottom-0 left-0 w-screen pb-5 flex flex-col justify-center items-center lg:pb-10 z-20"
    >
      <Socials width={"250px"} />
      <Citation />
    </footer>
  );
};

export const DesktopFooter = () => {
  return (
    <footer>
      <div className="flex gap-7.5 w-fit 4xl:gap-20">
        {/* Github */}
        <a
          href="https://github.com/Afolabi-bit"
          target="_blank"
          rel="noopener noreferrer external"
          className="text-(--dark-text) transition w-fit flex gap-1.25 items-center hover:text-white 4xl:gap-3.75"
        >
          {" "}
          <FaGithub className="w-2.5 h-2.5 4xl:w-7.5 4xl:h-7.5" />
          <span className="text-[10px] text-white 4xl:text-[16px]">Github</span>
          <RiExternalLinkLine className="w-2.5 4xl:w-7.5" />
        </a>

        {/* Email */}
        <a
          href="mailto:maverickoluwatomisin@gmail.com"
          target="_blank"
          rel="noopener noreferrer external"
          className="text-(--dark-text) transition w-fit flex gap-1.25 items-center hover:text-white"
        >
          {" "}
          {/* <MdEmail className="w-2.5 h-2.5 4xl:w-7.5 4xl:h-7.5" /> */}
          <span className="text-[10px] text-white 4xl:text-[16px]">Email</span>
          <RiExternalLinkLine className="w-2.5 4xl:w-7.5" />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.link/wxl5hi"
          target="_blank"
          rel="noopener noreferrer external"
          className="text-(--dark-text) transition w-fit flex gap-1.25 items-center hover:text-white 4xl:gap-3.75"
        >
          {" "}
          <FaWhatsapp className="w-2.5 h-2.5 4xl:h-7.5 4xl:w-7.5" />
          <span className="text-[10px] text-white 4xl:text-[16px]">
            WhatsApp
          </span>
          <RiExternalLinkLine className="w-2.5 4xl:w-7.5" />
        </a>
      </div>
      <Citation />
    </footer>
  );
};

export default Footer;