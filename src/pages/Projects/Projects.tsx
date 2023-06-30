/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-explicit-any */
import "./Projects.css";
import { useState, useEffect } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi"; // Import the FiExternalLink icon
import useContentful from "../../context/useContentful";
import {
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
  CCol,
  CRow,
} from "@coreui/react";
import hackathonImage from "../../assets/hackathon_win.jpg";

function Projects() {
  const { getProjects } = useContentful();
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProjects().then((response) => {
      setProjects(response?.items!);
      console.log(projects);
      setLoading(false);
    });
  }, []);

  return (
    <div className="projects-container" id="projects">
      <h1 className="projects-heading">Projects</h1>
      {loading ? (
        <p>Loading projects...</p>
      ) : (
        <CRow>
          {projects.map((project) => (
            <CCol md="4" key={project?.sys?.id}>
              <CCard className="project-card">
                <CCardImage
                  src={project.fields.image.fields.file.url || hackathonImage}
                  alt={project.fields.name}
                  height="450px"
                  width="800px"
                  style={{
                    borderRadius: "10px" /* Add border radius */,
                  }}
                  className="card-image"
                />
                <CCardBody>
                  <CCardTitle>{project.fields.name}</CCardTitle>
                  <CCardText>{project.fields.description}</CCardText>
                  <div className="card-links">
                    <a
                      href={project?.fields?.gitHub}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiGithub size={40} />
                    </a>
                    <a
                      href={project?.fields?.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiExternalLink size={40} />
                    </a>
                  </div>
                </CCardBody>
              </CCard>
            </CCol>
          ))}
        </CRow>
      )}
    </div>
  );
}
export default Projects;

/* 
image = project?.fields?.image?.fields?.file?.url
heading = project?.fields?.name
desc = project?.fields?.description
github = project?.fields?.gitHub
live = project?.fields?.liveLink
*/
