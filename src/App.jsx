import { useState } from 'react'
import './App.css'
import Componente from './Components/componente';

function App() {
  const [count, setCount] = useState(0)
  let nombre = "Angel";
  let estaciones = ["Primavera", "Verano", "Otono", "Inverino"];

  return (
    <>
      <h1>Hola {nombre}</h1>
      <ul>{estaciones.map((el, index) =>
        <li key={index}>{el}</li>
      )}</ul>

      <Componente msg="Hola soy un componente funcional" />
    </>
  )
}

export default App
