import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Hecho con{" "}
        <span role="img" aria-label="corazón">
          💜
        </span>{" "}
        por <br />
        <a
          href="https://github.com/Fuwanto"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fuwanto
        </a>
      </p>
    </footer>
  );
};

export default Footer;
