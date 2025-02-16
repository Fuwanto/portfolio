import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei"; // Añadir Stars
import PropTypes from "prop-types";
import OrbitalProject from "../OrbitalProject/OrbitalProject";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ project, onOpenModal }) => (
  <div className={styles.projectCard}>
    <div className={styles.canvasWrapper}>
      <Canvas
        camera={{ position: [0, 15, 20], fov: 45 }}
        className={styles.canvas}
      >
        {/* Fondo estrellado */}
        <Stars
          radius={100} // Radio de la esfera de estrellas
          depth={50} // Profundidad del efecto
          count={2000} // Número de estrellas
          factor={4} // Tamaño de las estrellas
          saturation={0} // Saturación de color (0 para blanco)
          fade // Efecto de desvanecimiento
        />

        {/* Luces */}
        <ambientLight intensity={1.2} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <spotLight
          position={[-10, 15, -5]}
          angle={0.3}
          penumbra={1}
          intensity={2}
          castShadow
        />

        {/* Controles */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          maxPolarAngle={Math.PI / 2}
          minDistance={15}
          maxDistance={20}
        />

        {/* Sistema planetario centrado */}
        <OrbitalProject project={project} />
      </Canvas>
    </div>
    <div className={styles.projectInfoContainer}>
      <button
        onClick={() => onOpenModal(project)}
        className={styles.projectButton}
        aria-label={`Ver detalles de ${project.name}`}
      >
        {project.name}
      </button>
    </div>
  </div>
);

ProjectCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export default ProjectCard;
