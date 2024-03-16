import React, { useState } from "react";

const Counter = () =>  {

    const [value, setValue] = useState(0);
    const stock = 10 ;

    const onAdd = (expr) => {
        if (expr === '+') {
            if (value < stock) {
                setValue(value+1)
            }
            if (value === stock) {
                setValue(0)
            }
        } else if (expr === '-') {
            if (value <= stock) {
                setValue(value-1)
            }
        }
    }

    return(<>
    <div className="flex items-center justify-center mt-28">
        <button className="text-4xl mx-7" onClick={() => onAdd('+')}> + </button>
        <div>{value}</div>
        <button className="text-4xl mx-7"  onClick={() => onAdd('-')} disabled={value === 0} > - </button>
        <button onClick={() => { console.log("Agregado al carrito ")}} className="mr-5"> Agregar al Carrito </button>
        <button onClick={() => {setValue(0)}}>Reset</button>
    </div>
    </>)
}
export default Counter;