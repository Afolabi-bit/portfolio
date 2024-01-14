import { FaGithub, FaTwitter, FaWhatsapp, FaCode, FaEye } from "react-icons/fa";
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
        className="size-[35px] text-[25px] text-[var(--dark-text)] transition hover:text-white"
      >
        {" "}
        <FaGithub />
      </a>
      <a
        href="https://twitter.com/0xFola"
        target="_blank"
        rel="noopener noreferrer external"
        className="size-[35px] text-[25px] text-[var(--dark-text)] transition hover:text-white"
      >
        {" "}
        <FaTwitter />
      </a>

      <a
        href="mailto:maverickoluwatomisin@gmail.com"
        target="_blank"
        rel="noopener noreferrer external"
        className="size-[35px] text-[25px] text-[var(--dark-text)] transition hover:text-white"
      >
        {" "}
        <MdEmail />
      </a>

      <a
        href="https://wa.link/wxl5hi"
        target="_blank"
        rel="noopener noreferrer external"
        className="size-[35px] text-[25px] text-[var(--dark-text)] transition hover:text-white"
      >
        {" "}
        <FaWhatsapp />
      </a>
    </div>
  );
};

export const Card = ({ data }) => {
  return (
    <div className="bg-[var(--dark-bg-minimal)]  w-full h-[220px]  px-[20px] pt-[30px] pb-[50px] flex flex-col justify-between ">
      <div>
        <h4 className="text-white text-[23px] font-[600] jakarta">
          {data.name}
        </h4>
        <p className="text-[var(--dark-text)] text-[12px]">
          {data.description}
        </p>
      </div>

      <div className="text-white flex gap-[20px]">
        <a href={data.code} className="flex items-center gap-2">
          <FaCode /> <span className="text-[12px]">Code</span>
        </a>
        <a href={data.live} className="flex items-center gap-2">
          <FaEye /> <span className="text-[12px]">Live</span>
        </a>
      </div>
    </div>
  );
};
