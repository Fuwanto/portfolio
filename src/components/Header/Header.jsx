import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        Bienvenidos a mi <span>Universo</span>
      </h1>
      <p>Descubre mis proyectos y la magia detrás del código ✨</p>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/">Sobre mí</Link>
          </li>
          <li>
            <Link to="/projects">Proyectos</Link>
          </li>
          <li>
            <Link to="/contact">Contacto</Link>
          </li>
        </ul>
      </nav>

      <div className={styles.cvButtons}>
        <a href="/portfolio/CV-ES.pdf" download className={styles.cvButton}>
          📄 CV Español
        </a>
        <a href="/portfolio/CV-ENG.pdf" download className={styles.cvButton}>
          📄 CV Inglés
        </a>
      </div>
    </header>
  );
};

export default Header;
