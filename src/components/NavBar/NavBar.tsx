import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import "./NavBar.css";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleResumeClick = () => {
    handleMenuClick();
    window.open(
      "https://drive.google.com/file/d/15n371mDDRoqEMVNbwm-B4MSovjbcuLxY/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <nav className="navbar">
      <Link to="home" className="logo">
        Pratik.dev
      </Link>
      <div className="menu-toggle" onClick={handleMenuClick}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={handleMenuClick}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={handleMenuClick}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            onClick={handleMenuClick}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={handleMenuClick}
          >
            Contact
          </Link>
        </li>
        <li>
          <button className="resume-button" onClick={handleResumeClick}>
            Resume
          </button>
        </li>
      </ul>
    </nav>
  );
}
