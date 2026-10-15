import { Link } from 'react-router-dom'
import ceremonyMan from '../media/catalogo/uomo/cardHome.webp'
import ceremonyWoman from '../media/catalogo/donna/cardHomeDonna.webp'
import './CeremonyCards.css'

const collections = [
  {
    title: 'Cerimonia uomo',
    image: ceremonyMan,
    alt: 'Elegante abito da cerimonia da uomo',
    className: 'ceremony-card-man',
    to: '/catalogo/uomo',
  },
  {
    title: 'Cerimonia donna',
    image: ceremonyWoman,
    alt: 'Elegante abito da cerimonia da donna',
    className: 'ceremony-card-woman',
    to: '/catalogo/donna',
  },
]

function CeremonyCards() {
  return (
    <section className="ceremony-section" id="collezioni" aria-labelledby="ceremony-title">
      <div className="container-fluid container-xxl px-4 px-lg-5">
        <header className="ceremony-heading text-center mx-auto">
          <p className="ceremony-kicker mb-3">Le nostre proposte</p>
          <h2 className="ceremony-title mb-0" id="ceremony-title">
            La cerimonia, secondo il tuo stile.
          </h2>
        </header>

        <div className="ceremony-cards-grid row g-4 g-xl-5 mx-auto">
          {collections.map(({ title, image, alt, className, to }) => (
            <div className="col-md-6" key={title}>
              <Link className="ceremony-card-link" to={to} aria-label={`Scopri ${title}`}>
                <article className={`ceremony-card ${className}`}>
                  <img className="ceremony-card-image" src={image} alt={alt} loading="lazy" />
                  <div className="ceremony-card-shade" aria-hidden="true" />
                  <div className="ceremony-card-content">
                    <span className="ceremony-card-label">Catalogo</span>
                    <h3>{title}</h3>
                    <span className="ceremony-card-line" aria-hidden="true" />
                  </div>
                </article>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CeremonyCards
