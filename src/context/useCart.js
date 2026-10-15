import { useContext } from 'react'
import CartContext from './cart-context.js'

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart deve essere usato all’interno di CartProvider')
  }

  return context
}
