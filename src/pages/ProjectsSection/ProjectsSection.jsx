import { useState } from "react";
import styles from "./ProjectsSection.module.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ProjectModal from "../../components/ProjectModal/ProjectModal";
import projects from "../../info_proyectos/projects";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className={styles.projectsSection}>
      <div className={styles.spaceBackground}>
        <header className={styles.header}>
          <h2 className={styles.title}>Explora Proyectos Galácticos</h2>
          <p className={styles.subtitle}>
            Viaja a través de mis proyectos estelares.
          </p>
        </header>

        <div className={styles.cardsFlex}>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default ProjectsSection;
