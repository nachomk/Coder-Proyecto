import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

const CheckoutComponent = () => {
    const { cart, getTotal } = useContext(CartContext);
    const [orderID, setOrderID] = useState(null);

    const finalizePurchase = () => {
        // Genera un identificador único basado en el tiempo y un número aleatorio
        const uniqueID = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        setOrderID(uniqueID);

        // Aquí también podrías llamar a una API para guardar la orden, enviar correos, etc.
    };

    return (
        <div>
            <h2>Resumen de Compra</h2>
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>
                        {item.item.nombre} - {item.cantidad} x ${item.item.precio}
                    </li>
                ))}
            </ul>
            <h3>Total: ${getTotal()}</h3>
            <button onClick={finalizePurchase} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Finalizar Compra
            </button>
            {orderID && (
                <div className="mt-4">
                    <p>Gracias por tu compra!</p>
                    <p>Tu número de orden es: {orderID}</p>
                </div>
            )}
        </div>
    );
};

export default CheckoutComponent;
