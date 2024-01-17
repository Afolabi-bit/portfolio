import { FaGithub, FaTwitter, FaWhatsapp, FaCode, FaEye } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

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
    <div
      id="card"
      className="bg-[var(--dark-bg-minimal)]  w-full h-[220px]  px-[20px] pt-[30px] pb-[50px] flex flex-col justify-between"
    >
      <div>
        <h4 className="text-white text-[23px] font-[600] jakarta">
          {data.name}
        </h4>
        <h5 className="flex my-[5px] text-[var(--dark-text)]">
          {data.stack.map((tool, index) => {
            if (index === data.stack.length - 1) {
              return (
                <span className=" text-[13px] font-[700] tracking-wide">
                  {tool}
                </span>
              );
            }
            return (
              <span className="text-[12px]  font-[700] tracking-wide mr-[5px]">
                {tool},
              </span>
            );
          })}
        </h5>
        {data.description && (
          <p className="text-[var(--dark-text-alt)] text-[12px]">
            {data.description}
          </p>
        )}
      </div>

      <div className="text-white flex gap-[20px]">
        {data.code && (
          <a href={data.code} className="flex items-center gap-2">
            <FaCode /> <span className="text-[12px]">Code</span>
          </a>
        )}
        {data.live && (
          <a href={data.live} className="flex items-center gap-2">
            <FaEye /> <span className="text-[12px]">Live</span>
          </a>
        )}
      </div>
    </div>
  );
};

export const PageNavigationButtons = ({ page }) => {
  return (
    <div className="w-full  flex justify-center gap-[10px] mt-[50px] ">
      {page != "home" && (
        <Link
          to={"/"}
          className="w-[130px] text-white text-center text-[12px] py-[10px] bg-[var(--dark-bg-minimal)]  border border-[var(--dark-bg-minimal)] transition-colors hover:border-white"
        >
          Home
        </Link>
      )}
      {page != "projects" && (
        <Link
          to={"/projects"}
          className="w-[130px] text-white text-center text-[12px] py-[10px] bg-[var(--dark-bg-minimal)]  border border-[var(--dark-bg-minimal)] transition-colors hover:border-white"
        >
          Projects
        </Link>
      )}
      {page != "blog" && (
        <Link
          to={"/blog"}
          className="w-[130px] text-white text-center text-[12px] py-[10px] bg-[var(--dark-bg-minimal)]  border border-[var(--dark-bg-minimal)] transition-colors hover:border-white"
        >
          Articles
        </Link>
      )}
    </div>
  );
};
