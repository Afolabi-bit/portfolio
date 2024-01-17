import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Static from "../components/static";

const Home = () => {
  return (
    <main
      id="mobile-container"
      className="w-screen h-[100svh] bg-[color:var(--dark-bg-primary)] flex place-items-center justify-center relative xl:hidden"
    >
      <Navbar />
      <div className="container mx-auto px-4">
        <Static />
      </div>
      <Footer />
    </main>
  );
};

export default Home;
