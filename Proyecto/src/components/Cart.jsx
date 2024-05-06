import React, { useContext, useId, useState } from 'react';
import { CartContext } from '../context/CartContext';
import './Cart.css';
import { CartIcon } from '../assets/icons';

const CartWidget = () => {
    const cartCheckboxId = useId();
    const { cart, removeItem, getTotal, getItemCount } = useContext(CartContext);
    const [isCartVisible, setIsCartVisible] = useState(false);
    const [orderInfo, setOrderInfo] = useState({ id: null, total: 0, completed: false });

    const toggleCartVisibility = () => {
        setIsCartVisible(!isCartVisible);
    };

    const finalizePurchase = () => {
        const total = getTotal();  
        const orderId = `ORD-${Date.now()}-${Math.random().toString(36)}`;
        setOrderInfo({ id: orderId, total: total, completed: true });
        setIsCartVisible(false);  
    };

    return (
        <>
            <button onClick={toggleCartVisibility} className="cart-button">
                <CartIcon />
            </button>
            {cart.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-2 py-1">
                    {getItemCount()}
                </span>
            )}
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
                                <div className="text-center mt-2">
                                    <span>Cant: {item.quantity}</span>
                                </div>
                            </li>
                        )) : <h1 className="m-auto">No hay productos en el carrito</h1>}
                    </ul>
                    <button onClick={finalizePurchase} className="mt-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 self-center">
                        Finalizar Compra
                    </button>
                    {orderInfo.completed && (
                        <div className="text-center p-4">
                            <h3>Compra Finalizada</h3>
                            <p>ID de la Orden: {orderInfo.id}</p>
                            <p>Total de la Compra: ${orderInfo.total.toFixed(2)}</p>
                        </div>
                    )}
                </aside>
            )}
        </>
    );
};

export default CartWidget;
