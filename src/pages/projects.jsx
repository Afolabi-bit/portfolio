import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Card, PageNavigationButtons } from "../components/utilities";
import data from "../data";
import { Link } from "react-router-dom";
import { FaCode, FaEye } from "react-icons/fa";

const Projects = () => {
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
      <main className="hidden xl:block">
        <h1>projects page</h1>
        <Link to={"/"}>Home</Link>
      </main>
    </>
  );
};

export const DesktopProjects = () => {
  const mostRecent = data.filter((project) => project.time == "recent")[0];
  const otherProjects = data.filter((project) => project.time != "recent");

  // OVERLAY ON HOVER FUNCTIONALITY
  // let otherProjectsElement = document.getElementById("other-projects");
  // let otherProjectsWrapper = document.getElementById("other-projects-wrapper");
  // let cards = document.querySelectorAll(".card");
  // console.log(cards);

  // otherProjectsWrapper.addEventListener("mouseover", (e) => {
  //   let currentElement = e.target;
  //   otherProjectsElement.classList.add("overlay");
  //   currentElement.style.zIndex = "10";
  // });

  // otherProjectsWrapper.addEventListener("mouseleave", () => {
  //   otherProjectsElement.classList.remove("overlay");
  //   cards.forEach((card) => (card.style.zIndex = "unset"));
  // });

  return (
    <section className="bg-[var(--dark-bg-primary)] w-full pt-[80px] pb-[60px] pr-[85px]">
      <div id="most-recent">
        <h3 className="text-[--dark-text-alt] jakarta uppercase font-[800] text-[13px] mb-[30px]">
          most recent
        </h3>
        <div
          id="most-recent-wrapper"
          className="bg-[var(--dark-bg-minimal)] h-[230px] p-[40px] flex flex-col justify-between hover:scale-105 transition-all relative"
        >
          <div className="pointer-events-none">
            <h2 className="text-[20px] text-white font-[700] ">
              {mostRecent.name}
            </h2>
            <h5 className="flex jakarta my-[5px] text-[var(--dark-text)]">
              {mostRecent.stack.map((tool, index) => {
                if (index === mostRecent.stack.length - 1) {
                  return (
                    <span
                      key={index}
                      className=" text-[12px] font-[700] tracking-wide "
                    >
                      {" "}
                      {tool}
                    </span>
                  );
                }
                return (
                  <span
                    key={index}
                    className="text-[12px]  font-[700] tracking-wide mr-[5px] "
                  >
                    {tool},
                  </span>
                );
              })}
            </h5>
            <p className="text-[var(--dark-text-alt)] text-[12px]">
              {mostRecent.description}
            </p>
          </div>

          <div className="text-white flex gap-[30px]">
            {mostRecent.code && (
              <a href={mostRecent.code} className="flex items-center gap-2">
                <FaCode className="lg:scale-[1.2]" />{" "}
                <span className="text-[12px]">Code</span>
              </a>
            )}
            {mostRecent.live && (
              <a href={mostRecent.live} className="flex items-center gap-2">
                <FaEye className="lg:scale-[1.2]" />{" "}
                <span className="text-[12px]">Live</span>
              </a>
            )}
          </div>
        </div>
      </div>

      <div
        id="other-projects"
        className="h-fit  bg-[var(--dark-bg-primary)] mt-[70px] "
      >
        <h3 className="text-[--dark-text-alt] jakarta uppercase font-[800] text-[13px] mb-[30px]">
          other projects
        </h3>
        <div id="other-projects-wrapper" className="flex gap-[4px] w-full">
          {/* left column */}
          <div className="w-1/2 flex flex-col gap-[4px]">
            {otherProjects.map((project, index) => {
              if (!(index % 2)) {
                return <Card data={project} screen={"desktop"} key={index} />;
              }
            })}
          </div>

          {/* right column */}
          <div className="w-1/2 flex flex-col gap-[4px] mt-[40px]">
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

export default Projects;
