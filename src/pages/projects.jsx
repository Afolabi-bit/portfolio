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
  return (
    <section className="bg-[var(--dark-bg-primary)] w-full pt-[80px] pb-[60px] pr-[85px]">
      <div id="most-recent">
        <h3 className="text-[--dark-text-alt] jakarta uppercase font-[800] text-[14px] mb-[30px]">
          most recent
        </h3>
        <div className="bg-[var(--dark-bg-minimal)] h-[240px] pt-[30px] pb-[50px] px-[20px] flex flex-col justify-between">
          <div>
            <h2 className="text-[30px] text-white font-[700] jakarta ">
              {mostRecent.name}
            </h2>
            <h5 className="flex my-[5px] text-[var(--dark-text)]">
              {mostRecent.stack.map((tool, index) => {
                if (index === mostRecent.stack.length - 1) {
                  return (
                    <span
                      key={index}
                      className=" text-[15px] font-[700] tracking-wide 2xl:text-[16px]"
                    >
                      {" "}
                      {tool}
                    </span>
                  );
                }
                return (
                  <span
                    key={index}
                    className="text-[15px]  font-[700] tracking-wide mr-[5px] 2xl:text-[16px]"
                  >
                    {tool},
                  </span>
                );
              })}
            </h5>
            <p className="text-[var(--dark-text-alt)] text-[16px]">
              {mostRecent.description}
            </p>
          </div>

          <div className="text-white flex gap-[30px]">
            {mostRecent.code && (
              <a href={mostRecent.code} className="flex items-center gap-2">
                <FaCode className="lg:scale-[1.5]" />{" "}
                <span className="text-[14px] 2xl:text-[16px]">Code</span>
              </a>
            )}
            {mostRecent.live && (
              <a href={mostRecent.live} className="flex items-center gap-2">
                <FaEye className="lg:scale-[1.5]" />{" "}
                <span className="text-[14px] 2xl:text-[16px]">Live</span>
              </a>
            )}
          </div>
        </div>
      </div>

      <div id="other-projects" className="h-[400vh] w-full bg-slate-500"></div>
    </section>
  );
};

export default Projects;
