import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";

import "../styles/aboutpage.css";

const AboutPage = () => {

  return (
    <div className="about-page">

      <Navbar />
      <About />
      <Footer />

    </div>
  );
};

export default AboutPage;