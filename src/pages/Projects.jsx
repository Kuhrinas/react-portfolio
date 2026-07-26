import { useEffect, useState } from "react";
import API from "../api/axios";

import cafeIMG from "../assets/cafe.png";
import aboutMeIMG from "../assets/aboutme.png";
import ticTacToeIMG from "../assets/tictactoe.png";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const images = {
    "cafe.png": cafeIMG,
    "aboutme.png": aboutMeIMG,
    "tictactoe.png": ticTacToeIMG,
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await API.get("/projects");
        setProjects(response.data.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <h1>Loading the projects...</h1>;
  }

  return (
    <section id="projects">
      <h1>Projects</h1>

      <div className="project-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>

            <img
              src={images[project.image]}
              alt={project.title}
              className="project-image"
            />

            <h2>{project.title}</h2>

            <p>{project.description}</p>

            <p>
              Completion Date:{" "}
              {new Date(project.completion).getFullYear()}
            </p>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View Project
              </a>
            )}

          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;