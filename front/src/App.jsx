import React, { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function App() {
  const [title, setTitle] = useState("...")
  const [hours, setHours] = useState(0)

  //arrayvazio no effect executa apenas uma vez
  //fetch API - MDN
  useEffect(()=>{
    fetch("http://localhost:3001/frontend")
      .then(res => res.json())
      .then(({title, hours}) => {
        setTitle(title)
        setHours(hours)
      })
  },[])

  return (
    <React.Fragment>
      <h1>FrontEnd</h1>
      <h2>{title}</h2>
      <h3>{hours}</h3>
    </React.Fragment>
  )
}

export default App
