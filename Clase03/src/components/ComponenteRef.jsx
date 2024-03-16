import { useRef } from "react";

const ComponenteRef = () => {
    const ref = useRef(null) ;
    const inputRef = useRef(null);

    const handleClick = () => {
        ref.current.innerHTML = "Nuevo Contenido"
    }

    const handleClickInput = () => {
        alert(`El valor del input es ${inputRef.current.value}`)
    }

    return (
    <>
    <div className = "flex flex-col" ref={ref}> Este es mi contenido 
        <button onClick={handleClick}>Botón</button>
    </div>
    
    <div>
        <input type="text" ref={inputRef}/>
        <button onClick={handleClickInput}> Mostrar Valores</button>
    </div>
    
    
    </>
)
}

export default ComponenteRef ;