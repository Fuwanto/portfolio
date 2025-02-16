import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.content}>
        <p className={styles.introduction}>
          <span>¡Hola!</span> Soy <span>Antonella</span>, una
          <span> desarrolladora </span> apasionada por la creación de
          <span> aplicaciones </span> que combinan <span> funcionalidad </span>{" "}
          y <span> creatividad</span>. Mi objetivo es diseñar
          <span> soluciones únicas </span> que no solo resuelvan problemas, sino
          que también ofrezcan <span> experiencias memorables</span>, como los{" "}
          <span> planetas </span> que orbitan alrededor de las
          <span> estrellas</span>.
        </p>
        <p className={styles.mission}>
          Cada <span> línea de código </span> que escribo es una oportunidad
          para <span> explorar </span> nuevos horizontes y ofrecer
          <span> valor real </span> a los <span> usuarios</span>. Mi enfoque
          está en <span> innovar</span>, <span> superar límites</span> y
          convertir <span> ideas </span> en
          <span> realidades sorprendentes</span>.
        </p>
      </div>
    </section>
  );
};

export default About;
