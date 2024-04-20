import React, { useId } from 'react'; 
import './Cart.css'
import { CartIcon, ClearCartIcon } from '../assets/icons';

const CartWidget = () => {
    const cartCheckboxId = useId()

    return (
        <>

        <label htmlFor={cartCheckboxId} className='cart-button' >
            <CartIcon/>
        </label>
        <input id={cartCheckboxId} type='checkbox' hidden/>

        <aside className='cart'>
            <ul>
                <li>
                    <img src="https://images.footballfanatics.com/scuderia-ferrari/scuderia-ferrari-2023-team-shirt_ss4_p-13368460+u-ege5w56cswq8f2mjky8c+v-c20539672ac544aaab406284c92d1c9e.jpg?_hv=2&w=340" alt="ferrari" />
                    <div>
                        <strong>Remera Ferrari</strong> - $29.99
                    </div>
                    <footer>
                        <small>
                            Cant: 1
                        </small>
                        <button>+</button>
                    </footer>
                </li>
            </ul>
            <button>
                <ClearCartIcon/>
            </button>
        </aside>
        </>
    )
}
export default CartWidget ;