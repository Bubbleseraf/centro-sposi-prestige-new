import atelierImage from '../media/chisiamo01.webp'
import './About.css'

function About() {
  return (
    <section className="about-page" id="chi-siamo" aria-labelledby="about-title">
      <div className="container-fluid container-xxl px-4 px-lg-5">
        <header className="about-heading row align-items-end gy-4">
          <div className="col-lg-7">
            <p className="about-kicker mb-3">La nostra storia</p>
            <h1 className="about-title mb-0" id="about-title">Chi siamo</h1>
          </div>
          <div className="col-lg-4 offset-lg-1">
            <p className="about-lead mb-0">
              Da oltre quarant'anni accompagniamo ogni coppia nella scelta di un abito capace di raccontarla.
            </p>
          </div>
        </header>

        <div className="about-grid row g-0 align-items-stretch">
          <div className="col-lg-6">
            <figure className="about-figure mb-0">
              <img
                className="about-image"
                src={atelierImage}
                alt="Sposa di spalle con abito in pizzo davanti a tende bianche"
              />
              <figcaption className="about-year">
                <span>Dal</span>
                <strong>1983</strong>
              </figcaption>
            </figure>
          </div>

          <div className="col-lg-6">
            <article className="about-story">
              <p>
                Centro Sposi Prestige è un'atelier in provincia di Messina, ormai diventato un punto
                di riferimento della zona e non solo, ideale per tutti gli sposi che amano la classe,
                la raffinatezza e il vero stile, grazie ad una vasta gamma di modelli di abiti da sposa,
                da sposo e da cerimonia.
              </p>
              <p>
                Lo staff dell'atelier, professionale e disponibile, vi consiglierà nella selezione
                dell'abito migliore per i vostri gusti e le vostre esigenze, con l'unico scopo di
                rendervi felici e sicure di voi stesse nell'abito che avete sempre sognato.
              </p>
              <p>
                Al Centro Sposi Prestige troverete modelli per tutti i gusti, abiti più classici e
                tradizionali o abiti moderni ed innovativi, e potrete regalarvi l'abito che avete
                sempre desiderato.
              </p>

              <div className="about-signature">
                <span className="about-signature-line" aria-hidden="true" />
                <span>Classe, raffinatezza, vero stile</span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
