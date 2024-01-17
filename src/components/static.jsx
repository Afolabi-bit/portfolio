import { DesktopFooter } from "./footer";
import { HeroParagraph, LinkGroup } from "./utilities";

const Static = () => {
  return (
    <section className="w-1/2 h-screen left-0 top-0 z-50 fixed overflow-hidden py-[60px] pl-[85px] flex flex-col justify-between">
      {/* Hero section */}
      <div>
        <div className=" relative">
          <h1 className="text-white text-[40px]  font-[600]">
            <span>Hey there,</span> <br className="" />
            <span>I'm Afolabi Joseph.</span>
          </h1>
          <img
            src="https://res.cloudinary.com/dkpoealta/image/upload/v1705073703/wave_wqkqvu.webp"
            alt="a waving hand"
            id="waving-hand"
            className="w-[120px] h-[120px]  absolute top-0 right-[90px]"
          />
        </div>
        <div>
          <HeroParagraph />
        </div>
      </div>

      {/* Page Links */}
      <LinkGroup page={"home"} />

      {/* Footer */}
      <DesktopFooter />
    </section>
  );
};

export default Static;
