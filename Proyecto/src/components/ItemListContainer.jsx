import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import productos from '../Mock/Categorias.json'
import { fakeApiCall } from "../Mock/fakeApiCall";
import { collection, doc, getDocs, getFirestore, where } from 'firebase/firestore'
import ItemDetail from "./ItemDetail";

const ItemListContainer = () => {
  const { id }= useParams()
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoria, setCategoria] = useState([])
  

  useEffect(() => {
    const db = getFirestore();
    const prodRef = collection(db,'categorias')
    getDocs(prodRef).then((snapshot) => {
      setCategoria(snapshot.docs.map((item) => ({id:item.id , ...item.data()}), setLoading(false))
      
    )
    })

  },[])

  useEffect(() => {
    setLoading(true)
    if (id) {
      const getProducts = query(collection(db, 'productos'), where('id','==',parseInt(id)))
      getDocs(getProducts).then(snapshot => { if(snapshot.size === 0) {console.log('No hay categorias')}
      setResponse(snapshot.docs.map(doc => ({id:doc.id , ...doc.data()})))
      setLoading(false)
    })

    }
  },[id])

  console.log(response)
  if (loading) return <h1 className="text-3xl font-bold text-center mt-8">Cargando categorias...</h1>;

  return (
    <>
    <div className="">
        <h1 className="text-3xl font-bold text-center mt-8">Categorias</h1>
        <div className="flex justify-around mt-12">
          {categoria.map(categoria => (           
              <Link key={categoria.id} to={`/item/${categoria.id}`} className="" >
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
        id && response.map((item, index) => {
          return <ItemDetail key={index} item={item}/>
        })
      }
    </div>
    
    </>
  );
};

export default ItemListContainer;
