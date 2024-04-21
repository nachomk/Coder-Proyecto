import { useEffect, useState } from "react";
import products from '../Mock/MockAsync.json';
import  ItemDetail  from "./ItemDetail";
import { fakeApiCall } from "../Mock/fakeApiCall";

const ItemDetailContainer = ({responseProducto}) => {
    const [productsCharged, setProductsCharged] = useState({})
    const [loading, setLoading] = useState(true)
 
  
    //if (loading) return <h1 className="text-3xl font-bold text-center mt-8"> Cargando productos... </h1>
  
    return (<>
      {<div className="grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap- mt-12 ">
        {
          responseProducto.length > 0 && responseProducto.map((item) => {
            return <ItemDetail item={item} />
          })}
        </div>}
    </>);
  }
  
export default ItemDetailContainer;