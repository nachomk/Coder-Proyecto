import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    
    const handleAdd = () => {
        console.log("Agregado al carrito")
    }
    
    
    return (<> 
        <div className="container flex mx-auto my-auto">
            {item.nombre}
            {item.precio}
            <ItemCount stock={item.stock} initial={0} onAdd={handleAdd}/>
        </div>
        <img src={item.imagen} style={{width: "200px"}} />
    </>);
}
 
export default ItemDetail ;