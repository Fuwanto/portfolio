import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Creado con 💜 por{" "}
        <a
          href="https://github.com/Fuwanto"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fuwanto
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
