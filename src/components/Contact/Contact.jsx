import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  const email = import.meta.env.VITE_EMAIL;
  const phone = import.meta.env.VITE_PHONE;

  const subject = encodeURIComponent("Consulta desde tu portafolio");
  const body = encodeURIComponent(
    "Hola, me gustaría saber más sobre tu trabajo."
  );

  const whatsappMessage = encodeURIComponent(
    "Hola, me gustaría saber más sobre tu trabajo."
  );

  return (
    <section className={styles.contact}>
      <h2>Contacto</h2>
      <p>
        Si tienes alguna consulta, envíame un correo directamente o escríbeme
        por WhatsApp:
      </p>

      <div>
        <a href={`mailto:${email}?subject=${subject}&body=${body}`}>
          Enviar Email
        </a>
      </div>

      <div>
        <a
          href={`https://wa.me/${phone}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Enviar WhatsApp
        </a>
      </div>
    </section>
  );
};

export default Contact;
