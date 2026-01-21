import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Card, PageNavigationButtons } from "../components/utilities";
import data from "../data";
import { FaCode, FaEye } from "react-icons/fa";
import { redirect, useNavigate } from "react-router-dom";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { TechStack } from "@/components/ui/tech-icon";

const Projects = () => {
  const navigateTo = useNavigate();
  const screen = window.innerWidth;

  if (screen > "1024") {
    navigateTo("/");
  }

  return (
    <>
      <main
        id="projects-page"
        className="bg-[var(--dark-bg-primary)] w-full min-h-screen pt-[100px] xl:hidden "
      >
        <Navbar />
        <section className="px-[30px] mb-[50px]">
          <h5 className="text-[var(--dark-text)] font-[800]  text-[13px] jakart"></h5>
          <div
            id="cards-wrapper"
            className="flex flex-col gap-[30px] md:grid md:grid-cols-2 md:gap-1 lg:gap-2"
          >
            {data.map((project, index) => {
              return <Card key={index} data={project} />;
            })}
          </div>

          <PageNavigationButtons page={"projects"} />
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Projects;

export const DesktopProjects = () => {
  const mostRecent = data.filter((project) => project.time == "recent");
  const otherProjects = data.filter((project) => project.time != "recent");

  return (
    <section className="w-full pt-[80px] pb-[60px] pr-[85px] 4xl:py-[150px] 4xl:pr-[150px]">
      <div id="most-recent">
        <h3 className="text-[--dark-text-alt] jakarta uppercase font-[800] text-[13px] mb-[30px] 4xl:text-[20px]">
          most recent
        </h3>

        {/* Cards wrapper for most recent */}
        <div
          id="most-recent-wrapper"
          className="flex flex-col gap-[8px] relative"
        >
          {mostRecent.map((card, index) => {
            return (
              <div
                key={index}
                className="big-card relative bg-transparent border border-[var(--dark-text-alt)] rounded-xl h-[200px] p-[40px] flex flex-col justify-between transition-all 4xl:h-[280px] 4xl:p-[60px]"
              >
                <GlowingEffect
                  spread={50}
                  glow={true}
                  disabled={false}
                  proximity={80}
                  inactiveZone={0.1}
                  borderWidth={2}
                  movementDuration={0.3}
                />
                <div className="pointer-events-none">
                  <h2 className="text-[20px] text-white font-[700] 4xl:text-[30px] 4xl:mb-[10px]">
                    {card.name}
                  </h2>
                  <div className="my-[8px]">
                    <TechStack
                      stack={card.stack}
                      size="w-5 h-5 4xl:w-6 4xl:h-6"
                      gap="gap-3"
                    />
                  </div>
                  <p className="text-[var(--dark-text-alt)] text-[12px] 4xl:text-[14px]">
                    {card.description}
                  </p>
                </div>

                <div className="text-white flex gap-[30px]">
                  {card.code && (
                    <a href={card.code} className="flex items-center gap-2">
                      <FaCode className="lg:scale-[1.2] 4xl:scale-[1.5]" />{" "}
                      <span className="text-[12px] 4xl:text-[16px]">Code</span>
                    </a>
                  )}
                  {card.live && (
                    <a href={card.live} className="flex items-center gap-2">
                      <FaEye className="lg:scale-[1.2] 4xl:scale-[1.5]" />{" "}
                      <span className="text-[12px] 4xl:text-[16px]">Live</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div id="other-projects" className="h-fit mt-[50px] ">
        <h3 className="text-[--dark-text-alt] jakarta uppercase font-[800] text-[13px] mb-[30px] 4xl:text-[20px]">
          other projects
        </h3>

        {/* Cards wrapper for other projects */}
        <div
          id="other-projects-wrapper"
          className="flex gap-[8px] w-full relative"
        >
          {/* left column */}
          <div className="w-1/2 flex flex-col gap-[8px]">
            {otherProjects.map((project, index) => {
              if (!(index % 2)) {
                return <Card data={project} screen={"desktop"} key={index} />;
              }
            })}
          </div>

          {/* right column */}
          <div className="w-1/2 flex flex-col gap-[8px] mt-[40px]">
            {otherProjects.map((project, index) => {
              if (index % 2) {
                return <Card data={project} screen={"desktop"} key={index} />;
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
