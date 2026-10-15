import { getCategoryLabel } from '../data/products.js'

function ProductVisual({ product, compact = false }) {
  const displayImage = compact ? product.thumbnail ?? product.image : product.image

  return (
    <div className={`product-visual product-visual-${product.category}${compact ? ' product-visual-compact' : ''}${displayImage ? ' has-image' : ''}`}>
      {displayImage ? (
        <img
          className="product-visual-image"
          src={displayImage}
          alt={product.name}
          loading={compact ? 'lazy' : 'eager'}
          fetchPriority={compact ? 'auto' : 'high'}
          style={{ objectPosition: compact ? 'center' : product.imagePosition ?? 'center' }}
        />
      ) : (
        <>
          <span className="product-visual-monogram" aria-hidden="true">CSP</span>
          <span className="product-visual-category">{getCategoryLabel(product.category)}</span>
          <span className="visually-hidden">Spazio riservato all’immagine di {product.name}</span>
        </>
      )}
    </div>
  )
}

export default ProductVisual
