const mockProducts = [{
    "id": 1,
    "nombreProducto": "gorra RB",
    "precio": 9.99,
    "tieneDescuento": true,
    "img":"https://images.footballfanatics.com/red-bull-racing/red-bull-racing-2024-new-era-max-verstappen-9forty-cap_ss5_p-201099729+pv-1+u-pxodpbloyz2a0hzrquwj+v-wz6e0s8abmpmnltxhgpk.jpg?_hv=2&w=900"
},{
    "id": 2,
    "nombreProducto": "remera RB",
    "precio": 10.99,
    "tieneDescuento": false,
    "img":"no tiene"
},{
    "id": 3,
    "nombreProducto": "llavero RB",
    "precio": 4.99,
    "tieneDescuento": true,
    "img":"no tiene"
},{
    "id": 4,
    "nombreProducto": "medias RB",
    "precio": 6.99,
    "tieneDescuento": false,
    "img":"no tiene"
}]

export const getProducts = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(mockProducts)
        }, 2000)
    })
}