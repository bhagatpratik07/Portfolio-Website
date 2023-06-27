import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Home.css";

export default function Home() {
  return (
    <section id="home" className="home-section">
      <h1 className="name animate-fade-in">Pratik Bhagat</h1>
      <p className="introduction animate-fade-in">
        I'm a passionate full stack developer who loves solving problems.
      </p>
      <div className="social-icons">
        <a
          href="https://github.com/bhagatpratik07"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon github" />
        </a>
        <a
          href="https://www.linkedin.com/in/pratik-bhagat07/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="icon linkedin" />
        </a>
        <a
          href="https://twitter.com/bhagatpratik07"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="icon twitter" />
        </a>
      </div>
    </section>
  );
}
