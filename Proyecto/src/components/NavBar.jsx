import React, { useState } from "react";
import CartWidget from "./CartWidget";
import './NavBar.css' ;

const Navbar = () => {
  const [showCateogires, setShowCateogires] = useState(false);

  return (
    <nav className="bg-red-700 py-4">      
      <div className="container mx-auto flex justify-between items-center">    
         
        <div className="flex items-center relative right-12" >
        <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path fill="#ffffff" d="M9.6 11.24h7.91L19.75 9H9.39c-2.85 0-3.62.34-5.17 1.81C2.71 12.3 0 15 0 15h3.38c.77-.75 2.2-2.13 2.85-2.75c.92-.87 1.37-1.01 3.37-1.01M20.39 9l-6 6H18l6-6zm-3.25 2.61H9.88c-2.22 0-2.6.12-3.55 1.07C5.44 13.57 4 15 4 15h3.15l.75-.75c.49-.49.75-.55 1.78-.55h5.37z"/></svg>
          <div className="text-white text-5xl font-bold">Argentina</div>
        </div>

        <div className="flex items-center flex-grow">
          <form className="bg-white p-2 h-[20%] w-full rounded-lg">
            <input className="w-full" placeholder="Buscar prendas, destinos y más..." type="text"/>
          </form>
        </div>

        <div className="ml-20 flex items-center justify-end">
          <ul className="flex space-x-6 justify-end">
            <li>
              <button
                className="text-white text-xl hover:underline font-bold"
                onClick={() => setShowCateogires(!showCateogires)}
              >
                Tienda
              </button>
              {showCateogires && (
                <ul className="absolute bg-white text-xl w-[19%] rounded-lg border border-black border-lg p-4">
                  <li>
                    <button className="hover:underline ">  Ropa</button>
                  </li>
                  <li>
                    <button className="hover:underline">  Tickets</button>
                  </li>
                  <li>
                    <button className="hover:underline">
                       Regalos/Accesorios
                    </button>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button className="text-white text-xl hover:underline font-bold">Calendario</button>
            </li>
            <li>
              <button className="text-white text-xl hover:underline font-bold">Contacto</button>
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