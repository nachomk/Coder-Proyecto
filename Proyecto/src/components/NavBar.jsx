import React, { useEffect, useState } from "react";
import CartWidget from "./Cart";
import LogoWidget from "./LogoWidget";
import { Link, NavLink } from "react-router-dom";
import { collection, doc, getDocs, getFirestore, where, query } from 'firebase/firestore'


const Navbar = () => {
  const [showCategories, setShowCategories] = useState(false);
  /*const [categories, setCategories] = useState([])

  useEffect(() => {
    const db = getFirestore();
    const getItemsByDoc = collection(db,'categorias')
    getDocs(getItemsByDoc).then((snapshot) => {
      if (snapshot.size === 0) {
        console.log('no results')
      }
      setCategories(snapshot.docs.map((doc) => ({id:doc.id , ...doc.data()})))
    })
  },[])*/
  
  return (
    <nav className="bg-red-700 py-4">      
      <div className="container mx-auto flex justify-between items-center">    
         
        <Link className="flex items-center relative right-12" to="/">
          <LogoWidget/>
          <div className="text-white text-5xl font-bold">Argentina</div>
        </Link>

        <div className="flex items-center flex-grow ">
          <form className="bg-white p-2 h-[20%] w-full rounded-lg">
            <input className="w-full" placeholder="Buscar prendas, destinos y más..." type="text"/>
          </form>
        </div>

        <div className="ml-20 flex items-center justify-end">
          <ul className="flex space-x-6 justify-end">
            <li>
              <button
                className="text-white text-xl hover:underline font-bold"
                onClick={() => setShowCategories(!showCategories)}
              >
                Tienda
              </button>
              { showCategories && (
                <ul className="absolute bg-white text-xl w-[19%] rounded-lg border border-black border-lg p-4">
                  <li>
                    <NavLink to="category/1" className="hover:underline ">  Remeras</NavLink>
                  </li>
                  <li>
                    <NavLink to="/category/2" className="hover:underline">  Cascos</NavLink>
                  </li>
                  <li>
                    <NavLink to="/category/3" className="hover:underline">
                       Accesorios
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/category/4" className="hover:underline">
                       Tickets
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <NavLink  className="text-white text-xl hover:underline font-bold">Calendario</NavLink>
            </li>
            <li>
              <NavLink  className="text-white text-xl hover:underline font-bold">Contacto</NavLink>
            </li>
            <li>
              <button className="text-white text-xl ">
                <CartWidget/> 
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;