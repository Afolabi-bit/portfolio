import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Hero from "../components/hero";

const Home = () => {
  return (
    <>
      <main
        id="mobile-container"
        className="w-screen h-[100svh] bg-[color:var(--dark-bg-primary)] flex place-items-center justify-center relative xl:hidden"
      >
        <Navbar />
        <div className="container mx-auto px-4">
          <Hero />
        </div>
        <Footer />
      </main>

      <main className="hidden xl:bg-emerald-500 xl:block">
        <h1>Desktop</h1>
        <Link to={"/projects"}>Explore</Link>
      </main>
    </>
  );
};

export default Home;
