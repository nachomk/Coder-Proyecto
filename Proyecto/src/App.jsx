import Navbar from './components/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { CartContext, CartProvider } from './context/CartContext'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <>
    <CartProvider>
      <Router>
        <Navbar/>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="light"
          transition: Slide
          />
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/category/:id' element={<ItemListContainer/>} />
          <Route path='/item/:id' element={<ItemDetailContainer/>} />
          <Route path='*' element={<h2>404 NOT FOUND</h2>}/>       
        </Routes>
      </Router>
    </CartProvider>
    </>
  )
}

export default App;
