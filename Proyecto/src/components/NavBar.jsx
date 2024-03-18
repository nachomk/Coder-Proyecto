import React, { useState } from "react";
import CartWidget from "./CartWidget";
import LogoWidget from "./LogoWidget";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showCategories, setShowCategories] = useState(false);

  return (
    <nav className="bg-red-700 py-4">      
      <div className="container mx-auto flex justify-between items-center">    
         
        <div className="flex items-center relative right-12">
          <LogoWidget/>
          <div className="text-white text-5xl font-bold">Argentina</div>
        </div>

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
                       Regalos/Accesorios
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <NavLink to="/category/4" className="text-white text-xl hover:underline font-bold">Calendario</NavLink>
            </li>
            <li>
              <NavLink to="/category/5" className="text-white text-xl hover:underline font-bold">Contacto</NavLink>
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