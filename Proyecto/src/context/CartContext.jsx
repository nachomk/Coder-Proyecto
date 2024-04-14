import { createContext, useState }  from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([{
        quantity: 0 ,
        item: null
    }]);

return (
    <>
    <CartProvider value={{ cart, setCart}}>
        {children}
    </CartProvider>
    </>
)}
