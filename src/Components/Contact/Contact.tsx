import './Contact.scss'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container contact-grid">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3977.0175053627922!2d55.44802757415095!3d-4.5908812953837455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sda!2sdk!4v1767938701459!5m2!1sda!2sdk"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Leo-Lov kort"
          />
        </div>
        <article className="where">
          <h2>HER BOR VI</h2>
          <p>Vi har valgt at bosætte os i solen!</p>
          <p>Her er dejlig varmt og ikke ret mange fattige mennesker. Det nyder vi rigtig meget.</p>
          <p>
            “Hvis du har råd til at tage til SecheIlene har du råd til os”. Det er et af vores utallige motto’er.
          </p>
          <address>
            Leo–Lov ApS<br />
            Maldives rd. 22<br />
            Seychelles
          </address>
        </article>
      </div>
    </section>
  )
}
