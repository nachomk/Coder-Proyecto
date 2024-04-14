import { useState } from 'react'
import Navbar from './components/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <>
    <CartProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/category/:id' element={<ItemListContainer/>} />
          <Route path='/item/:id' element={<ItemDetailContainer/>} />
          <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
          {/*<Route path='/cart' element={<CartPage/>}/> 
          <Route path='/Remeras' element=? />
          <Route path='/Accesorios' element=? />
          <Route path='/Tickets' element=? />
          */}
        </Routes>
      </Router>
    </CartProvider>

    

    </>
  )
}

export default App;
