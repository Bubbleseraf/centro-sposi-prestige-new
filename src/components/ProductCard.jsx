import { Link } from 'react-router-dom'
import { formatPrice, getCategoryLabel } from '../data/products.js'
import ProductVisual from './ProductVisual.jsx'
import './ProductVisual.css'
import './ProductCard.css'

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <Link className="product-card-link" to={`/prodotto/${product.slug}`} aria-label={`Vedi i dettagli di ${product.name}`}>
        <ProductVisual product={product} compact />
        <div className="product-card-copy">
          <p className="product-card-category">{getCategoryLabel(product.category)}</p>
          <h2 className="product-card-title">{product.name}</h2>
          <div className="product-card-meta">
            <span className="product-card-price">{formatPrice(product.price)}</span>
            <span className="product-card-detail">Dettagli <span aria-hidden="true">→</span></span>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default ProductCard
