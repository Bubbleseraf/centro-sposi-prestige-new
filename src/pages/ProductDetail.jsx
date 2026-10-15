import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import ProductVisual from '../components/ProductVisual.jsx'
import '../components/ProductVisual.css'
import { useCart } from '../context/useCart.js'
import { formatPrice, getCategoryLabel, products } from '../data/products.js'
import './ProductDetail.css'

function ProductDetail() {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug)

  if (!product) {
    return <Navigate to="/catalogo" replace />
  }

  return <ProductDetailContent product={product} key={product.id} />
}

function ProductDetailContent({ product }) {
  const { addItem } = useCart()
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [payment, setPayment] = useState('bonifico')
  const [quantity, setQuantity] = useState(1)
  const [feedback, setFeedback] = useState('')

  function handleAddToCart() {
    addItem(product, { size: selectedSize, payment, quantity })
    setFeedback(`${quantity} ${quantity === 1 ? 'articolo aggiunto' : 'articoli aggiunti'} al carrello.`)
  }

  return (
    <div className="product-detail-page">
      <div className="container-fluid container-xxl px-4 px-lg-5">
        <nav className="product-breadcrumb" aria-label="Percorso di navigazione">
          <Link to="/catalogo">Catalogo</Link>
          <span aria-hidden="true">/</span>
          <Link to={`/catalogo/${product.category}`}>{getCategoryLabel(product.category)}</Link>
          <span aria-hidden="true">/</span>
          <span>{product.name}</span>
        </nav>

        <div className="product-detail-grid">
          <section className="product-showcase" aria-labelledby="product-title">
            <ProductVisual product={product} />
            <div className="product-description">
              <p className="product-detail-kicker">Descrizione</p>
              <p>{product.description}</p>
              <p className="product-detail-note">
                La composizione, i colori disponibili e le indicazioni di lavaggio verranno inseriti nella versione definitiva.
              </p>
            </div>
          </section>

          <aside className="product-purchase" aria-label="Opzioni prodotto">
            <p className="product-detail-category">{getCategoryLabel(product.category)}</p>
            <h1 id="product-title">{product.name}</h1>
            <p className="product-detail-price">{formatPrice(product.price)}</p>
            <p className="product-availability">
              <span aria-hidden="true" /> {product.stock} pezzi disponibili
            </p>

            <div className="product-option">
              <label htmlFor="product-size">Seleziona la taglia</label>
              <select id="product-size" value={selectedSize} onChange={(event) => setSelectedSize(event.target.value)}>
                {product.sizes.map((size) => <option value={size} key={size}>{size}</option>)}
              </select>
              <Link className="size-help" to="/contatti">Hai bisogno di aiuto con la taglia?</Link>
            </div>

            <fieldset className="product-option payment-options">
              <legend>Metodo di pagamento</legend>
              <label className={payment === 'bonifico' ? 'selected' : ''}>
                <input
                  type="radio"
                  name="payment"
                  value="bonifico"
                  checked={payment === 'bonifico'}
                  onChange={(event) => setPayment(event.target.value)}
                />
                <span>
                  <strong>Bonifico bancario</strong>
                  <small>Coordinate comunicate dopo l’ordine</small>
                </span>
              </label>
              <label className={payment === 'paypal' ? 'selected' : ''}>
                <input
                  type="radio"
                  name="payment"
                  value="paypal"
                  checked={payment === 'paypal'}
                  onChange={(event) => setPayment(event.target.value)}
                />
                <span>
                  <strong>PayPal</strong>
                  <small>Pagamento online — demo</small>
                </span>
              </label>
            </fieldset>

            <div className="product-option">
              <label htmlFor="product-quantity">Quantità</label>
              <select
                id="product-quantity"
                value={quantity}
                onChange={(event) => setQuantity(Number(event.target.value))}
              >
                {Array.from({ length: product.stock }, (_, index) => index + 1).map((value) => (
                  <option value={value} key={value}>{value}</option>
                ))}
              </select>
            </div>

            <button className="product-add-button" type="button" onClick={handleAddToCart}>
              Aggiungi al carrello
            </button>
            <p className="product-add-feedback" aria-live="polite">{feedback}</p>

            <div className="product-service-notes">
              <p>Consulenza in atelier disponibile</p>
              <p>Pagamenti mostrati a scopo dimostrativo</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
