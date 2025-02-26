import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Body from './Components/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header Current={0} Best={0}/>
      <Body />
    </>
  )
}

export default App
