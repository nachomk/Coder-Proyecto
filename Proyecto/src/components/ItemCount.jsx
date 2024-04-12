import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial)

  const handleQuantityChange = (value) => {
    const newQuantity = quantity + value;
    if (newQuantity >= 1 && newQuantity <= stock) {
      setQuantity(newQuantity)
    }
  }

  const handleAdd = () => {
    if (quantity > 0) {
      onAdd(quantity)
    }
  }

  return (<div>
    <button onClick={() => handleQuantityChange(-1)}>
      -
    </button>
    <button onClick={() => handleQuantityChange(+1)}>
      +
    </button>
    <h4>{quantity}</h4>
    <button onClick={() => handleAdd(quantity)} disabled={!stock}>
      Agregar al carrito
    </button>
  </div>);
}

export default ItemCount;