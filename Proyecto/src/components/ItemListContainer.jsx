import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import categories from "../Mock/MockAsync.json";
import { fakeApiCall } from "../Mock/fakeApiCall";

const ItemListContainer = () => {
  const { id } = useParams();
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fakeApiCall(categories).then((res) => {
      setResponse(res);
      setLoading(false);
    });
  }, []);

  if (loading) return <h1 className="text-3xl font-bold text-center mt-8">Cargando...</h1>;

  const getProductosByCategory = (catId) => {
    if (catId) {
      return response.productos.filter(
        (product) => product.categoria === parseInt(catId)
      );
    }
  };

  const productsPorCategoria = getProductosByCategory(id);

  return (
    <>
      <div className="">
        <h1 className="text-3xl font-bold text-center mt-8">Categorias</h1>
        <div className="flex justify-around mt-12">
          {response.categorias.map((cat) => {
            return (
              <Link key={cat.id} to={`/item/${cat.id}`} className="block" >
                <div className="p-4 rounded-lg text-center border border-gray-300 hover:border-blue-500 hover:shadow-lg hover:transform hover:scale-105 transition duration-300 ease-in-out" style={{ width:"250px", height:"350px"}}>
                  <img src={cat.img} style={{width: "200px", height:"200px"}} />
                  <h2 className="mt-5 text-center text-2xl">{cat.nombre}</h2>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/*
        productsPorCategoria && (
            productsPorCategoria.map((producto) => (
                <Link key={producto.id} to={`/item/${producto.id}`}>    
                  <h2>{producto.nombre}</h2>
                </Link>
        ))
    )
  */}
    </>
  );
};

export default ItemListContainer;
