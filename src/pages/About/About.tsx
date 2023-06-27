import "./About.css";
import hackathonImage from "../../assets/hackathon_win.jpg";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I am a passionate full stack developer based in India, constantly
            driven by my curiosity to explore new technologies and solve complex
            problems. With a solid foundation in both front-end and back-end
            development, I strive to create innovative and user-centric
            solutions. I take pride in my achievements, having won the "
            <a
              href="https://twitter.com/bhagatpratik07/status/1563395001077284864?s=20"
              target="_blank"
              rel="noopener noreferrer"
            >
              Smart India Hackathon 2022
            </a>{" "}
            " and "
            <a
              href="https://twitter.com/bhagatpratik07/status/1665334041116135425?s=20"
              target="_blank"
              rel="noopener noreferrer"
            >
              MumbaiHacks 2023
            </a>
            ", which further fueled my passion for creating impactful projects.
            When I'm not coding, you'll often find me engrossed in watching
            football matches or competing in intense FIFA gaming sessions. As a
            developer, I draw inspiration from characters like Harvey Specter
            from Suits, embodying his relentless pursuit of excellence and
            tenacity. I am always eager to collaborate, learn, and contribute to
            exciting projects that make a difference.
          </p>
        </div>
        <div className="about-image">
          <img src={hackathonImage} alt="Hackathon Winning Moment" />
        </div>
      </div>
    </section>
  );
}
