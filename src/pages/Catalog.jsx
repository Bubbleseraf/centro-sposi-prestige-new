import { useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import { catalogCategories, products } from '../data/products.js'
import './Catalog.css'

const catalogCopy = {
  uomo: 'Completi e smoking pensati per lo sposo e per gli invitati più eleganti.',
  donna: 'Abiti da matrimonio dalle linee raffinate, dedicati alla sposa e alle invitate.',
  bambino: 'Capi eleganti e confortevoli per i più piccoli, pensati per il giorno del matrimonio.',
  accessori: 'I dettagli che completano l’abito da matrimonio e rendono personale ogni look.',
}

const catalogTitles = {
  uomo: 'Cerimonia Uomo',
  donna: 'Cerimonia Donna',
  bambino: 'Cerimonia Bambino',
  accessori: 'Accessori',
}

function Catalog() {
  const { category } = useParams()
  const [sortOrder, setSortOrder] = useState('featured')
  const validCategory = catalogCategories.some((item) => item.slug === category)

  const visibleProducts = useMemo(() => {
    const filteredProducts = category
      ? products.filter((product) => product.category === category)
      : products

    if (sortOrder === 'price-asc') {
      return [...filteredProducts].sort((a, b) => a.price - b.price)
    }

    if (sortOrder === 'price-desc') {
      return [...filteredProducts].sort((a, b) => b.price - a.price)
    }

    if (sortOrder === 'name') {
      return [...filteredProducts].sort((a, b) => a.name.localeCompare(b.name, 'it'))
    }

    return filteredProducts
  }, [category, sortOrder])

  if (category && !validCategory) {
    return <Navigate to="/catalogo" replace />
  }

  const title = category ? catalogTitles[category] : 'Il catalogo'
  const description = category
    ? catalogCopy[category]
    : 'Esplora la selezione Centro Sposi Prestige dedicata al matrimonio e trova l’abito giusto per il tuo ruolo in questo giorno speciale.'

  return (
    <div className="catalog-page">
      <header className="catalog-hero">
        <div className="container-fluid container-xxl px-4 px-lg-5">
          <p className="catalog-kicker mb-3">Centro Sposi Prestige</p>
          <h1>{title}</h1>
          <p className="catalog-intro mb-0">{description}</p>
        </div>
      </header>

      <section className="catalog-content">
        <div className="container-fluid container-xxl px-4 px-lg-5">
          <nav className="catalog-categories" aria-label="Categorie catalogo">
            <Link className={!category ? 'active' : ''} to="/catalogo" aria-current={!category ? 'page' : undefined}>
              Tutti
            </Link>
            {catalogCategories.map((item) => (
              <Link
                className={category === item.slug ? 'active' : ''}
                to={`/catalogo/${item.slug}`}
                aria-current={category === item.slug ? 'page' : undefined}
                key={item.slug}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="catalog-toolbar">
            <p className="mb-0">{visibleProducts.length} prodotti</p>
            <label className="catalog-sort">
              <span>Ordina per</span>
              <select value={sortOrder} onChange={(event) => setSortOrder(event.target.value)}>
                <option value="featured">In evidenza</option>
                <option value="price-asc">Prezzo crescente</option>
                <option value="price-desc">Prezzo decrescente</option>
                <option value="name">Nome</option>
              </select>
            </label>
          </div>

          <section className="product-grid" aria-label={`Prodotti ${title}`}>
            {visibleProducts.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </section>
        </div>
      </section>
    </div>
  )
}

export default Catalog
