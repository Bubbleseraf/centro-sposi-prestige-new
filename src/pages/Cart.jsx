import { Link } from 'react-router-dom'
import ProductVisual from '../components/ProductVisual.jsx'
import '../components/ProductVisual.css'
import { useCart } from '../context/useCart.js'
import { formatPrice } from '../data/products.js'
import './Cart.css'

function Cart() {
  const { items, removeItem } = useCart()
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

  return (
    <div className="cart-page">
      <div className="container-fluid container-xxl px-4 px-lg-5">
        <header className="cart-header">
          <p className="cart-kicker">Il tuo ordine</p>
          <h1>Carrello</h1>
        </header>

        {items.length === 0 ? (
          <section className="cart-empty">
            <h2>Il carrello è vuoto.</h2>
            <p>Esplora il catalogo e scegli i prodotti per la tua occasione.</p>
            <Link className="cart-catalog-link" to="/catalogo">Vai al catalogo</Link>
          </section>
        ) : (
          <div className="cart-layout">
            <section className="cart-items" aria-label="Prodotti nel carrello">
              {items.map((item) => (
                <article className="cart-item" key={item.key}>
                  <Link className="cart-item-visual" to={`/prodotto/${item.product.slug}`}>
                    <ProductVisual product={item.product} compact />
                  </Link>
                  <div className="cart-item-copy">
                    <Link to={`/prodotto/${item.product.slug}`}>{item.product.name}</Link>
                    <p>Taglia: {item.size}</p>
                    <p>Quantità: {item.quantity}</p>
                    <p>Pagamento scelto: {item.payment === 'paypal' ? 'PayPal' : 'Bonifico bancario'}</p>
                    <button type="button" onClick={() => removeItem(item.key)}>Rimuovi</button>
                  </div>
                  <p className="cart-item-price">{formatPrice(item.product.price * item.quantity)}</p>
                </article>
              ))}
            </section>

            <aside className="cart-summary">
              <h2>Riepilogo</h2>
              <div>
                <span>Subtotale</span>
                <strong>{formatPrice(total)}</strong>
              </div>
              <div>
                <span>Spedizione</span>
                <span>Da definire</span>
              </div>
              <div className="cart-total">
                <span>Totale prodotti</span>
                <strong>{formatPrice(total)}</strong>
              </div>
              <button type="button" disabled>Procedi all’ordine</button>
              <p>Il checkout verrà attivato in una fase successiva.</p>
            </aside>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
