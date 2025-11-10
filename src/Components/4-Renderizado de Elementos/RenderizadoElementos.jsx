import React, { use, useState } from 'react'
import "./RenderizadoElementos.css"


function RenderizadoElementos() {

    const [Nombres, setNombres] = useState(["Angel", "Felipe", "Raul", "Alex"])

    return (
        <div className='contenedor-RenderizadoElementos'>
            <ul>
                {Nombres.map((el, index) => (
                    <li key={index}>{el}</li>
                ))}
            </ul>
        </div>
    )
}

export default RenderizadoElementos