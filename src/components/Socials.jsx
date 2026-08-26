import { FaGithub, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Socials = ({ width, onLinkClick }) => {
  return (
    <div
      style={{ width: width ? `${width}` : "160px" }}
      className="flex justify-between pt-5"
    >
      <a
        href="https://github.com/Afolabi-bit"
        target="_blank"
        rel="noopener noreferrer external"
        aria-label="GitHub Profile"
        onClick={onLinkClick}
        className="size-8.75 inline-flex items-center justify-center text-[25px] text-(--dark-text) transition hover:text-white cursor-pointer"
      >
        <FaGithub />
      </a>
      <a
        href="https://twitter.com/0xFola"
        target="_blank"
        rel="noopener noreferrer external"
        aria-label="Twitter Profile"
        onClick={onLinkClick}
        className="size-8.75 inline-flex items-center justify-center text-[25px] text-(--dark-text) transition hover:text-white cursor-pointer"
      >
        <FaTwitter />
      </a>

      <a
        href="mailto:maverickoluwatomisin@gmail.com"
        target="_blank"
        rel="noopener noreferrer external"
        aria-label="Send Email"
        onClick={onLinkClick}
        className="size-8.75 inline-flex items-center justify-center text-[25px] text-(--dark-text) transition hover:text-white cursor-pointer"
      >
        <MdEmail />
      </a>

      <a
        href="https://wa.link/wxl5hi"
        target="_blank"
        rel="noopener noreferrer external"
        aria-label="WhatsApp Contact"
        onClick={onLinkClick}
        className="size-8.75 inline-flex items-center justify-center text-[25px] text-(--dark-text) transition hover:text-white cursor-pointer"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};