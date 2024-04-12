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
          {response.categorias.map((categoria) => {
            return (
              <Link key={categoria.id} to={`/item/${categoria.id}`} className="" >
                <div className="flex flex-wrap justify-center">
                  <div className="p-4 rounded-lg text-center border border-gray-300 hover:border-blue-500 hover:shadow-lg hover:transform hover:scale-105 transition duration-300 ease-in-out" style={{ width:"250px", height:"350px"}}>
                    <img src={categoria.img} style={{width: "200px", height:"200px"}} />
                    <h2 className="mt-5 text-center text-2xl">{categoria.nombre}</h2>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
