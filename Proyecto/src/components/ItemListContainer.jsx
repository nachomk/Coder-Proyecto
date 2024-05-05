import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { collection, doc, getDocs, getFirestore, where, query } from 'firebase/firestore'
import ItemDetailContainer from "./ItemDetailContainer";

const ItemListContainer = () => {
  const { categoryId }= useParams();  
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoria, setCategoria] = useState([])
  const [responseProducto, setResponseProducto] = useState([])
  useEffect(() => {
    const db = getFirestore();
    const getItemsByDoc = collection(db,'categorias')
    getDocs(getItemsByDoc).then((snapshot) => {
      if (snapshot.size === 0) {
        console.log('no results')
      }
      setCategoria(snapshot.docs.map((doc) => ({id:doc.id , ...doc.data()})))
      setLoading(false)
    })

  },[])

  useEffect(() => {
    const db = getFirestore();
      const getProductsByCat = query(collection(db, 'productos'), where('categoria','==',parseInt(categoryId)))
      getDocs(getProductsByCat).then((snapshot) => { 
      if(snapshot.size === 0) {
        console.log('No hay productos')
      }
      setResponseProducto(snapshot.docs.map((doc) => ({id:doc.id , ...doc.data()})))
      setLoading(false)
    })
  },[categoryId])

  


  if (loading) return <h1 className="text-3xl font-bold text-center mt-8">Cargando categorias...</h1>;

  return (
    <>
    <div className="">
        <h1 className="text-3xl font-bold text-center mt-8">Categorias</h1>
        <div className="flex justify-around mt-12">
          {categoria.map(categoria => (           
              <Link key={categoria.id} to={`/category/${categoria.id}`} className="" >
                <div className="flex flex-wrap justify-center">
                  <div className=" p-4 rounded-lg text-center border border-gray-300 hover:border-blue-500 hover:shadow-lg hover:transform hover:scale-105 transition duration-300 ease-in-out" style={{ width:"250px", height:"350px"}}>
                    <img src={categoria.img} style={{width: "200px", height:"200px"}} />
                    <h2 className="mt-5 text-center text-2xl">{categoria.nombre}</h2>
                  </div>
                </div>
              </Link>
          ))}
        </div>
        {
          responseProducto && (
            <>
            <ItemDetailContainer responseProducto={responseProducto}/>
            </>
          )
        }
      {/*
        categoryId && response.map((item, index) => {
          return <ItemDetail key={index} item={item}/>
        })
      */}
    </div>
    
    </>
  );
};

export default ItemListContainer;
