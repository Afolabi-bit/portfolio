import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Card, PageNavigationButtons } from "../components/utilities";
import data from "../data";
import { Link } from "react-router-dom";

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

export default Projects;
