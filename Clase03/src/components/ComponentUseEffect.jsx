import { useEffect, useState } from "react";

const ComponentUseEffect = () => {
    const [count , setCount] = useState(0);

    useEffect(()=> {
        console.log("Hola")

        return () => {
            console.log("Chau")
        }
    }, [])
    
    return(<>

        <div>
            <p>{`El valor de COUNT es ${count}`}</p>
            <button onClick={() => setCount(count + 1)}>Boton de COUNT</button>
        </div>

    </>);
}
export default ComponentUseEffect;