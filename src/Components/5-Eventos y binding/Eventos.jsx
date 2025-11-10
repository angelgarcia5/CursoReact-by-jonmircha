import React, { use } from 'react'
import { useState } from 'react'
import "./Eventos.css"

function Eventos() {
    const [contador, setContador] = useState(0);

    return (
        <div className='contendor-evento'>
            <h1>Dale click para sumar al contador</h1>
            <p>{contador}</p>
            <button className='btn-click' onClick={() => setContador(contador + 1)}>Click</button><br></br>
            <button onClick={() => setContador(0)}>Reiniciar Contador</button>
        </div>
    )
}

export default Eventos