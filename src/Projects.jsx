/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

const Projects = ({ projects }) => (
  <section id="projects" className="projects-section">
    <div className="container">
      <center>
        <h2>
          <b>Projects</b>
        </h2>
      </center>

      {projects.map((project) => (
        <div className="mb-4">
          <h4>{project.name}</h4>

          {project.description.map((desc) => (
            <p>{desc}</p>
          ))}
          <center>
            <div>
              {project.tags.map((tag) => (
                <span className="btn btn-secondary m-2">{tag.name}</span>
              ))}
            </div>

            <a href={project.source_code_link} className="btn btn-dark mt-2">
              Source Code
            </a>
          </center>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
