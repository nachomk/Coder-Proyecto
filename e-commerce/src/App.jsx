import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    fetch("https://api.mercadolibre.com/sites/MLA/search#json")
    .then((response) => {
        return response.json();
    })
    .then ((user) => {
        console.log(user);
    })
  )}

export default App
