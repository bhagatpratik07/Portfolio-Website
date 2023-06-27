import "./Projects.css";
import { useState, useEffect } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi"; // Import the FiExternalLink icon
import useContentful from "../../context/useContentful";

export default function Projects() {
  const { getProjects } = useContentful();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProjects().then((response) => {
      setProjects(response?.items ?? []);
      setLoading(false);
    });
  }, []);

  return (
    <div className="projects-container" id="projects">
      <h1 className="projects-heading">Projects</h1>
      {loading ? (
        <p>Loading projects...</p>
      ) : (
        <div className="project-grid">
          {projects.map((project) => (
            <div key={project?.sys?.id} className="project-card">
              <img
                src={project?.fields?.image?.fields?.file?.url}
                alt={project?.fields?.image?.fields?.description}
                className="project-image"
              />
              <div className="project-info">
                <h2>{project?.fields?.name}</h2>
                <p className="project-description">
                  {project?.fields?.description}
                </p>
                <div className="project-links">
                  <a
                    href={project?.fields?.gitHub}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub size={30} />
                  </a>
                  <a
                    href={project?.fields?.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink size={30} />{" "}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
