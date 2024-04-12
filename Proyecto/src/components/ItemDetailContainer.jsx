import { useEffect, useState } from "react";
import products from '../Mock/MockAsync.json';
import  ItemDetail  from "./ItemDetail";
import { fakeApiCall } from "../Mock/fakeApiCall";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [productsCharged, setProductsCharged] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
 
    useEffect(() => {
      setLoading(true)
      fakeApiCall(products).then(resp => { setProductsCharged(resp); setLoading(false) })
    }, [])
  
    if (loading) return <h1 className="text-3xl font-bold text-center mt-8"> Cargando productos... </h1>
  
    return (<>
      <div>
        {
          productsCharged.productos.length > 0 && productsCharged.productos.map((item, index) => {
            return <ItemDetail item={item} />
          })}
      </div>
  
  
    </>);
  }
  
  export default ItemDetailContainer;