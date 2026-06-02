import { motion } from "framer-motion";

import "../styles/experience.css";

const Experience = () => {

  const experiences = [
    {
      year: "2025",
      role: "Senior MERN Developer",
      company: "Tech Studio"
    },
    {
      year: "2024",
      role: "UI/UX Designer",
      company: "Creative Agency"
    },
    {
      year: "2023",
      role: "Frontend Developer",
      company: "Freelance"
    }
  ];

  return (

    <section className="experience">

      <div className="container">

        <motion.div
          className="section-title"
          initial={{ opacity:0, y:50 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.7 }}
          viewport={{ once:true }}
        >

          <h2>
            Work <span className="gradient-text">Experience</span>
          </h2>

        </motion.div>

        <div className="timeline">

          {
            experiences.map((exp, index) => (

              <motion.div
                className="timeline-item"
                key={index}
                initial={{ opacity:0, x:-50 }}
                whileInView={{ opacity:1, x:0 }}
                transition={{ duration:0.6 }}
                viewport={{ once:true }}
              >

                <div className="timeline-dot"></div>

                <div className="timeline-content glass">

                  <span>
                    {exp.year}
                  </span>

                  <h3>
                    {exp.role}
                  </h3>

                  <p>
                    {exp.company}
                  </p>

                </div>

              </motion.div>

            ))
          }

        </div>

      </div>

    </section>

  );
};

export default Experience;