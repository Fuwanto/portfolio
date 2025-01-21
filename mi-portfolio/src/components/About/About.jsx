import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.about}>
      <h2>Sobre Mí</h2>
      <div className={styles.content}>
        <p>
          ¡Hola! Soy Antonella, una desarrolladora apasionada por la creación de
          aplicaciones que sean tanto funcionales como fascinantes. Me encanta
          diseñar soluciones que no solo resuelvan problemas, sino que también
          ofrezcan experiencias únicas, como los planetas que giran alrededor de
          las estrellas. Cada línea de código que escribo está pensada para
          explorar nuevos horizontes y brindar lo mejor a los usuarios.
        </p>
      </div>
    </section>
  );
};

export default About;
