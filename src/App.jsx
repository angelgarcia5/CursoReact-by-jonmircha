import { useState } from 'react'
import './App.css'
import Componente from './Components/componente';
import ProfileCard from './Components/PraccticarProps/ProfileCard';
import Hobbies from './Components/PraccticarProps/Hobbies';
import Usarios from './Components/PraccticarProps/Usarios';

function App() {
  const [count, setCount] = useState(0)
  let nombre = "Angel";
  let estaciones = ["Primavera", "Verano", "Otono", "Inverino"];

  const persona = {
    nombre: "Leo",
    materia: "Mate",
    calificacion: 10
  }

  return (
    <>
      <h1>Hola {nombre}</h1>
      <ul>{estaciones.map((el, index) =>
        <li key={index}>{el}</li>
      )}</ul>

      <h3>Estamos pasando un mensaje simple como prop</h3>
      <Componente msg="Hola soy un componente funcional" />
      <hr />

      <h3>Profile card para pasar varias props</h3>
      <ProfileCard nombre="Angel" edad={21} ciudad="Monterrey" />
      <hr />


      <h3>Estamos iterando con map</h3>
      <Hobbies hobbies={["Jugar fut", "Ver pelis", "Pasear al perro"]} />
      <hr />

      <h3>Estamos pasando como prop un objeto</h3>
      <Usarios users={persona} />
      <hr />

    </>
  )
}

export default App
