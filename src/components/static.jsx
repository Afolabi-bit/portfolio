import { Link } from "react-router-dom";
import { MdArrowRight } from "react-icons/md";

const Static = () => {
  return (
    <section className="w-full h-screen flex flex-col justify-center">
      <div className="text-center">
        <div className="flex justify-center items-center relative z-10">
          <h1 className="text-[1.5rem] text-white text-left font-semibold jakarta leading-[2.6rem] ">
            <span>Hey there,</span> <br />
            <span>I'm Afolabi Joseph</span>
          </h1>
          <img
            src="https://res.cloudinary.com/dkpoealta/image/upload/v1705073703/wave_wqkqvu.webp"
            alt="a waving hand"
            id="waving-hand"
            className="w-[80px] h-[80px] translate-y-[5px] absolute top-[-20px] right-[80px]"
          />
        </div>
        <div className="pt-[2px] px-[7px]">
          <p className="text-[14px] text-[var(--dark-text)]">
            I'm a <span className="accent">junior software engineer </span>
            that is keen on <span className="accent">providing solutions </span>
            using <span className="accent">frontend technologies</span>. I am
            fascinated by <span className="accent">functionality</span>,
            accessibity, <span className="accent">minimalist design</span>, user
            experience,
            <span className="accent"> web animations</span>, and python.
          </p>
        </div>
      </div>

      <div className="text-center  my-[30px]">
        <Link
          to={"/projects"}
          className="bg-[--dark-bg-optimal] text-white py-[7px] pl-[37px] pr-[28px] inline-flex items-center border border-[--dark-bg-optimal] transition hover:border-white"
        >
          <span className="text-[14px]">Explore</span>
          <MdArrowRight size={"30px"} />
        </Link>
      </div>
    </section>
  );
};

export default Static;
