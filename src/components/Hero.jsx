import { Link } from 'react-router-dom'
import hero1 from '../media/hero1.webp'
import hero2 from '../media/hero2.webp'
import hero3 from '../media/hero3.webp'
import hero4 from '../media/hero4.webp'
import hero5 from '../media/hero5.webp'
import hero6 from '../media/hero6.webp'
import './Hero.css'

const slides = [
  { src: hero1, alt: 'Dettaglio in pizzo di un abito da sposa' },
  { src: hero2, alt: 'Due sposi si tengono per mano' },
  { src: hero3, alt: 'Abiti da sposa esposti in atelier' },
  { src: hero4, alt: 'Sposa elegante all’interno di un’auto d’epoca' },
  { src: hero5, alt: 'Dettaglio floreale su un tessuto bianco' },
  { src: hero6, alt: 'Sposa in abito bianco in un salone luminoso' },
]

function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div
        id="heroCarousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="5500"
        data-bs-pause="false"
      >
        <div className="carousel-inner">
          {slides.map(({ src, alt }, index) => (
            <div className={`carousel-item${index === 0 ? ' active' : ''}`} key={src}>
              <img
                className="hero-image d-block w-100"
                src={src}
                alt={alt}
                loading={index === 0 ? 'eager' : 'lazy'}
                fetchPriority={index === 0 ? 'high' : 'auto'}
              />
            </div>
          ))}
        </div>

        <div className="hero-overlay" aria-hidden="true" />

        <div className="hero-content container-fluid container-xxl px-4 px-lg-5">
          <div className="row">
            <div className="col-lg-6">
              <p className="hero-kicker mb-3">Atelier di eleganza</p>
              <h1 className="hero-title mb-4" id="hero-title">
                Il tuo abito.<br />La tua storia. <br /> <span className="hero-data">Dal 1983</span>
              </h1>
              <p className="hero-description mb-4">
                Collezioni ricercate, dettagli preziosi e una consulenza dedicata
                per accompagnarti verso il tuo giorno più bello.
              </p>
              <div className="hero-actions d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-3">
                <Link className="btn btn-gold" to="/catalogo">Scopri il catalogo</Link>
                <Link className="hero-text-link" to="/contatti#prenota">
                  Prenota un appuntamento <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-navigation">
          <div className="hero-arrows" aria-label="Controlli carosello">
            <button
              className="hero-arrow"
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide="prev"
              aria-label="Immagine precedente"
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              className="hero-arrow"
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide="next"
              aria-label="Immagine successiva"
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
