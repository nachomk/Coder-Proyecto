import { NavLink } from "react-router-dom";

const Home = () => {
    return (
    <>
    <NavLink to='/users'> Usuarios</NavLink>
    <NavLink to='/comments'> Comentarios</NavLink>
    </>
    );
}
 
export default Home;