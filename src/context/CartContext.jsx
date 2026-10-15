import { useMemo, useState } from 'react'
import CartContext from './cart-context.js'

export function CartProvider({ children }) {
  const [items, setItems] = useState([])

  function addItem(product, options) {
    const itemKey = `${product.id}-${options.size}`

    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.key === itemKey)

      if (existingItem) {
        return currentItems.map((item) => (
          item.key === itemKey
            ? { ...item, quantity: Math.min(item.quantity + options.quantity, product.stock) }
            : item
        ))
      }

      return [
        ...currentItems,
        {
          key: itemKey,
          product,
          size: options.size,
          quantity: options.quantity,
          payment: options.payment,
        },
      ]
    })
  }

  function removeItem(itemKey) {
    setItems((currentItems) => currentItems.filter((item) => item.key !== itemKey))
  }

  const value = useMemo(() => ({
    items,
    addItem,
    removeItem,
    itemCount: items.reduce((total, item) => total + item.quantity, 0),
  }), [items])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
