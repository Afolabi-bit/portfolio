import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import AnimatedShaderBackground from "../../components/ui/animated-shader-background";

const MobileLayout = () => {
  return (
    <main
      id="mobile-container"
      className="w-full min-h-screen bg-[color:var(--dark-bg-primary)] flex flex-col place-items-center justify-between relative xl:hidden"
    >
      {/* Shader Background Overlay */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <AnimatedShaderBackground />
      </div>

      {/* Content Layer */}
      <Navbar />
      <div className="container mx-auto px-4 relative z-10 pt-[80px] pb-[100px]">
        <Hero />
      </div>
      <Footer />
    </main>
  );
};

export default MobileLayout;
