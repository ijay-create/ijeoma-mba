import { motion } from "framer-motion";
import "../styles/skills.css";

const Skills = () => {

  const skills = [
    {
      title: "Frontend",
      items: [
        "React",
        "Next.js",
        "JavaScript",
        "ES6",
        "CSS",
        "Tailwind",
        "Bootstrap",
        "Framer Motion",
        "Material UI",
        "Styled Components",
        "SASS",
        "HTML5"
      ]
    },
    {
      title: "Backend",
      items: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
        "GraphQL",
        "JWT Auth",
        "Authentication",
        "Authorization",
        "Deployment"
      ]
    },
    {
      title: "UI/UX",
      items: [
        "Figma",
        "Adobe XD",
        "Wireframing",
        "Prototyping"
      ]
    },
    {
      title: "DevOps & Tools",
      items: [
        "GitHub",
        "GitLab",
        "Bitbucket",
        "Vercel",
        "Netlify",
        "Render",
        "Postman"
      ]
    }
  ];

  return (

    <section className="skills" id="skills">

      <div className="container">

        {/* TITLE */}
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <h2>
            My <span className="gradient-text">Skills</span>
          </h2>

        </motion.div>

        {/* GRID */}
        <div className="skills-grid">

          {skills.map((skill, index) => (

            <motion.div
              className="skill-card glass"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >

              <h3>{skill.title}</h3>

              <div className="skill-items">

                {skill.items.map((item, idx) => (
                  <div className="skill-item" key={idx}>
                    {item}
                  </div>
                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );
};

export default Skills;