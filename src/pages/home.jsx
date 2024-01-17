import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Static from "../components/static";

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
        className="hidden overflow-hidden h-full bg-[var(--dark-bg-primary)] xl:block"
      >
        <div className="width-container w-[1280px] mx-auto h-full  relative">
          <Static />
        </div>
      </main>
    </>
  );
};

export default Home;
