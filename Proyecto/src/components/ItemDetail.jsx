import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    
    const handleAdd = () => {
        console.log("Agregado al carrito")
    }
    
    
    return (<> 
        <div className="mx-auto my-auto">
            {item.nombre}
            {item.precio}
            <ItemCount stock={item.stock} initial={0} onAdd={handleAdd}/>
        </div>
    </>);
}
 
export default ItemDetail ;