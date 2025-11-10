import React, { use, useState } from 'react'
import "./UseState.css"

function Contador() {

    const [contador, setContador] = useState(0);

    return (
        <div className='Contenedor-contador'>
            <h3>Esto es un contador</h3>
            <p>{contador}</p>
            <button onClick={() => setContador(contador + 1)}>Click para Sumar 1</button>
            <button onClick={() => setContador(0)}>Boton para reiniciar</button>
        </div>
    )
}

export default Contador