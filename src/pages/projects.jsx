import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Card } from "../components/utilities";
import data from "../data";

const Projects = () => {
  return (
    <main
      id="projects-page"
      className="bg-[var(--dark-bg-primary)] w-full min-h-screen pt-[100px]  "
    >
      <Navbar />
      <section className="px-[30px]">
        <h5 className="text-[var(--dark-text)] font-[800]  text-[13px] jakart"></h5>
        <div className="flex flex-col gap-[30px]">
          {data.map((project, index) => {
            return <Card key={index} data={project} />;
          })}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Projects;
