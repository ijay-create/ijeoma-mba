import {
  FaGithub,
  FaLinkedin,
  FaTwitter
} from "react-icons/fa";

import "../styles/footer.css";

const Footer = () => {

  return (

    <footer className="footer">

      <div className="footer-silhouette"></div>

      <div className="container footer-container">

        <div className="footer-logo">
          Dev<span>Designer</span>
        </div>

        <p>
          Designing seamless digital experiences with
          creativity and code.
        </p>

        <div className="footer-socials">

          <a href="#">
            <FaGithub />
          </a>

          <a href="#">
            <FaLinkedin />
          </a>

          <a href="#">
            <FaTwitter />
          </a>

        </div>

        <div className="footer-bottom">
          © 2024 All Rights Reserved.
        </div>

      </div>

    </footer>

  );
};

export default Footer;