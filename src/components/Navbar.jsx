import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import "../styles/navbar.css";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {

    const handleScroll = () => {

      // CLOSE MOBILE MENU ON SCROLL (important UX fix)
      if (menuOpen) setMenuOpen(false);

      const scrollTop = window.scrollY;

      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress =
        docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setScrollProgress(progress);

    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, [menuOpen]);

  return (

    <nav className="navbar">

      {/* PROGRESS BAR */}
      <div
        className="progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="container nav-container">

        {/* LOGO */}
        <div className="logo">
          Ijay<span>Tech</span>
        </div>

        {/* DESKTOP NAV */}
        <ul className="nav-links">

          <li>
            <a href="#home" onClick={closeMenu}>Home</a>
          </li>

          <li>
            <a href="#about" onClick={closeMenu}>About</a>
          </li>

          <li>
            <a href="#skills" onClick={closeMenu}>Skills</a>
          </li>

          <li>
            <a href="#projects" onClick={closeMenu}>Projects</a>
          </li>

          <li>
            <a
              href="#contact"
              className="hire-btn"
              onClick={closeMenu}
            >
              Hire Me
            </a>
          </li>

        </ul>

        {/* MOBILE ICON */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>

      {/* MOBILE MENU */}
      <ul className={`mobile-nav ${menuOpen ? "active" : ""}`}>

        <li>
          <a href="#home" onClick={closeMenu}>Home</a>
        </li>

        <li>
          <a href="#about" onClick={closeMenu}>About</a>
        </li>

        <li>
          <a href="#skills" onClick={closeMenu}>Skills</a>
        </li>

        <li>
          <a href="#projects" onClick={closeMenu}>Projects</a>
        </li>

        <li>
          <a
            href="#contact"
            className="hire-btn"
            onClick={closeMenu}
          >
            Hire Me
          </a>
        </li>

      </ul>

    </nav>

  );
};

export default Navbar;