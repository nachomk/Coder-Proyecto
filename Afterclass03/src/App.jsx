import { useEffect } from 'react'
import './App.css'
import {Container} from './components/Container'
import { getProducts } from './Mock/AsyncMock'
import ItemDetailContainer from './components/ItemDetailContainer'
import ApiCall from './components/ApiCall'

function App() {
  const greeting = "Hola, esta es mi primera aplicacion de React :)"

  useEffect( () => {
    getProducts().then(res => console.log(res))
  }, [])
  return (
    <>
      {/*<Container message={greeting}/>
      <ItemDetailContainer/>*/}
      <ApiCall/>
    </>
  )
}

export default App