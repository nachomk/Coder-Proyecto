import React, { useContext, useId, useState } from 'react';
import { CartContext } from '../context/CartContext';
import './Cart.css';
import { CartIcon } from '../assets/icons';

const CartWidget = () => {
    const cartCheckboxId = useId();
    const { cart, removeItem } = useContext(CartContext);
    const [isCartVisible, setIsCartVisible] = useState(false);  // State to control visibility

    const toggleCartVisibility = () => {
        setIsCartVisible(!isCartVisible);  // Toggle visibility state
    };

    console.log(cart);

    return (
        <>
            <button onClick={toggleCartVisibility} className="cart-button">
                <CartIcon />
            </button>
            {isCartVisible && (
                <aside className="cart flex flex-col h-full">
                    <ul className="flex-grow overflow-auto p-4">
                        {cart.length > 0 ? cart.map((item, index) => (
                            <li key={index} className="flex items-center p-3 border-b border-gray-200">
                                <img src={item.item.imagen} alt="" className="w-20 h-20 mr-4"/>
                                <div className="flex flex-col justify-between flex-grow">
                                    <span>{item.item.nombre}</span>
                                    <span className="font-bold">${item.item.precio}</span>
                                </div>
                                <button onClick={() => removeItem(item.item.id)}
                                    className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                                    Remove
                                </button>
                            </li>
                        )) : <h1 className="m-auto">No hay productos en el carrito</h1>}
                    </ul>
                    <button className="mt-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 self-center">
                        Finalizar Compra
                    </button>
                </aside>
            )}
        </>
    );
};

export default CartWidget;
