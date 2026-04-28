import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Static from "../../components/static";
import DesktopProjects from "../../components/projects/DesktopProjects";
import AnimatedShaderBackground from "../../components/ui/animated-shader-background";

const DesktopLayout = () => {
  const navigateTo = useNavigate();

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1280) navigateTo("/");
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [navigateTo]);

  return (
    <main
      id="desktop-container"
      aria-label="Desktop Layout"
      className="hidden overflow-hidden bg-[var(--dark-bg-primary)] h-screen w-full justify-center xl:flex relative"
    >
      {/* Shader Background Overlay */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <AnimatedShaderBackground />
      </div>

      {/* Content Layer */}
      <div className="h-full w-full relative z-10">
        <div className="relative w-full mx-auto h-full">
          <Static />
          <div className="w-[calc(50%+20px)] pl-[25px] h-full absolute right-0 top-0 overflow-y-auto overflow-x-hidden">
            <DesktopProjects />
          </div>
        </div>
      </div>
    </main>
  );
};

export default DesktopLayout;
