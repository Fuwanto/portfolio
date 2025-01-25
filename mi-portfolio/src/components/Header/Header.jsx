import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        Bienvenidos a mi <span>Universo</span>
      </h1>
      <p>Descubre mis proyectos y la magia detrás del código ✨</p>
    </header>
  );
};

export default Header;
