import { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
  const handleAdd = () => {
    console.log("Agregado al carrito");
  };
  const hola = useContext(CartContext);
  console.log(hola)

  return (
    <>
    
      <div style={{width: "320px", height: "370px"}} className="mx-auto border border-gray-300 rounded-lg hover:border-blue-500 hover:shadow-lg hover:transform hover:scale-105 transition duration-300 ease-in-out">
            <Link>
                <img
                  src={item.imagen}
                  style={{ width: "200px", height: "200px" }}
                  className="mx-auto"
                />
                <h2 className="text-center mt-3 text-xl">{item.nombre}</h2>
                <p className="text-gray-600 text-center text-xl">{item.precio}</p>
                <ItemCount stock={item.stock} initial={0} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)} />
            
            </Link>
      </div>
    
    </>
  );
};

export default ItemDetail;
