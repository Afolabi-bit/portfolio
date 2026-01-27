import { DesktopFooter } from "./footer";
import { HeroParagraph, DesktopLinkGroup } from "./utilities";

const Static = () => {
  return (
    <section
      style={{
        width: "calc(50% - 20px)",
      }}
      className=" h-screen left-0 top-0 z-20 absolute overflow-hidden py-[60px] pl-[80px] flex flex-col justify-between 4xl:pl-[150px] 4xl:py-[150px]"
    >
      {/* Hero section */}
      <div>
        <div className="relative mb-8">
          <h1 className="text-white text-4xl font-semibold tracking-tight leading-tight 3xl:text-5xl 4xl:text-7xl 4xl:mb-8">
            <span>Hey there,</span> <br />
            <span className="text-[var(--dark-text)]">I'm Afolabi Joseph.</span>
          </h1>
        </div>
        <div>
          <HeroParagraph />
        </div>
      </div>

      {/* Page Links */}
      <DesktopLinkGroup page={"home"} />

      {/* Footer */}
      <DesktopFooter />
    </section>
  );
};

export default Static;
