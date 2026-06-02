import { motion } from "framer-motion";
import heroImage from "../assets/images/hero.jpg";
import "../styles/hero.css";

const Hero = () => {

  return (

    <section className="hero" id="home">

      <div className="container hero-container">

        {/* LEFT CONTENT */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <h3>Hello, I’m</h3>

          <h1>
            <span className="gradient-text">
              Ijeoma Mba
            </span>
          </h1>

          <h2>
            MERN Stack Developer & UI/UX Designer
          </h2>

          <p>
            I build modern full-stack web applications using the MERN stack —
            from clean responsive frontends to secure backend APIs and scalable databases.

            <br /><br />

            I also specialize in <strong>UI/UX Design with Figma</strong>,
            crafting intuitive user-centered experiences.
          </p>

          {/* BUTTONS (FIXED) */}
          <div className="hero-buttons">

            <a href="#projects" className="primary-btn">
              View Projects
            </a>

            <a href="/resume.pdf" download className="secondary-btn">
              Download CV
            </a>

            <a href="#contact" className="secondary-btn">
              Hire Me
            </a>

          </div>

          {/* STATS */}
          <div className="stats">

            <div className="stat-card glass">
              <h4>5+</h4>
              <p>Years Experience</p>
            </div>

            <div className="stat-card glass">
              <h4>60+</h4>
              <p>Projects Completed</p>
            </div>

            <div className="stat-card glass">
              <h4>40+</h4>
              <p>Happy Clients</p>
            </div>

          </div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <div className="image-wrapper">
            <img src={heroImage} alt="Ijeoma Mba" />
          </div>

        </motion.div>

      </div>

    </section>

  );
};

export default Hero;