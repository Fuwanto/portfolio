import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styles from "./Balls3D.module.css";
import { Ball } from "./Ball";
import projects from "../../info_proyectos/projects";

const Balls3D = () => {
  const [openProject, setOpenProject] = useState(null); // Controlar el proyecto abierto

  const handleOpenModal = (project) => {
    setOpenProject(project); // Abrir el modal con el proyecto seleccionado
  };

  const handleCloseModal = () => {
    setOpenProject(null); // Cerrar el modal
  };

  return (
    <section className={styles.Balls3D}>
      <div className={styles.titleContainer}>
        <h2>Proyectos</h2>
      </div>

      <div className={styles.canvasContainer}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            {/* Canvas con la esfera */}
            <div className={styles.canvasWrapper}>
              <Canvas
                camera={{ position: [0, 0, 10], fov: 95 }}
                className={styles.canvas}
              >
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[2, 2, 2]} intensity={1} />
                <Ball project={project} />
              </Canvas>
            </div>
            {/* Botón para abrir el modal */}
            <button
              onClick={() => handleOpenModal(project)} // Abrir modal con datos del proyecto
              className={styles.projectLink}
            >
              {project.name}
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {openProject && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h3>{openProject.name}</h3>
            <p>{openProject.description}</p>
            <ul className={styles.techList}>
              {openProject.tech.map((tech, index) => (
                <li key={index} className={styles.techItem}>
                  <a
                    href={tech.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.techLink}
                  >
                    <img
                      src={tech.image}
                      alt={tech.name}
                      className={styles.techImage}
                    />
                    {tech.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className={styles.visitAndCloseContainer}>
              <a
                href={openProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.visitLinkContainer}
              >
                Visitar
              </a>
              <button onClick={handleCloseModal}>Salir</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Balls3D;
