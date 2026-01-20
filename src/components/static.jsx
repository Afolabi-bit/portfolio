import { DesktopFooter } from "./footer";
import { HeroParagraph, LinkGroup } from "./utilities";

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
        <div className=" relative">
          <h1 className="text-white text-[40px]  font-[600] 3xl:text-[50px] 4xl:text-[80px] 4xl:mb-[30px]">
            <span>Hey there,</span> <br className="" />
            <span>I'm Afolabi Joseph.</span>
          </h1>
          <img
            src="https://res.cloudinary.com/dkpoealta/image/upload/v1705073703/wave_wqkqvu.webp"
            alt="a waving hand"
            id="waving-hand"
            className="w-[120px] h-[120px]  absolute top-0 right-[0px] 2xl:top-[-15px] 2xl:right-[120px] 3xl:right-[150px] 4xl:right-[400px] 4xl:top-[05px] 4xl:scale-[1.5]"
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
