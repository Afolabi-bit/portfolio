import { useMemo } from "react";
import { Card } from "../Card";
import data from "../../data";
import FeaturedProjectCard from "./FeaturedProjectCard";

const DesktopProjects = () => {
  const { mostRecent, leftColumnProjects, rightColumnProjects } =
    useMemo(() => {
      const mostRecent = data.filter((project) => project.time == "recent");
      const otherProjects = data.filter((project) => project.time != "recent");

      const leftColumnProjects = otherProjects.filter(
        (_, index) => index % 2 === 0,
      );
      const rightColumnProjects = otherProjects.filter(
        (_, index) => index % 2 !== 0,
      );
      return { mostRecent, leftColumnProjects, rightColumnProjects };
    }, []);

  return (
    <section className="w-full pt-20 pb-15 pr-8.75 2xl:pr-21.25 4xl:py-37.5 4xl:pr-37.5">
      <div id="most-recent">
        <h3 className="text-(--dark-text-alt) jakarta uppercase font-extrabold text-[13px] mb-7.5 4xl:text-[20px]">
          most recent
        </h3>

        {/* Cards wrapper for most recent */}
        <div
          id="most-recent-wrapper"
          className="flex flex-col gap-4 sm:gap-5 relative"
        >
          {mostRecent.map((project, index) => (
            <FeaturedProjectCard key={index} data={project} />
          ))}
        </div>
      </div>

      <div id="other-projects" className="h-fit mt-12.5">
        <h3 className="text-(--dark-text-alt) jakarta uppercase font-extrabold text-[13px] mb-7.5 4xl:text-[20px]">
          other projects
        </h3>

        {/* Cards wrapper for other projects */}
        <div
          id="other-projects-wrapper"
          className="flex gap-4 w-full relative"
        >
          {/* left column */}
          <div className="w-1/2 flex flex-col gap-4">
            {leftColumnProjects.map((project, index) => (
              <Card data={project} screen={"desktop"} key={`left - ${index}`} />
            ))}
          </div>

          {/* right column */}
          <div className="w-1/2 flex flex-col gap-4 mt-10">
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