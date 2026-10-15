import { useState } from 'react'
import {
  FiArrowUpRight,
  FiClock,
  FiMail,
  FiMapPin,
  FiPhone,
} from 'react-icons/fi'
import './Contact.css'

const CONTACT_EMAIL = 'centrosposi@yahoo.it'
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`
const MAP_QUERY = 'Via Nazionale 143, 98070 Capri Leone ME'
const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`
const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&z=16&output=embed`

function getToday() {
  const today = new Date()
  const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60_000)

  return localToday.toISOString().split('T')[0]
}

function Contact() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget

    setStatus('sending')

    try {
      const formData = new FormData(form)
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      })
      const result = await response.json()

      if (!response.ok || result.success === false || result.success === 'false') {
        throw new Error('Invio non riuscito')
      }

      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="contact-page" aria-labelledby="contact-title">
      <div className="container-fluid container-xxl px-4 px-lg-5">
        <header className="contact-heading row align-items-end gy-4">
          <div className="col-lg-7">
            <p className="contact-kicker mb-3">Inizia da qui</p>
            <h1 className="contact-title mb-0" id="contact-title">Contatti</h1>
          </div>
          <div className="col-lg-4 offset-lg-1">
            <p className="contact-lead mb-0">
              Raccontaci cosa stai cercando. Ti ricontatteremo per concordare insieme
              il momento migliore per la tua prova in atelier.
            </p>
          </div>
        </header>

        <div className="contact-layout row g-0 align-items-stretch">
          <aside className="col-lg-4 contact-details" aria-label="Recapiti dell'atelier">
            <p className="contact-eyebrow">Il nostro atelier</p>
            <h2>Vieni a trovarci</h2>
            <p className="contact-details-intro">
              Riceviamo su appuntamento per dedicarti tutto il tempo e l'attenzione
              che merita la scelta del tuo abito.
            </p>

            <div className="contact-list">
              <a className="contact-detail" href={MAP_LINK} target="_blank" rel="noreferrer">
                <FiMapPin aria-hidden="true" />
                <span>
                  <small>Indirizzo</small>
                  Via Nazionale, 143<br />98070 Capri Leone (ME)
                </span>
              </a>

              <a className="contact-detail" href="tel:+390941958320">
                <FiPhone aria-hidden="true" />
                <span>
                  <small>Telefono</small>
                  0941 958320
                </span>
              </a>

              <a className="contact-detail" href={`mailto:${CONTACT_EMAIL}`}>
                <FiMail aria-hidden="true" />
                <span>
                  <small>Email</small>
                  {CONTACT_EMAIL}
                </span>
              </a>

              <div className="contact-detail">
                <FiClock aria-hidden="true" />
                <span>
                  <small>Appuntamenti</small>
                  Dal lunedì al sabato
                </span>
              </div>
            </div>
          </aside>

          <div className="col-lg-8 contact-form-panel" id="prenota">
            <div className="contact-form-heading">
              <p className="contact-eyebrow">Richiedi un appuntamento</p>
              <h2>La tua prova, il tuo momento</h2>
              <p>Compila il modulo: ti risponderemo al più presto per confermare la disponibilità.</p>
            </div>

            <form className="appointment-form" onSubmit={handleSubmit}>
              <input type="hidden" name="_subject" value="Nuova richiesta appuntamento dal sito" />
              <input type="hidden" name="_template" value="table" />
              <input
                className="contact-honeypot"
                type="text"
                name="_honey"
                tabIndex="-1"
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="form-grid">
                <div className="contact-field contact-field-wide">
                  <label htmlFor="full-name">Nome e cognome</label>
                  <input
                    id="full-name"
                    name="Nome e cognome"
                    type="text"
                    autoComplete="name"
                    placeholder="Come possiamo chiamarti?"
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="nome@esempio.it"
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="phone">Telefono</label>
                  <input
                    id="phone"
                    name="Telefono"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    placeholder="+39 333 123 4567"
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="appointment-type">Sono interessato/a a</label>
                  <select id="appointment-type" name="Tipologia di appuntamento" defaultValue="" required>
                    <option value="" disabled>Seleziona una collezione</option>
                    <option value="Abiti da sposa">Abiti da sposa</option>
                    <option value="Abiti da sposo">Abiti da sposo</option>
                    <option value="Abiti da cerimonia">Abiti da cerimonia</option>
                    <option value="Altro">Altro</option>
                  </select>
                </div>

                <div className="contact-field">
                  <label htmlFor="preferred-date">Data preferita</label>
                  <input
                    id="preferred-date"
                    name="Data preferita"
                    type="date"
                    min={getToday()}
                    required
                  />
                </div>

                <div className="contact-field contact-field-wide">
                  <label htmlFor="preferred-time">Fascia oraria preferita</label>
                  <select id="preferred-time" name="Fascia oraria" defaultValue="" required>
                    <option value="" disabled>Seleziona una fascia oraria</option>
                    <option value="Mattina">Mattina</option>
                    <option value="Pomeriggio">Pomeriggio</option>
                    <option value="Indifferente">Indifferente</option>
                  </select>
                </div>

                <div className="contact-field contact-field-wide">
                  <label htmlFor="message">Un dettaglio in più <span>(facoltativo)</span></label>
                  <textarea
                    id="message"
                    name="Messaggio"
                    rows="4"
                    placeholder="Data dell'evento, stile desiderato o qualsiasi informazione utile..."
                  />
                </div>
              </div>

              <div className="privacy-consent">
                <input id="privacy" name="Consenso privacy" type="checkbox" value="Accettato" required />
                <label htmlFor="privacy">
                  Ho letto l'informativa e acconsento al trattamento dei miei dati personali
                  per essere ricontattato/a in merito alla richiesta di appuntamento.
                </label>
              </div>

              <details className="privacy-details" id="privacy-note">
                <summary>Informativa sul trattamento dei dati</summary>
                <p>
                  Titolare del trattamento è Centro Sposi Prestige. I dati inseriti saranno
                  utilizzati esclusivamente per gestire la richiesta e ricontattarti. Il messaggio
                  viene inoltrato all'atelier tramite il servizio tecnico FormSubmit. Puoi chiedere
                  accesso, rettifica o cancellazione dei dati scrivendo a {CONTACT_EMAIL}.
                </p>
              </details>

              <div className="contact-submit-row">
                <button className="contact-submit" type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Invio in corso…' : 'Invia la richiesta'}
                  {status !== 'sending' && <FiArrowUpRight aria-hidden="true" />}
                </button>

                <div className="contact-status" aria-live="polite" role="status">
                  {status === 'success' && (
                    <p className="contact-success">
                      Grazie! La richiesta è stata inviata. Ti ricontatteremo presto.
                    </p>
                  )}
                  {status === 'error' && (
                    <p className="contact-error">
                      Non è stato possibile inviare la richiesta. Riprova oppure chiamaci allo 0941 958320.
                    </p>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>

        <section className="contact-map-section" aria-labelledby="map-title">
          <div className="contact-map-copy">
            <div>
              <p className="contact-eyebrow">Dove siamo</p>
              <h2 id="map-title">Raggiungi l'atelier</h2>
            </div>
            <a href={MAP_LINK} target="_blank" rel="noreferrer">
              Apri le indicazioni <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>

          <div className="contact-map-frame">
            <iframe
              src={MAP_EMBED}
              title="Mappa interattiva di Centro Sposi Prestige"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </section>
      </div>
    </section>
  )
}

export default Contact
