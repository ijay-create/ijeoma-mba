import { motion } from "framer-motion";
import {
  FaCode,
  FaPalette,
  FaLaptopCode
} from "react-icons/fa";

import "../styles/about.css";

const About = () => {

  return (

    <section className="about" id="about">

      <div className="container">

        <motion.div
          className="section-title"
          initial={{ opacity:0, y:50 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.7 }}
        >

          <h2>
            About <span className="gradient-text">Me</span>
          </h2>

          <p>
            Passionate about building elegant digital
            experiences that blend design and technology.
          </p>

        </motion.div>

        <div className="about-container">

          <motion.div
            className="about-left"
            initial={{ opacity:0, x:-100 }}
            whileInView={{ opacity:1, x:0 }}
            transition={{ duration:0.8 }}
          >

            <div className="about-card glass">

              <FaLaptopCode className="about-icon" />

              <h3>
                Full Stack Development
              </h3>

              <p>
                Creating scalable and modern web applications
                using the MERN stack with clean architecture.
              </p>

            </div>

            <div className="about-card glass">

              <FaPalette className="about-icon" />

              <h3>
                UI/UX Design
              </h3>

              <p>
                Designing intuitive interfaces and seamless
                user experiences focused on usability.
              </p>

            </div>

          </motion.div>

          <motion.div
            className="about-right"
            initial={{ opacity:0, x:100 }}
            whileInView={{ opacity:1, x:0 }}
            transition={{ duration:0.8 }}
          >

            <h3>
              Turning Ideas Into
              <span className="gradient-text"> Digital Reality</span>
            </h3>

            <p>
              I specialize in building modern web applications
              and premium user interfaces that combine beauty,
              performance, and functionality.
            </p>

            <p>
              With expertise in both development and UI/UX
              design, I create products that not only look
              stunning but also deliver exceptional user
              experiences across all devices.
            </p>

            <div className="about-highlight glass">

              <FaCode className="highlight-icon" />

              <div>
                <h4>
                  Clean Code + Beautiful Design
                </h4>

                <p>
                  Every project is built with performance,
                  responsiveness, and scalability in mind.
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>

  );
};

export default About;