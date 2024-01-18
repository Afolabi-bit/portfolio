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
      <div className="flex gap-[30px] w-fit  ">
        {/* Github */}
        <a
          href="https://github.com/Afolabi-bit"
          target="_blank"
          rel="noopener noreferrer external"
          className=" text-[var(--dark-text)] transition w-fit flex gap-[5px]   items-center  hover:text-white"
        >
          {" "}
          <FaGithub className="w-[10px] h-[10px]" />
          <span className="text-[10px] text-white">Github</span>
          <RiExternalLinkLine className="w-[10px]" />
        </a>

        {/* Twitter */}
        <a
          href="https://twitter.com/0xFola"
          target="_blank"
          rel="noopener noreferrer external"
          className=" text-[var(--dark-text)] transition w-fit flex gap-[5px]   items-center hover:text-white"
        >
          {" "}
          <FaTwitter className="w-[10px] h-[10px]" />
          <span className="text-[10px] text-white">Twitter</span>
          <RiExternalLinkLine className="w-[10px]" />
        </a>

        {/* Email */}
        <a
          href="mailto:maverickoluwatomisin@gmail.com"
          target="_blank"
          rel="noopener noreferrer external"
          className=" text-[var(--dark-text)] transition w-fit flex gap-[5px]   items-center hover:text-white"
        >
          {" "}
          <MdEmail className="w-10px[] h-[10px]" />
          <span className="text-[10px] text-white">Email</span>
          <RiExternalLinkLine className="w-[10px]" />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.link/wxl5hi"
          target="_blank"
          rel="noopener noreferrer external"
          className=" text-[var(--dark-text)] transition w-fit flex gap-[5px] items-center hover:text-white"
        >
          {" "}
          <FaWhatsapp className="w-[10px] h-[10px]" />
          <span className="text-[10px] text-white">WhatsApp</span>
          <RiExternalLinkLine className="w-[10px]" />
        </a>
      </div>
      <Citation />
    </footer>
  );
};

export default Footer;
