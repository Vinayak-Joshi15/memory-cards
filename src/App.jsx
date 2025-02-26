import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Body from './Components/Body'

function App() {

  return (
    <>
      <Header Current={0} Best={0}/>
      <Body Current={0} Best={0} />
    </>
  )
}

export default App
