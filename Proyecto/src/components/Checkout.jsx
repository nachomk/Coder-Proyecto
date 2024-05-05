import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Checkout = () => {
    const { cart, getTotal } = useContext(CartContext);

    if (cart.length === 0) {
        return <h2>Your cart is empty.</h2>;
    }

    return (
        <div>
            <h1>Checkout</h1>
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>
                        {item.item.nombre} - Quantity: {item.cantidad} - Price: ${item.item.precio}
                    </li>
                ))}
            </ul>
            <h2>Total: ${getTotal()}</h2>
            <button>Place Order</button>
        </div>
    );
};

export default Checkout;
