import { Link } from "react-router-dom";

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
