export const Item = ({item}) => {
    return (<> 
        <div className="mx-auto my-auto">
            {item.nombre}
            {item.precio}
        </div>
    </>);
}
 
export default Item ;