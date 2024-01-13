import { Socials } from "./utilities";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-screen pb-[30px] flex flex-col justify-center items-center">
      <Socials width={"200px"} />
      <p className="text-[var(--dark-text)] text-[12px]">
        Inspired by{" "}
        <a
          href="http://kadet.dev"
          target="_blank"
          rel="noreferrer noopener external"
          className="text-white tracking-[1px]"
        >
          Collins Enebeli
        </a>
      </p>
    </footer>
  );
};

export default Footer;
