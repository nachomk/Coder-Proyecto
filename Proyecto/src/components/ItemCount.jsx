import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd, item , onRemove}) => {
  const [quantity, setQuantity] = useState(initial)
  const [count, setCount] = useState(initial);

  const handleQuantityChange = (value) => {
    const newQuantity = quantity + value;
    if (newQuantity >= 0 && newQuantity <= stock) {
      setQuantity(newQuantity)
    }
    if (value === 1) {
      onAdd(count)
    }
    if (value === -1) {
      onRemove(1)
    }
  }
  
  const resetQuantity = () => {
    setQuantity(0);
  }
  const handleAdd = () => {
    if (quantity > 0) {
      onAdd(quantity, item)
    }
  }

  return (
  <div className="flex flex-col items-center">
    <div className="flex items-center">
      <button className="mr-2 bg-gray-200 px-5 py-1 rounded-lg" onClick={() => handleQuantityChange(-1)}>
        -
      </button>
      <p className=" bg-gray-100 mr-2 my-2 px-5">{quantity}</p>
      <button onClick={() => handleQuantityChange(+1)} className="bg-gray-200 px-5 py-1 rounded-lg">
        +
      </button>
    </div>
    <button onClick={() => resetQuantity(quantity)} className=" bg-gray-200 px-5 my-4 rounded-lg">
      Reset
    </button>
    <button className="mt-2 bg-gray-200 px-5 py-2 rounded-lg" onClick={() => handleAdd(quantity)} disabled={!stock}>
      Agregar al carrito
    </button>
</div>
);
}

export default ItemCount;