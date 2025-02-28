import styles from "./Contact.module.css"

const Contact = () => {
  const email = "denisseanto11@hotmail.com"
  const phone = "+541161516407"

  const subject = encodeURIComponent("Consulta desde tu portafolio")
  const body = encodeURIComponent(
    "Hola, me gustaría saber más sobre tu trabajo."
  )

  const whatsappMessage = encodeURIComponent(
    "Hola, me gustaría saber más sobre tu trabajo."
  )

  return (
    <section className={styles.contact}>
      <h2>Contacto</h2>
      <p>
        Si tienes alguna consulta, no dudes en contactarme directamente por
        correo o a través de WhatsApp:
      </p>

      <div className={styles.contactButton}>
        <a
          href={`mailto:${email}?subject=${subject}&body=${body}`}
          className={styles.emailButton}
        >
          Enviar Email
        </a>
      </div>

      <div className={styles.contactButton}>
        <a
          href={`https://wa.me/${phone}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsappButton}
        >
          Enviar WhatsApp
        </a>
      </div>
    </section>
  )
}

export default Contact
