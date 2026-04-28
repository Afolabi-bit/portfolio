import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Card } from "../components/Card";
import { PageNavigationButtons } from "../components/PageNavigationButtons";
import data from "../data";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Projects = () => {
  const navigateTo = useNavigate();

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) navigateTo("/");
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [navigateTo]);

  return (
    <>
      <main
        id="projects-page"
        className="bg-[var(--dark-bg-primary)] w-full min-h-screen pt-[100px] xl:hidden"
      >
        <Navbar />
        <section className="px-[30px] mb-[50px]">
          <h5 className="text-[var(--dark-text)] font-[800] text-[13px] jakart"></h5>
          <div
            id="cards-wrapper"
            className="flex flex-col gap-[30px] md:grid md:grid-cols-2 md:gap-1 lg:gap-2"
          >
            {data.map((project, index) => (
              <Card key={index} data={project} screen="mobile" />
            ))}
          </div>
          <PageNavigationButtons page={"projects"} />
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Projects;
