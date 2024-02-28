import React, { useState } from "react";
import CartWidget from "./CartWidget";
const Navbar = () => {
  const [showCateogires, setShowCateogires] = useState(false);

  return (
    <nav className="bg-red-700 py-5">
      <div className="container flex items-center justify-between">
        <h1 className="text-white text-xl">F1Arg</h1>
      </div>
      
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center flex-grow">
          <form className="bg-white p-2 h-[20%] w-full rounded-lg">
            <input className="w-full" type="text" />
          </form>
        </div>

        <div className="ml-20 flex items-center justify-end">
          <ul className="flex space-x-6 justify-end">
            <li>
              <button
                className="text-white text-xl hover:underline"
                onClick={() => setShowCateogires(!showCateogires)}
              >
                Tienda
              </button>
              {showCateogires && (
                <ul className="absolute bg-white text-xl w-[19%] rounded-lg border border-black border-lg p-4">
                  <li>
                    <button className="hover:underline">  Ropa</button>
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
              <button className="text-white text-xl hover:underline">Calendario</button>
            </li>
            <li>
              <button className="text-white text-xl hover:underline">Contacto</button>
            </li>
            <li>
              <button className="text-white text-xl">
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