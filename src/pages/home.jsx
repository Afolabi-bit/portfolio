import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Static from "../components/static";
import { DesktopProjects } from "./projects";

const Home = () => {
  return (
    <>
      <main
        id="mobile-container"
        className="w-screen bg-[color:var(--dark-bg-primary)] flex place-items-center justify-center relative xl:hidden"
      >
        <Navbar />
        <div className="container mx-auto px-4">
          <Hero />
        </div>
        <Footer />
      </main>

      <main
        id="desktop-container"
        className="hidden overflow-hidden bg-[var(--dark-bg-primary)] h-screen w-full  justify-center xl:flex"
      >
        <div className="width-container  h-screen w-[1280px]">
          <div className="relative w-full mx-auto h-full">
            <Static />
            <div className="w-[50%] h-full absolute right-0 top-0 overflow-y-scroll scrollbar">
              <DesktopProjects />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
