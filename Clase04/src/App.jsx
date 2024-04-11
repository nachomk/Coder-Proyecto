import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { withApprovalCard } from './hoc/withApprovalCard'
import CommentDetail from './components/CommentDetail'
import ApprovalCard from './render-props/ApprovalCard'
import useName from './hooks/useName'

function App() {
  const name = useName();
  //const CommentWithApprovalCard = withApprovalCard(CommentDetail);
  
  //const [poke, setPoke] = useState([])
  /* useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon")
      const resFormatted = await res.json();
      setPoke(resFormatted.results.slice(0, 10));
    }
  fetchData();
  },[])
*/
  return (
    <>
    { /*
      poke.length > 0 &&
      poke.map(({ name , url }) => 
        <>
          <h1 key={name}>{name}</h1>
          <a href="">{url}</a>
        </>
      )
    */}
      {/*<CommentWithApprovalCard author="Ignacio" date="10/04 a las 13" message="Prueba de Message"/>*/}
      {/*<ApprovalCard 
      render = {
        name => (
          <CommentDetail 
          author="Ignacio" date="10/04 a las 13" message="Prueba de Message" name={name}/>
        )
      }
    />*/}
    <CommentDetail author="Ignacio" date="10/04 a las 13" message="Prueba de Message" name={name}/>
    </>
  )
}

export default App ;