import PropTypes from "prop-types";
import styles from "./ProjectModal.module.css";

const ProjectModal = ({ project, onClose }) => (
  <div className={styles.modalOverlay}>
    <div className={styles.modalContent}>
      <div className={styles.modalHeader}>
        <h3>{project.name}</h3>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
      </div>
      <p className={styles.modalDescription}>{project.description}</p>
      <ul className={styles.techList}>
        {project.tech.map((tech, index) => (
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
      <div className={styles.modalFooter}>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.visitLink}
        >
          Visitar
        </a>
      </div>
    </div>
  </div>
);

ProjectModal.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProjectModal;
