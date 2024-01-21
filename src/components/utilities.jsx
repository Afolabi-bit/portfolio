import { FaGithub, FaTwitter, FaWhatsapp, FaCode, FaEye } from "react-icons/fa";
import {
  PiGitCommitDuotone,
  PiArticleMediumThin,
  PiLinkedinLogoLight,
} from "react-icons/pi";
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

export const Card = ({ data, screen }) => {
  return (
    <div
      className={
        screen != "desktop"
          ? `card bg-[var(--dark-bg-minimal)]  w-full h-[220px]  px-[20px] pt-[30px] pb-[50px] flex flex-col justify-between lg:h-[260px] lg:px-[30px]`
          : "card bg-[var(--dark-bg-minimal)]  w-full  px-[40px] pt-[40px] pb-[50px] flex flex-col justify-between h-[270px] hover:scale-105 transition-all"
      }
    >
      <div className="pointer-events-none">
        <h4 className="text-white text-[23px] font-[600] jakarta lg:text-[20px] lg:font-[700]">
          {data.name}
        </h4>
        <h5 className="flex my-[5px] text-[var(--dark-text)]">
          {data.stack.map((tool, index) => {
            if (index === data.stack.length - 1) {
              return (
                <span
                  key={index}
                  className=" text-[12px] font-[700] tracking-wide "
                >
                  {" "}
                  {tool}
                </span>
              );
            }
            return (
              <span
                key={index}
                className="text-[12px]  font-[700] tracking-wide mr-[5px] "
              >
                {tool},
              </span>
            );
          })}
        </h5>
        {data.description && (
          <p className="text-[var(--dark-text-alt)] text-[12px] lg:text-[12px]">
            {data.description}
          </p>
        )}
      </div>

      <div className="text-white flex gap-[20px]">
        {data.code && (
          <a href={data.code} className="flex items-center gap-2">
            <FaCode className="lg:scale-[1.2]" />{" "}
            <span className="text-[12px] lg:text-[13px]">Code</span>
          </a>
        )}
        {data.live && (
          <a href={data.live} className="flex items-center gap-2">
            <FaEye className="lg:scale-[1.2]" />{" "}
            <span className="text-[12px] lg:text-[13px]">Live</span>
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

export const HeroParagraph = () => {
  return (
    <p className="text-[14px] text-[var(--dark-text)] md:text-[16px] md:w-[85%] md:mx-auto xl:w-[90%] xl:text-[14px] xl:mx-0 2xl:w-[75%] 2xl:text-[13px] 2xl:mt-[15px] ">
      I'm a <span className="accent">junior software engineer </span>
      that is keen on <span className="accent">providing solutions </span>
      using <span className="accent">frontend technologies</span>. I am
      fascinated by <span className="accent">functionality</span>, accessibity,{" "}
      <span className="accent">minimalist design</span>, user experience,
      <span className="accent"> web animations</span>, and python.
    </p>
  );
};

export const LinkGroup = ({ page }) => {
  return (
    <div>
      <div
        id="link-group"
        className="flex flex-col gap-[14px] 2xl:text-[15px] cursor-pointer"
      >
        {page == "home" ? (
          <div className="text-white flex items-center gap-[20px] w-fit">
            <PiGitCommitDuotone className="git w-[20px] h-[20px]" />
            <span className="w-[70px] h-[2px] bg-white rounded-md"></span>
            <span className="text-[12px] 2xl:text-[13px]">Projects</span>
          </div>
        ) : (
          <Link
            to={"/"}
            className="text-[var(--dark-text)] flex items-center gap-[20px] w-fit "
          >
            <PiGitCommitDuotone className="git w-[20px] h-[20px]" />
            <span className="w-[50px] h-[2px] bg-[var(--dark-text)] rounded-md items-center gap-[20px] "></span>
            <span className="text-[12px] 2xl:text-[13px]">Projects</span>
          </Link>
        )}
        {/*  */}
        {/*  */}
        {page == "blog" ? (
          <div className="text-[var(--dark-text)] flex items-center gap-[20px] w-fit ml-[30px] cursor-pointer">
            <PiArticleMediumThin className=" w-[20px] h-[20px]" />
            <span className="w-[70px] h-[2px] bg-[var(--dark-text)] rounded-md"></span>
            <span className="text-[12px] 2xl:text-[13px]">Blog</span>
          </div>
        ) : (
          <Link
            to={"/"}
            className="text-[var(--dark-text)] flex items-center gap-[20px] w-fit ml-[30px]"
          >
            <PiArticleMediumThin className=" w-[20px] h-[20px]" />
            <span className="w-[50px] h-[2px] bg-[var(--dark-text)] rounded-md items-center gap-[20px] "></span>
            <span className="text-[12px] 2xl:text-[13px]">Blog</span>
          </Link>
        )}
        {/*  */}
        {/*  */}

        <a
          href="#"
          className="text-[var(--dark-text)] flex items-center gap-[20px] w-fit"
        >
          <PiLinkedinLogoLight className=" w-[20px] h-[20px]" />
          <span className="w-[50px] h-[2px] bg-[var(--dark-text)] rounded-md items-center gap-[20px] "></span>
          <span className="text-[12px] 2xl:text-[13px]">LinkedIn</span>
        </a>
      </div>
    </div>
  );
};

export const Citation = () => {
  return (
    <p className="text-[var(--dark-text)] text-[10px] pt-[5px]">
      Inspired by{" "}
      <a
        href="http://kadet.dev"
        target="_blank"
        rel="noreferrer noopener external"
        className="text-white ml-1"
      >
        Collins Enebeli
      </a>
    </p>
  );
};
