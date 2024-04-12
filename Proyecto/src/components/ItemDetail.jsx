import { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
  const handleAdd = () => {
    console.log("Agregado al carrito");
  };

  return (
    <>
      <div className="border border-gray-300 rounded-lg overflow-hidden hover:border-blue-500 hover:shadow-lg hover:transform hover:scale-105 transition duration-300 ease-in-out">
        <div className="p-4">
          <div className="">
            <Link style={{ width: "250px", height: "350px" }}>
              <img
                src={item.imagen}
                style={{ width: "200px", height: "200px" }}
                className="w-full h-auto mb-4"
              />
              <h2 className="text-xl">{item.nombre}</h2>
              <p className="text-gray-600">{item.precio}</p>
              <ItemCount stock={item.stock} initial={0} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
