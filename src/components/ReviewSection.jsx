import { useRef, useState } from 'react'
import { FiArrowUpRight, FiCheck, FiStar } from 'react-icons/fi'
import './ReviewSection.css'

const ratingLabels = ['Insoddisfacente', 'Sufficiente', 'Buona', 'Ottima', 'Indimenticabile']

function ReviewSection() {
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [ratingError, setRatingError] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const ratingGroupRef = useRef(null)

  function selectRating(value) {
    setRating(value)
    setRatingError(false)
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (rating === 0) {
      setRatingError(true)
      ratingGroupRef.current?.querySelector('button')?.focus()
      return
    }

    event.currentTarget.reset()
    setRating(0)
    setHoverRating(0)
    setSubmitted(true)
  }

  function resetForm() {
    setSubmitted(false)
    setRatingError(false)
  }

  const visibleRating = hoverRating || rating

  return (
    <section className="review-section" id="recensione" aria-labelledby="review-title">
      <div className="container-fluid container-xxl px-4 px-lg-5">
        <div className="review-layout row g-0 align-items-stretch">
          <div className="col-lg-5 review-intro">
            <p className="review-kicker">La tua esperienza</p>
            <h2 id="review-title">Ogni storia lascia un segno.</h2>
            <p className="review-intro-copy">
              Hai scelto il tuo abito insieme a noi? Raccontaci come hai vissuto
              questo momento: le tue parole aiutano altre persone a scegliere con fiducia.
            </p>

            <div className="review-quote" aria-hidden="true">“</div>
            <p className="review-note">
              Condividi un ricordo autentico della tua esperienza in atelier.
            </p>
          </div>

          <div className="col-lg-7 review-form-panel">
            {submitted ? (
              <div className="review-thanks" role="status" aria-live="polite">
                <span className="review-thanks-icon" aria-hidden="true">
                  <FiCheck />
                </span>
                <p className="review-kicker">Grazie di cuore</p>
                <h3>La tua esperienza conta.</h3>
                <p>
                  Grazie per aver dedicato del tempo a raccontarci il tuo momento
                  al Centro Sposi Prestige.
                </p>
                <button type="button" onClick={resetForm}>Lascia un'altra recensione</button>
              </div>
            ) : (
              <>
                <div className="review-form-heading">
                  <p className="review-kicker">Lascia una recensione</p>
                  <h3>Raccontaci la tua esperienza</h3>
                  <p>I campi contrassegnati con * sono obbligatori.</p>
                </div>

                <form className="review-form" onSubmit={handleSubmit}>
                  <fieldset className="review-rating-fieldset">
                    <legend>La tua valutazione *</legend>
                    <div
                      className="review-stars"
                      ref={ratingGroupRef}
                      onMouseLeave={() => setHoverRating(0)}
                      role="radiogroup"
                      aria-label="Valutazione da una a cinque stelle"
                      aria-invalid={ratingError}
                      aria-describedby={ratingError ? 'rating-error' : undefined}
                    >
                      {ratingLabels.map((label, index) => {
                        const value = index + 1
                        const selected = rating === value
                        const highlighted = value <= visibleRating

                        return (
                          <button
                            className={highlighted ? 'is-active' : ''}
                            type="button"
                            role="radio"
                            aria-checked={selected}
                            aria-label={`${value} ${value === 1 ? 'stella' : 'stelle'}: ${label}`}
                            title={label}
                            onClick={() => selectRating(value)}
                            onMouseEnter={() => setHoverRating(value)}
                            key={label}
                          >
                            <FiStar fill={highlighted ? 'currentColor' : 'none'} aria-hidden="true" />
                          </button>
                        )
                      })}
                      <span className="review-rating-label" aria-live="polite">
                        {visibleRating ? ratingLabels[visibleRating - 1] : 'Seleziona le stelle'}
                      </span>
                    </div>
                    {ratingError && (
                      <span className="review-field-error" id="rating-error">
                        Seleziona una valutazione prima di continuare.
                      </span>
                    )}
                    <input type="hidden" name="Valutazione" value={rating} readOnly />
                  </fieldset>

                  <div className="review-form-grid">
                    <div className="review-field">
                      <label htmlFor="review-name">Nome e cognome *</label>
                      <input
                        id="review-name"
                        name="Nome e cognome"
                        type="text"
                        autoComplete="name"
                        placeholder="Il tuo nome"
                        required
                      />
                    </div>

                    <div className="review-field">
                      <label htmlFor="review-category">Hai scelto *</label>
                      <select id="review-category" name="Collezione" defaultValue="" required>
                        <option value="" disabled>Seleziona</option>
                        <option value="Abito da sposa">Abito da sposa</option>
                        <option value="Abito da sposo">Abito da sposo</option>
                        <option value="Abito da cerimonia">Abito da cerimonia</option>
                      </select>
                    </div>

                    <div className="review-field review-field-wide">
                      <label htmlFor="review-title-input">Titolo della recensione</label>
                      <input
                        id="review-title-input"
                        name="Titolo"
                        type="text"
                        maxLength="80"
                        placeholder="Riassumi la tua esperienza in poche parole"
                      />
                    </div>

                    <div className="review-field review-field-wide">
                      <label htmlFor="review-message">La tua recensione *</label>
                      <textarea
                        id="review-message"
                        name="Recensione"
                        rows="5"
                        minLength="20"
                        maxLength="1000"
                        placeholder="Raccontaci l'accoglienza, la scelta dell'abito e ciò che ha reso speciale la tua esperienza..."
                        required
                      />
                      <small>Minimo 20 caratteri</small>
                    </div>
                  </div>

                  <div className="review-consent">
                    <input
                      id="review-consent"
                      name="Consenso alla pubblicazione"
                      type="checkbox"
                      value="Accettato"
                      required
                    />
                    <label htmlFor="review-consent">
                      Acconsento al trattamento dei dati inseriti e alla pubblicazione
                      della recensione sul sito. *
                    </label>
                  </div>

                  <button className="review-submit" type="submit">
                    Invia la recensione <FiArrowUpRight aria-hidden="true" />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReviewSection
