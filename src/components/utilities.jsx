import { FaGithub, FaTwitter, FaWhatsapp, FaCode, FaEye } from "react-icons/fa";
import {
  PiGitCommitDuotone,
  PiArticleMediumThin,
  PiLinkedinLogoLight,
} from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { TechStack } from "@/components/ui/tech-icon";

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
          : "card relative bg-transparent border border-[var(--dark-text-alt)] rounded-xl w-full px-[40px] pt-[40px] pb-[50px] flex flex-col justify-between h-[270px] transition-all"
      }
    >
      {screen === "desktop" && (
        <GlowingEffect
          spread={50}
          glow={true}
          disabled={false}
          proximity={80}
          inactiveZone={0.1}
          borderWidth={2}
          movementDuration={0.3}
        />
      )}
      <div className="pointer-events-none">
        <h4 className="text-white text-[23px] font-[600] jakarta lg:text-[20px] lg:font-[700] 4xl:text-[26px]">
          {data.name}
        </h4>
        <div className="my-[8px]">
          <TechStack
            stack={data.stack}
            size="w-4 h-4 lg:w-5 lg:h-5 4xl:w-6 4xl:h-6"
            gap="gap-2 lg:gap-3"
          />
        </div>
        {data.description && (
          <p className="text-[var(--dark-text-alt)] text-[12px] lg:text-[12px] 4xl:text-[16px]">
            {data.description}
          </p>
        )}
      </div>

      <div className="text-white flex gap-[20px]">
        {data.code && (
          <a href={data.code} className="flex items-center gap-2">
            <FaCode className="lg:scale-[1.2] 4xl:scale-[1.3]" />{" "}
            <span className="text-[12px] lg:text-[13px] 4xl:text-[14px]">
              Code
            </span>
          </a>
        )}
        {data.live && (
          <a
            href={data.live}
            className="flex items-center gap-2 4xl:scale-[1.2]"
          >
            <FaEye className="lg:scale-[1.2]" />{" "}
            <span className="text-[12px] lg:text-[13px] 4xl:text-[14px]">
              Live
            </span>
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
    <p className="text-[14px] text-[var(--dark-text)] md:text-[16px] md:w-[85%] md:mx-auto xl:w-[90%] xl:text-[14px] xl:mx-0 2xl:w-[75%] 2xl:text-[13px] 2xl:mt-[15px] 3xl:text-[16px] 4xl:text-[28px]">
      I'm a <span className="accent">junior software engineer </span>
      keen on <span className="accent">providing solutions </span>
      using <span className="accent">frontend technologies</span>. I'm
      fascinated by <span className="accent">functionality</span>, accessibity,{" "}
      <span className="accent">minimalist design</span>, optimal user experience
      <span className="accent">, and intricate web animations.</span>
    </p>
  );
};

export const LinkGroup = ({ page }) => {
  return (
    <div>
      <div
        id="link-group"
        className="flex flex-col gap-[14px] 2xl:text-[15px] cursor-pointer 4xl:gap-[25px]"
      >
        {page == "home" ? (
          <div className="text-white flex items-center gap-[20px] w-fit">
            <PiGitCommitDuotone className="git w-[20px] h-[20px] 3xl:w-[25px] 3xl:h-[25px] 4xl:w-[45px] 4xl:h-[45px]" />
            <span className="w-[70px] h-[2px] bg-white rounded-md"></span>
            <span className="text-[12px] 2xl:text-[13px] 4xl:text-[18px]">
              Projects
            </span>
          </div>
        ) : (
          <Link
            to={"/"}
            className="text-[var(--dark-text)] flex items-center gap-[20px] w-fit "
          >
            <PiGitCommitDuotone className="git w-[20px] h-[20px] 3xl:w-[25px] 3xl:h-[25px] 4xl:w-[45px] 4xl:h-[45px]" />
            <span className="w-[50px] h-[2px] bg-[var(--dark-text)] rounded-md items-center gap-[20px] 4xl:text-[18px]"></span>
            <span className="text-[12px] 2xl:text-[13px]">Projects</span>
          </Link>
        )}
        {/*  */}
        {/*  */}
        {page == "blog" ? (
          <div className="text-[var(--dark-text)] flex items-center gap-[20px] w-fit ml-[30px] cursor-pointer">
            <PiArticleMediumThin className=" w-[20px] h-[20px] 3xl:w-[25px] 3xl:h-[25px] 4xl:w-[45px] 4xl:h-[45px]" />
            <span className="w-[70px] h-[2px] bg-[var(--dark-text)] rounded-md"></span>
            <span className="text-[12px] 2xl:text-[13px] 4xl:text-[18px]">
              Blog
            </span>
          </div>
        ) : (
          <Link
            to={"/blog"}
            className="text-[var(--dark-text)] flex items-center gap-[20px] w-fit ml-[30px]"
          >
            <PiArticleMediumThin className=" w-[20px] h-[20px] 3xl:w-[25px] 3xl:h-[25px] 4xl:w-[45px] 4xl:h-[45px]" />
            <span className="w-[50px] h-[2px] bg-[var(--dark-text)] rounded-md items-center gap-[20px] "></span>
            <span className="text-[12px] 2xl:text-[13px] 4xl:text-[18px]">
              Blog
            </span>
          </Link>
        )}
        {/*  */}
        {/*  */}

        <a
          href="#"
          className="text-[var(--dark-text)] flex items-center gap-[20px] w-fit"
        >
          <PiLinkedinLogoLight className=" w-[20px] h-[20px] 3xl:w-[25px] 3xl:h-[25px] 4xl:w-[45px] 4xl:h-[45px]" />
          <span className="w-[50px] h-[2px] bg-[var(--dark-text)] rounded-md items-center gap-[20px]  "></span>
          <span className="text-[12px] 2xl:text-[13px] 4xl:text-[18px]">
            LinkedIn
          </span>
        </a>
      </div>
    </div>
  );
};

export const Citation = () => {
  return (
    <p className="text-[var(--dark-text)] text-[10px] pt-[5px] 4xl:text-[14px]">
      Inspired by{" "}
      <a
        href="http://kadet.dev"
        target="_blank"
        rel="noreferrer noopener external"
        className="text-white ml-1 "
      >
        Collins Enebeli
      </a>
    </p>
  );
};
