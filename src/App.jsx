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
import EjercicioInput from './Components/10-Hook useEffect/EjercicioInput';
import EjercicioMensaje from './Components/10-Hook useEffect/EjercicioMensaje';
import ContadorAutomatico from './Components/10-Hook useEffect/ContadorAutomatico';
import CambioColor from './Components/10-Hook useEffect/CambioColor';
import MensajeOculto from './Components/10-Hook useEffect/MensajeOculto';
import Multiplo from './Components/10-Hook useEffect/Multiplo';
import InputLetras from './Components/10-Hook useEffect/InputLetras';
import UseEffectPeticion from './Components/11-useEffect peticiones/useEffectPeticion';
import UseEffectPeticionesEjemplo from './Components/11-useEffect peticiones/UseEffectPeticionesEjemplo';
import Exchange from './Components/12-Ejemplo exchange/exchange';
import Frases from './Components/13-Api frases/frases';
import Clima from './Components/14-Api Clima/Clima';
import Usario from './Components/15-Usuarios Api/Usuario';
import Recondicional from './Components/16-Renderizado Condicional/recondicional';
import ClimaPorCiudad from './Components/17-Api-Clima-con-Ciudad/ClimaPorCiudad';
import UserSearch from './Components/18-Usuarios-Random/UserSearch';
import Ref from './Components/19-Referencias/ref';
import PracticandoReferencias from './Components/19-Referencias/PracticandoReferencias';
import InputRef from './Components/20-Practicar-Referencias2/InputRef';
import Formulario from './Components/21-Formularios/Formulario';
import Estilos from './Components/22-EstilosCss/Estilos';


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
      <hr />

      <EjercicioInput />

      <hr />

      <EjercicioMensaje />

      <hr />

      <ContadorAutomatico />

      <hr />

      <CambioColor />

      <hr />

      <MensajeOculto />
      <hr />

      <Multiplo />
      <hr />

      <InputLetras />

      <hr />

      <UseEffectPeticion />
      <hr />
      <UseEffectPeticionesEjemplo />
      <hr />
      <Exchange />
      <hr />
      <Frases />
      <hr />

      <Clima />

      <hr />

      <Usario />
      <hr />

      <Recondicional />

      <hr />

      <ClimaPorCiudad />

      <hr />
      <UserSearch />


      <hr />

      <Ref />

      <hr />
      <PracticandoReferencias />

      <hr />

      <InputRef />

      <hr />
      <Formulario />
      <hr />
      <Estilos />


    </>



  )
}

export default App
