import { Link } from "react-router-dom";
import { MdArrowRight } from "react-icons/md";
import { HeroParagraph } from "./utilities";

const Hero = () => {
  return (
    <section className="w-full min-h-[calc(100vh-140px)] flex flex-col justify-center py-10">
      <div className="text-center flex justify-center flex-col items-center">
        <div className="flex justify-center w-full relative z-10 mb-6 lg:mb-8">
          <h1 className="text-3xl text-white font-semibold jakarta leading-tight md:text-5xl lg:text-6xl tracking-tight">
            <span>Hey there,</span> <br />
            <span className="text-[var(--dark-text)]">I'm Afolabi Joseph</span>
          </h1>
        </div>
        <div className="pt-2 px-4 max-w-2xl mx-auto">
          <HeroParagraph />
        </div>
      </div>

      <div className="text-center my-[30px]">
        <Link
          to={"/projects"}
          className="bg-[--dark-bg-optimal] text-white py-[7px] pl-[37px] pr-[28px] inline-flex items-center border border-[--dark-bg-optimal] transition hover:border-white lg:pl-[47px] lg:pr-[38px] lg:py-[10px]"
        >
          <span className="text-[14px] lg:text-[16px]">Explore</span>
          <MdArrowRight size={"30px"} />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
