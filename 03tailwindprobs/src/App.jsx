import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  let pj = {
    name: "pj",
    my: "love",
  }
 
  return (
    <>
    <Card  let person = {pj}/>
    </>
  )
}

export default App
