import { useEffect, useState } from "react";
import API from "../api/axios";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    API.get("/projects")
      .then((response) => {
        setProjects(response.data.data);
      })
      .catch((error) => {
        console.log("Error fetching projects:", error);
      });
  }, []);

  return (
    <section>
      <h1>Projects</h1>

      {projects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        projects.map((project) => (
          <div key={project._id}>
            <h3>{project.title}</h3>

            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            )}

            <p>{project.description}</p>

            <p>
              Completion Date:{" "}
              {new Date(project.completion).toLocaleDateString()}
            </p>
          </div>
        ))
      )}
    </section>
  );
}

export default Projects;