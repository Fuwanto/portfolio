import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.footerText}>
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
      </div>
    </footer>
  );
};

export default Footer;
