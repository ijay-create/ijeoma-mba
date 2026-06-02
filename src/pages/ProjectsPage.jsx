import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

import "../styles/projectspage.css";

const ProjectsPage = () => {

  return (
    <div className="projects-page">

      <Navbar />
      <Projects />
      <Footer />

    </div>
  );
};

export default ProjectsPage;