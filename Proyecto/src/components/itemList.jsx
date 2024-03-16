import { useEffect, useState } from "react";
import products from '../utils/MockAsync.json';
import Item from "./Item";

const ItemList = () => {
    const [productsCharged, setProductsCharged] = useState([])

    const fakeApiCall = () => {
        return new Promise(( resolve, reject ) => {
            setTimeout(()=> {
                resolve(products)
            }, 2000)
        })
    }
    
    useEffect(() => {
        const respProducts = fakeApiCall(products).then(resp => setProductsCharged(resp))
    }, [])
    
    console.log(productsCharged)
    return (<> 
        <div>
            {
                productsCharged.productos.length > 0 && productsCharged.productos.map((item, index ) => {
                    return <Item key={index} item={item}/>
                })
            }
        </div>
    </>);
}
 
export default ItemList ;