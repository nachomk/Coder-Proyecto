const ItemDetail = ({ item }) => {
    return (<>
    <li>{item.precio}</li>
    <li>{item.nombreProducto}</li>
    <li>{item.tieneDescuento ? "Con descuento" : "Sin descuento"}</li>
    <img src={item.img} alt="" style={{width: "200px"}}/>
    </>);
}
 
export default ItemDetail;