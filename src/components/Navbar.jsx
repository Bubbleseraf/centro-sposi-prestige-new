import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/useCart.js'
import './Navbar.css'

const navItems = [
  { label: 'Home', to: '/', end: true },
  { label: 'Chi siamo', to: '/chi-siamo' },
  { label: 'Catalogo', to: '/catalogo' },
  { label: 'Contatti', to: '/contatti' },
]

function Navbar() {
  const { itemCount } = useCart()

  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-lg navbar-light" aria-label="Navigazione principale">
        <div className="container-fluid container-xxl px-4 px-lg-5">
          <Link className="navbar-brand brand" to="/" aria-label="Centro Sposi Prestige - Home">
            <span className="brand-monogram" aria-hidden="true">CSP</span>
            <span className="brand-copy">
              <span className="brand-title">Centro Sposi</span>
              <span className="brand-subtitle">Prestige</span>
            </span>
          </Link>

          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavigation"
            aria-controls="mainNavigation"
            aria-expanded="false"
            aria-label="Apri il menu"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mainNavigation">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              {navItems.map(({ label, to, end }) => (
                <li className="nav-item" key={label}>
                  <NavLink
                    className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                    to={to}
                    end={end}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
              <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
                <Link className="btn btn-gold-outline" to="/contatti#prenota">Prenota una prova</Link>
              </li>
              <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
                <Link className="cart-nav-link" to="/carrello">
                  Carrello <span aria-label={`${itemCount} articoli nel carrello`}>{itemCount}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
