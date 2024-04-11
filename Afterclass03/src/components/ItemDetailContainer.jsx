import { useEffect, useState } from "react";
import { getProducts } from "../Mock/AsyncMock"
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        getProducts().then(res =>{ 
            setProduct(res)
            setLoading(false)})  
    }, [])
    
    if(loading) return <h1> Cargando... </h1>

    console.log(product)
    return (<>
        {
            product.map((item) => (
                <ul key={item.id}>
                    <ItemDetail item={item}/>
                </ul>
            ))
        }
    </>);
}
 
export default ItemDetailContainer;