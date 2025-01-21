import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styles from "./Balls3D.module.css";
import { Ball } from "./Ball";

const Balls3D = () => {
  const [openProjectId, setOpenProjectId] = useState(null); // Controlar qué proyecto está desplegado

  const projects = [
    {
      id: 1,
      name: "Proyecto 1",
      description: "Descripción del Proyecto 1",
      tec: [
        {
          name: "React",
          image: "src/assets/react.svg",
          url: "https://es.react.dev/",
        },
        {
          name: "React",
          image: "src/assets/react.svg",
          url: "https://es.react.dev/",
        },
      ],
      link: "https://github.com/Fuwanto",
    },
    {
      id: 2,
      name: "Proyecto 2",
      description: "Descripción del Proyecto 2",
      tec: [
        {
          name: "React",
          image: "src/assets/react.svg",
          url: "https://es.react.dev/",
        },
        {
          name: "React",
          image: "src/assets/react.svg",
          url: "https://es.react.dev/",
        },
      ],
      link: "https://github.com/Fuwanto",
    },
    {
      id: 3,
      name: "Proyecto 3",
      description: "Descripción del Proyecto 3",
      tec: [
        {
          name: "React",
          image: "src/assets/react.svg",
          url: "https://es.react.dev/",
        },
        {
          name: "React",
          image: "src/assets/react.svg",
          url: "https://es.react.dev/",
        },
      ],
      link: "https://github.com/Fuwanto",
    },
  ];

  const handleToggleDropdown = (id) => {
    setOpenProjectId(openProjectId === id ? null : id); // Si el proyecto ya está abierto, cerrarlo
  };

  return (
    <section className={styles.Balls3D}>
      <h2>Proyectos</h2>
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
            {/* Botón para abrir/cerrar el desplegable */}
            <button
              onClick={() => handleToggleDropdown(project.id)} // Alterna el estado del desplegable
              className={styles.projectLink}
            >
              {project.name}
            </button>

            {/* Descripción del proyecto (desplegable) */}
            {openProjectId === project.id && (
              <div className={styles.projectDescription}>
                <p>{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  Ver más en GitHub
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Balls3D;
