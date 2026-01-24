import { Card } from "../utilities";
import data from "../../data";
import FeaturedProjectCard from "./FeaturedProjectCard";

const DesktopProjects = () => {
  const mostRecent = data.filter((project) => project.time == "recent");
  const otherProjects = data.filter((project) => project.time != "recent");

  // Split projects for 2 - column layout
  const leftColumnProjects = otherProjects.filter(
    (_, index) => index % 2 === 0,
  );
  const rightColumnProjects = otherProjects.filter(
    (_, index) => index % 2 !== 0,
  );

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
          {mostRecent.map((project, index) => (
            <FeaturedProjectCard key={index} data={project} />
          ))}
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
            {leftColumnProjects.map((project, index) => (
              <Card data={project} screen={"desktop"} key={`left - ${index}`} />
            ))}
          </div>

          {/* right column */}
          <div className="w-1/2 flex flex-col gap-[8px] mt-[40px]">
            {rightColumnProjects.map((project, index) => (
              <Card
                data={project}
                screen={"desktop"}
                key={`right - ${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesktopProjects;
