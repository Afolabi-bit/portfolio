import { FaGithub, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Socials = ({ width }) => {
  return (
    <div
      style={{ width: `${width}` }}
      className="flex w-[160px] justify-between pt-[20px]"
    >
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
  );
};
