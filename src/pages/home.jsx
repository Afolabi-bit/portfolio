import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Static from "../components/static";
import { DesktopProjects } from "./projects";
import AnimatedShaderBackground from "../components/ui/animated-shader-background";

const Home = () => {
  return (
    <>
      <main
        id="mobile-container"
        className="w-screen bg-[color:var(--dark-bg-primary)] flex place-items-center justify-center relative xl:hidden"
      >
        {/* Shader Background Overlay */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <AnimatedShaderBackground />
        </div>

        {/* Content Layer */}
        <Navbar />
        <div className="container mx-auto px-4 relative z-10">
          <Hero />
        </div>
        <Footer />
      </main>

      <main
        id="desktop-container"
        className="hidden overflow-hidden bg-[var(--dark-bg-primary)] h-screen w-full  justify-center xl:flex relative"
      >
        {/* Shader Background Overlay */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <AnimatedShaderBackground />
        </div>

        {/* Content Layer */}
        <div className="width-container h-screen w-full relative z-10">
          <div className="relative w-full mx-auto h-full">
            <Static />
            <div
              style={{
                width: "calc(50% + 20px)",
              }}
              className="pl-[25px] h-full absolute right-0 top-0 overflow-y-scroll overflow-x-visible scrollbar"
            >
              <DesktopProjects />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
