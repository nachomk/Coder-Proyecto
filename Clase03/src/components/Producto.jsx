import { useEffect } from "react"

const Producto = () => {
    
    const products = [
        {id: 1, nombre: "Remera", precio: 30},
        {id: 2, nombre: "Pantalon", precio: 35},
        {id: 3, nombre: "Zapatillas", precio: 50},
    ]

    function promiseProducts (products) {
        return new Promise (function (resolve, reject) {
            setTimeout(() => {
               resolve(products) 
            }, 1000)
        })
    }

    useEffect(() => {
     /*   const functionTest = async () => {
            const productsNew =  await promiseProducts(products)

            console.log(productsNew);
        }
        functionTest()

        ESTE FUNCIONA IGUAL QUE EL .THEN
        */

        promiseProducts(products).then( res => console.log(res));
    }, [])
    
    return (<> 
        <div>
            {
                products.map((item, index) => {
                    return<><h1 key={index}>{item.nombre} ${item.precio} #{item.id}</h1></>
                })
            }
        </div>
    </>);
}
 
export default Producto;