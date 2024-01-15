import { Socials } from "./utilities";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="fixed bg-[var(--dark-bg-primary)] bottom-0 left-0 w-screen pb-[20px] flex flex-col justify-center items-center"
    >
      <Socials width={"200px"} />
      <p className="text-[var(--dark-text)] text-[11px] pt-[5px]">
        Inspired by{" "}
        <a
          href="http://kadet.dev"
          target="_blank"
          rel="noreferrer noopener external"
          className="text-white tracking-[1px] ml-1"
        >
          Collins Enebeli
        </a>
      </p>
    </footer>
  );
};

export default Footer;
