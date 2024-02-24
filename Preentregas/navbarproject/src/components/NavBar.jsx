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
        <div className="flex items-center flex-grow">      
          <h1 className="text-xl text-white ">F1Arg</h1>
          <form className="bg-white p-2 h-[20%] w-full rounded-lg">
          <input type="text" />
          </form>
        </div>
        <div className="ml-20 flex items-center justify-end">
          <ul className="flex space-x-4 justify-end">
            <li>
              <button
                className="text-white text-xl"
                onClick={() => setShowCateogires(!showCateogires)}
              >
                Tienda
              </button>
              {showCateogires && (
                <ul className="absolute bg-white text-xl w-[19%]">
                  <li>
                    <button className="hover:underline">Ropa</button>
                  </li>
                  <li>
                    <button className="hover:underline">Tickets</button>
                  </li>
                  <li>
                    <button className="hover:underline">Regalos/Accesorios</button>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button className="text-white text-xl ">Calendario</button>
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
