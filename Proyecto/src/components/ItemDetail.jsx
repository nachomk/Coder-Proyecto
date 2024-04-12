import { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({item}) => {

    const hola = useContext(CartContext);

    console.log(hola)
    
    const handleAdd = () => {
        console.log("Agregado al carrito")
    }
    
    
    return (<> 
        <div className="container flex mx-auto my-auto">
            {item.nombre}
            {item.precio}
            <ItemCount stock={item.stock} initial={0} onAdd={handleAdd}/>
            <img src={item.imagen} style={{width: "200px"}} />
        </div>
        
    </>);
}
 
export default ItemDetail ;