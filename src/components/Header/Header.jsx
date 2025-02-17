import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import styles from "./Header.module.css";

const Header = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.body.classList.toggle("light-theme", theme === "light");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        {/* Título principal */}
        <h1 className={styles.title}>
          Explora mi <span>Galaxia Digital</span>
        </h1>

        {/* Subtítulo */}
        <p className={styles.subtitle}>
          Viaja a través de mis proyectos y descubre el código que impulsa las
          estrellas ✨
        </p>

        {/* Navegación */}
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link to="/" className={styles.navLink}>
                Sobre mí
              </Link>
            </li>
            <li>
              <Link to="/projects" className={styles.navLink}>
                Proyectos
              </Link>
            </li>
            <li>
              <Link to="/contact" className={styles.navLink}>
                Contacto
              </Link>
            </li>
          </ul>
        </nav>

        {/* Botones de CV */}
        <div className={styles.cvButtons}>
          <a href="/portfolio/CV-ES.pdf" download className={styles.cvButton}>
            📄 Descargar CV (Español)
          </a>
          <a href="/portfolio/CV-ENG.pdf" download className={styles.cvButton}>
            📄 Download CV (English)
          </a>
        </div>

        {/* Switch de tema con íconos */}
        <div className={styles.themeSwitchWrapper}>
          {theme === "light" ? <FaSun /> : <FaMoon />}
          <label
            className={styles.themeSwitch}
            aria-label="Cambiar tema de color"
          >
            <input
              type="checkbox"
              onChange={toggleTheme}
              checked={theme === "light"}
              className={styles.themeCheckbox}
            />
            <span className={styles.slider}></span>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
