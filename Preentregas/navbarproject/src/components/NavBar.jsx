import React, { useState } from "react";
import CartWidget from "./CartWidget";
const Navbar = () => {
  const [showCateogires, setShowCateogires] = useState(false);

  return (
    <nav className="bg-red-500 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="mr-20">
          <img src="" alt="" />
        </div>
        <div className="flex items-center justify-start flex-grow">
          <h1 className="text-xl ">F1Arg</h1>
                    
        </div>
        <div className="ml-20 flex items-center justify-end">
          <ul className="flex space-x-4 justify-end">
            <li>
              <button
                className="text-white text-xl"
                onClick={() => setShowCateogires(!showCateogires)}
              >
                Categorias
              </button>
              {showCateogires && (
                <ul className="absolute bg-white text-xl w-[19%]">
                  <li>
                    <button className="hover:underline">Categoría 1</button>
                  </li>
                  <li>
                    <button className="hover:underline">Categoría 2</button>
                  </li>
                  <li>
                    <button className="hover:underline">Categoría 3</button>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button className="text-white text-xl ">Productos</button>
            </li>
            <li>
              <button className="text-white text-xl ">Contacto</button>
            </li>
            <li>
              <button>
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
