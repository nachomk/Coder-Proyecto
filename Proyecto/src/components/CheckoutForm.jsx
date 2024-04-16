import { useState } from "react";

const checkoutForm = ({ onConfirm }) => {
    const [name, setName ] = useState('')
    const [phone, setPhone ] = useState('')
    const [email, setEmail ] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }
    return (<>
    <div>
        <form className="">
            <label onSubmit={handleConfirm} className="">
                Nombre
                <input type="text" value={name} onChange={({target}) => setName(target.value)}/>
            </label>
            <label >
                Telefono
                <input type="text" value={phone} onChange={({target}) => setName(target.value)}/>
            </label>
            <label >
                Telefono
                <input type="text" value={phone} onChange={({target}) => setName(target.value)}/>
            </label>
            <label >
                Telefono
                <input type="text" value={phone} onChange={({target}) => setName(target.value)}/>
            </label>
            <label >
                Telefono
                <input type="text" value={phone} onChange={({target}) => setName(target.value)}/>
            </label>
        </form>
    </div>
    </>);
}
 
export default checkoutForm;