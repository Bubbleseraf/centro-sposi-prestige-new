import { Link } from 'react-router-dom'
import SocialLinks from './SocialLinks.jsx'
import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-fluid container-xxl px-4 px-lg-5">
        <div className="row gy-5 py-5">
          <div className="col-lg-5">
            <Link className="footer-brand" to="/">Centro Sposi Prestige</Link>
            <p className="footer-intro mt-3 mb-0">
              Il luogo dove eleganza, ascolto e cura dei dettagli incontrano il tuo giorno più bello.
            </p>
            <SocialLinks className="footer-socials mt-4" />
          </div>

          <div className="col-6 col-lg-3 offset-lg-1">
            <p className="footer-heading">Esplora</p>
            <nav className="d-flex flex-column align-items-start gap-2" aria-label="Navigazione footer">
              <Link to="/">Home</Link>
              <Link to="/chi-siamo">Chi siamo</Link>
              <Link to="/catalogo">Catalogo</Link>
              <Link to="/contatti">Contatti</Link>
            </nav>
          </div>

          <div className="col-6 col-lg-3">
            <p className="footer-heading">Atelier</p>
            <p className="mb-2">Via Nazionale, 143<br />98070 Capri Leone (ME)</p>
            <Link className="footer-cta" to="/contatti#prenota">Prenota la tua prova →</Link>
          </div>
        </div>

        <div className="footer-bottom d-flex flex-column flex-sm-row justify-content-between gap-2 py-3">
          <span>© 2026 Centro Sposi Prestige</span>
          <span>Eleganza italiana</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
