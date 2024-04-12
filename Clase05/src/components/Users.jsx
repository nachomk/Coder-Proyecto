import { useEffect, useState } from "react";
import { getUsers } from "../utils/AsyncMock";

const Users = () => {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchInput, setSearchInput] = useState('')

    useEffect( () => {
        getUsers().then (res => {
            setUser(res)
            setLoading(false)
        })
    },[])

    const handleSearch = (e) => {
        const { value } = e.target;
        setSearchInput(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("información enviada")
    } 

    if (loading) return <h1>Cargando usuarios...</h1>

    const filteredUsers = user.length > 0 && searchInput !== '' ? user.filter((u) => u.name.toLowerCase().includes(searchInput.toLowerCase())) : user
    return (<>
    {
        user.length > 0 && filteredUsers.map((u) => {
            return <div key={u.userId}>
                <p>{u.name} - {u.mail} - {u.online ? "Conectado" : "Desconectado"}</p>
            </div>
        })
    }
    {/*<input type="text" placeholder="Buscar usuarios..." value={searchInput} onChange={(e) => handleSearch(e)}/>*/}
    <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="Buscar usuarios..." value={searchInput} onChange={(e) => handleSearch(e)}/>
        <button type="submit">Boton</button>
    </form>
    </>);
}
 
export default Users;