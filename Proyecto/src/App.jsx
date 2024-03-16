import { useState } from 'react'
import './App.css'
import Navbar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemList from './components/itemList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Navbar/>
    <ItemListContainer greeting="Prueba del body"/>
    <ItemList/>

    </>
  )
}

export default App;
