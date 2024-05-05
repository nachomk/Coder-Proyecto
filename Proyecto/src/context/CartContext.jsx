import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
        const updatedCart = cart.map((cartItem) => {
            if (cartItem.item.id === item.id) {
                return { ...cartItem, quantity: cartItem.quantity + quantity }
            } else {
                return cartItem
            }
        })
        setCart(updatedCart)
    } else {
        setCart([...cart, { item, quantity }])
    }
}



  const getTotal = () => {
    console.log('Calculando total para el carrito:', cart)
    return cart.reduce((acc, cartItem) => {
        const precio = Number(cartItem.item.precio)
        const cantidad = Number(cartItem.quantity) 
        console.log(`Precio: ${precio}, Cantidad: ${cantidad}, Subtotal: ${precio * cantidad}`)
        return acc + precio * cantidad
    }, 0)
}



  const removeItem = (itemId, quantityToRemove) => {
    const updatedCart = cart
      .map((cartItem) => {
        if (cartItem.item.id === itemId) {
          const newQuantity = cartItem.quantity - quantityToRemove
          return { ...cartItem, quantity: newQuantity }
        }
        return cartItem
      })
      .filter((cartItem) => cartItem.quantity > 0)

    setCart(updatedCart)
  }

  const clear = () => {
    setCart([])
  }

  const isInCart = (id) => {
    return cart.some((itemCart) => itemCart.item.id === id)
  }

  console.log(cart)
  console.log(getTotal())

  return (
    <>
      <CartContext.Provider
        value={{ cart, setCart, addItem, removeItem, getTotal }}
      >
        {children}
      </CartContext.Provider>
    </>
  )
}
