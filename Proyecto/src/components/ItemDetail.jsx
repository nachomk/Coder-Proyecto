import { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const ItemDetail = ({ item }) => {
  const { addItem, removeItem } = useContext(CartContext);

  
  const onAdd = (quantity) => {
    addItem(item, quantity)
    toast('El item se ha agregado correctamente')
  };

  const onRemove = (quantity) => {
    removeItem(item.id, quantity)
    toast('El item se ha eliminado correctamente')
  }
  

  return (
    <>
    
      <div style={{width: "320px", height: "320px"}} className="mx-auto border border-gray-300 rounded-lg hover:border-blue-500 hover:shadow-lg hover:transform hover:scale-105 transition duration-300 ease-in-out">
            <Link>
                <img
                  src={item.imagen}
                  style={{ width: "200px", height: "200px" }}
                  className="mx-auto mt-3"
                />
                <h2 className="text-center mt-7 text-xl">{item.nombre}</h2>
                {/*<p className="text-gray-600 text-center text-xl">{item.precio}</p>
                <ItemCount stock={item.stock} initial={0} onAdd={onAdd} item={item} onRemove={onRemove}/>*/}
            </Link>
      </div>
    
    </>
  );
};

export default ItemDetail;
