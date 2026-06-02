import { motion } from "framer-motion";

import {
  FaCode,
  FaPalette,
  FaMobileAlt,
  FaRocket
} from "react-icons/fa";

import "../styles/services.css";

const Services = () => {

  const services = [
    {
      icon: <FaCode />,
      title: "Web Development",
      desc: "Modern and scalable full stack applications."
    },
    {
      icon: <FaPalette />,
      title: "UI/UX Design",
      desc: "Beautiful and intuitive user experiences."
    },
    {
      icon: <FaMobileAlt />,
      title: "Responsive Design",
      desc: "Pixel-perfect responsive interfaces."
    },
    {
      icon: <FaRocket />,
      title: "Performance Optimization",
      desc: "Fast and optimized applications."
    }
  ];

  return (

    <section className="services">

      <div className="container">

        <motion.div
          className="section-title"
          initial={{ opacity:0, y:50 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.7 }}
          viewport={{ once:true }}
        >

          <h2>
            My <span className="gradient-text">Services</span>
          </h2>

        </motion.div>

        <div className="services-grid">

          {
            services.map((service, index) => (

              <motion.div
                className="service-card glass"
                key={index}
                initial={{ opacity:0, y:50 }}
                whileInView={{ opacity:1, y:0 }}
                transition={{ duration:0.6, delay:index * 0.2 }}
                viewport={{ once:true }}
              >

                <div className="service-icon">
                  {service.icon}
                </div>

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.desc}
                </p>

              </motion.div>

            ))
          }

        </div>

      </div>

    </section>

  );
};

export default Services;