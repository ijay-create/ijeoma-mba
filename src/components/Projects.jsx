import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import jennicksImg from "../assets/projects/jennicks.png";
import exorseImg from "../assets/projects/exorse.png";
import luxewigsImg from "../assets/projects/luxewigs.png";
import BrastraImg from "../assets/projects/brastra.png";
import fintechImg from "../assets/projects/fintech.png";
import smilecareImg from "../assets/projects/smilecare.png";
import crmImg from "../assets/projects/crm.png"



import "../styles/projects.css";

const Projects = () => {

  const [activeFilter, setActiveFilter] = useState("All");
  
  const projects = [
    {
      title: "Fintech App",
      image: fintechImg,
      desc: "This is a full-stack digital banking web app where users can create accounts, log in, view their balance, and send money to other users securely",
      tech: ["React", "Node.js", "Socket.io (real-time communication)", "JWT (authentication)", "PostgreSQL"],
      category: "Fullstack",
      github: "https://github.com/ijay-create/bank-server.git",
      live: "https://bank-client-ecru.vercel.app"
    },

    {
      title: "Jennicks Food",
      image: jennicksImg,
      desc: "The website is designed to reflect a warm and high-end food brand, featuring handcrafted visuals, animated sections, and a clean layout optimized for both desktop and mobile users.It highlights a mix of bakery products and traditional Nigerian meals such as jollof rice, fried rice, fufu, and soups—bringing together local flavor and modern web design.",
      tech: ["React", "Framer Motion", "Vite", "Vanilla CSS"],
      category: "Frontend",
      github: "https://github.com/ijay-create/jennicksfood.git",
      live: "https://jennicksfoods-21b8b1.netlify.app/"
    },

    {
      title: "LuxeWigs",
      image: luxewigsImg,
      desc: "Luxury wig e-commerce website with Paystack payments, cart & wishlist system, admin dashboard, Cloudinary uploads, and full-stack MERN architecture optimized for mobile and desktop shopping experiences.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      category: "Fullstack",
      github: "https://github.com/ijay-create/LuxeWigs.git",
      live: "https://luxewigs-git-main-ijay-creates-projects.vercel.app/"
    },
    {
      title: "Brastra Website",
      image: BrastraImg,
      desc: "Modern UI/UX design for a food brand website.",
      tech: ["Figma", "Adobe XD", "UI/UX Design"],
      category: "UI/UX",
      github: "https://www.figma.com/design/htcufrJ2LUXIjt4Rdwtets/Brastra-Website?node-id=1-1154&t=XuCv7f3YlDqizjYW-1",
      live: "https://www.figma.com/design/htcufrJ2LUXIjt4Rdwtets/Brastra-Website?node-id=1-1154&t=XuCv7f3YlDqizjYW-1"
    },
    {
      title: "Exorse Portfolio",
      image: exorseImg,
      desc: "Description for project 5.",
      tech: ["React", "Custom CSS", "Framer Motion", "Vite",],
      category: "Frontend",
      github: "https://github.com/ijay-create/exorse-portfolio.git",
      live: "https://exorse-portfolio.vercel.app/"
    },
    {
      title: "SmileCare Dentals",
      image: smilecareImg,
      desc: "SmileCare is a modern, responsive dental clinic web application built with React and Vite, designed to simulate a real-world healthcare booking system with a clean SaaS-style interface.",
      tech: ["React", "Custom CSS", "Framer Motion", "Vite",],
      category: "Frontend",
      github: "https://github.com/ijay-create/smile-care.git",
      live: "https://smile-care-teal-sigma.vercel.app/"
    },
    {
      title: "CRM Dashboard",
      image: crmImg,
      desc: "A modern full-stack Customer Relationship Management (CRM) platform designed to help businesses manage leads, customers, sales pipelines, and internal operations in one centralized system.",
      tech: ["React", "Custom CSS", "Framer Motion", "Vite","PostreSQL", "Node.js", "Express"],
      category: "Fullstack",
      github: "https://github.com/ijay-create/crm-app-server.git",
      live: "https://crm-app-client-phi.vercel.app/"
    }
  ];

  const filteredProjects = projects.filter((p) =>
    activeFilter === "All" ? true : p.category === activeFilter
  );

  return (
    <section className="projects" id="projects">

      <div className="container">

        <motion.div className="section-title">
          <h2>
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* FILTERS */}
        <div className="project-filters">
          {["All", "Frontend", "Fullstack", "UI/UX"].map((item) => (
            <button
              key={item}
              className={activeFilter === item ? "active-filter" : ""}
              onClick={() => setActiveFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="projects-grid">

          {filteredProjects.map((project, index) => (

            <motion.div
              className="project-card glass"
              key={index}
            >

              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-content">

                <h3>{project.title}</h3>
                <p>{project.desc}</p>

                <div className="tech-stack">
                  {project.tech.map((t, i) => (
                    <span key={i}>{t}</span>
                  ))}
                </div>

                <div className="project-links">

                  <a href={project.github} target="_blank">
                    <FaGithub />
                  </a>

                  <a href={project.live} target="_blank">
                    <FaExternalLinkAlt />
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Projects;






