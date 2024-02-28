import { useState } from 'react'
import './App.css'
import Navbar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Navbar/>
    <ItemListContainer greeting="Prueba de Greeting"/>

    </>
  )
}

export default App;
