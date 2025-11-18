import { useState } from 'react'
import './App.css'
import Componente from './Components/componente';
import ProfileCard from './Components/1-Props/ProfileCard';
import Hobbies from './Components/1-Props/Hobbies';
import Usarios from './Components/1-Props/Usarios';
import Contador from './Components/2-UseState/UsState';
import RenderizadoCondicional from './Components/3-Renderizado Condicional/RenderizadoCondicional';
import RenderizadoElementos from './Components/4-Renderizado de Elementos/RenderizadoElementos';
import Eventos from './Components/5-Eventos y binding/Eventos';
import ManejadorEvento from './Components/6-Eventos sinteticos , nativos y personalizables/ManejadorEvento';
import ComunicacionEntreComponentes from './Components/7-Comunicacion entre componentes/ComunicacionEntreComponentes';
import CicloVida from './Components/8-Ciclo de vida de componentes/CicloVida';
import PracticarUseState from './Components/9-Hooks/PracticarUseState';
import ScrollHooks from './Components/10-Hook useEffect/scrollHooks';
import RelojHooks from './Components/10-Hook useEffect/relojHooks';


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


      <Contador />

      <hr />

      <RenderizadoCondicional esDiaoNoche={false} />
      <hr />

      <RenderizadoElementos />
      <hr />

      <Eventos />
      <hr />

      <ManejadorEvento />

      <hr />

      <ComunicacionEntreComponentes />

      <hr />

      <CicloVida />

      <hr />

      <PracticarUseState />
      <hr />

      <ScrollHooks />
      <hr />

      <RelojHooks />

    </>



  )
}

export default App
