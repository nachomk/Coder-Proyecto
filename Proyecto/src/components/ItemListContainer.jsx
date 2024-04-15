import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import productos from '../Mock/Categorias.json'
import { fakeApiCall } from "../Mock/fakeApiCall";
import { collection, getDocs, getFirestore } from 'firebase/firestore'

const ItemListContainer = () => {
  const { id }= useParams()
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fakeApiCall(productos).then(res => { setResponse(res); setLoading(false);})
  }, [])

  useEffect(() => {
    const db = getFirestore();
    const prodRef = collection(db,'remeras')
    getDocs(prodRef).then((snapshot) => {
      snapshot.docs.map((item) => console.log({...item.data()}))
    })

  },[])

  const getProductosByCategoria = (categoriaId) => {
    if (categoriaId) {
      return response.productos.filter(producto => producto.categoria === parseInt(categoriaId))
    }
  }

  if (loading) return <h1 className="text-3xl font-bold text-center mt-8">Cargando categorias...</h1>;

  const productosPorCategoria = getProductosByCategoria(id);

  return (
    <>
      <div className="">
        <h1 className="text-3xl font-bold text-center mt-8">Categorias</h1>
        <div className="flex justify-around mt-12">
          {response.categorias.map(categoria => (           
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
        {productosPorCategoria && (
          <>
          <h2 className="text-2xl font-bold mt-10">{productosPorCategoria.length > 0 ? `Productos de la categoría` : 'No hay productos disponibles en esta categoría'}</h2><div className="grid grid-cols-3 gap-4 mt-4">
          {productosPorCategoria.map(producto => (
            <Link key={producto.id} to={`/item/${producto.id}`}>
              <div key={producto.id} className="bg-gray-200 p-4 rounded shadow-md">
                <h3 className="text-lg font-semibold">{producto.nombre}</h3>
              </div>
            </Link>

          ))}
        </div>
          </>
        )

        }
      </div>
    </>
  );
};

export default ItemListContainer;
