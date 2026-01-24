import Static from "../../components/static";
import { DesktopProjects } from "../../pages/projects";
import AnimatedShaderBackground from "../../components/ui/animated-shader-background";

const DesktopLayout = () => {
  return (
    <main
      id="desktop-container"
      className="hidden overflow-hidden bg-[var(--dark-bg-primary)] h-screen w-full  justify-center xl:flex relative"
    >
      {/* Shader Background Overlay */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <AnimatedShaderBackground />
      </div>

      {/* Content Layer */}
      <div className="h-screen w-full relative z-10">
        <div className="relative w-full mx-auto h-full">
          <Static />
          <div
            style={{
              width: "calc(50% + 20px)",
            }}
            className="pl-[25px] h-full absolute right-0 top-0 overflow-y-auto overflow-x-hidden"
          >
            <DesktopProjects />
          </div>
        </div>
      </div>
    </main>
  );
};

export default DesktopLayout;
