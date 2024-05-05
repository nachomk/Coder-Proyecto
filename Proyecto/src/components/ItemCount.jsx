import { useState } from "react";
import { useCart } from '../hooks/useCart';

const ItemCount = ({ stock, initial, onAdd, item, onRemove }) => {
  const [quantity, setQuantity] = useState(initial);
  const { addToCart } = useCart();

  const handleQuantityChange = (value) => {
    const newQuantity = quantity + value;
    if (newQuantity >= 0 && newQuantity <= stock) {
      setQuantity(newQuantity);
      if (value === 1) {
        onAdd(1);
      } else if (value === -1) {
        onRemove(1);
      }
    }
  };

  const resetQuantity = () => {
    setQuantity(0);
  };

  const handleAdd = () => {
    if (quantity > 0) {
      addToCart(item, quantity);  
      onAdd(quantity, item);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        <button disabled={quantity <= 0} className="mr-2 bg-gray-200 px-5 py-1 rounded-lg" onClick={() => handleQuantityChange(-1)}>
          -
        </button>
        <p className="bg-gray-100 mr-2 my-2 px-5">{quantity}</p>
        <button disabled={quantity >= stock} onClick={() => handleQuantityChange(1)} className="bg-gray-200 px-5 py-1 rounded-lg">
          +
        </button>
      </div>
      <button onClick={resetQuantity} className="bg-gray-200 px-5 my-4 rounded-lg">
        Reset
      </button>
      <button className="mt-2 bg-gray-200 px-5 py-2 rounded-lg" onClick={handleAdd} disabled={!stock || quantity === 0}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
