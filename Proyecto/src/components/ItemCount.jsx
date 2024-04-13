import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial)

  const handleQuantityChange = (value) => {
    const newQuantity = quantity + value;
    if (newQuantity >= 1 && newQuantity <= stock) {
      setQuantity(newQuantity)
    }
  }
  
  const resetQuantity = () => {
    setQuantity(0);
  }
  const handleAdd = () => {
    if (quantity > 0) {
      onAdd(quantity)
    }
  }

  return (<div class="flex flex-col items-center">
  <div class="flex items-center">
    <button class="mr-2" onClick={() => handleQuantityChange(-1)}>
      -
    </button>
    <p class="mr-2">{quantity}</p>
    <button onClick={() => handleQuantityChange(+1)}>
      +
    </button>
  </div>
  <button onClick={() => resetQuantity(quantity)}>
    Reset
  </button>
  <button class="mt-2" onClick={() => handleAdd(quantity)} disabled={!stock}>
    Agregar al carrito
  </button>
</div>
);
}

export default ItemCount;