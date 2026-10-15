import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import RouteScroll from './components/RouteScroll.jsx'
import About from './pages/About.jsx'
import Cart from './pages/Cart.jsx'
import Catalog from './pages/Catalog.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import ProductDetail from './pages/ProductDetail.jsx'

function App() {
  return (
    <div className="site-shell">
      <RouteScroll />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chi-siamo" element={<About />} />
          <Route path="/catalogo" element={<Catalog />} />
          <Route path="/catalogo/:category" element={<Catalog />} />
          <Route path="/prodotto/:slug" element={<ProductDetail />} />
          <Route path="/carrello" element={<Cart />} />
          <Route path="/contatti" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
