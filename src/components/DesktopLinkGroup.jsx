import {
  PiGitCommitDuotone,
  PiArticleMediumThin,
  PiLinkedinLogoLight,
} from "react-icons/pi";
import { Link } from "react-router-dom";
import handleResumeDownload from "../utils/handleResumeDownload";

export const DesktopLinkGroup = ({ page }) => {
  return (
    <div>
      <div
        id="link-group"
        className="flex flex-col gap-[14px] 2xl:text-[15px] cursor-pointer 4xl:gap-[25px]"
      >
        <div
          className="text-white flex items-center gap-[20px] w-fit"
          onClick={handleResumeDownload}
        >
          <PiGitCommitDuotone className="git w-[20px] h-[20px] 3xl:w-[25px] 3xl:h-[25px] 4xl:w-[45px] 4xl:h-[45px]" />
          <span className="w-[70px] h-[2px] bg-white rounded-md"></span>
          <span className="text-[12px] 2xl:text-[13px] 4xl:text-[18px]">
            Download Resume
          </span>
        </div>
        {/*  */}
        {/*  */}
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
