import React, { useState, useEffect } from 'react'
import "./CambioColor.css"

function CambioColor() {

    const [color, setColor] = useState("");

    const handleClick = (nuevoColor) => {
        setColor(nuevoColor);
    }

    useEffect(() => {
        console.log("El fondo cambio a: ", color)
    }, [color]);


    return (
        <>
            <h1>Cambio de color</h1>
            <h2 className={color}>Hola mundo</h2>
            <button onClick={() => handleClick("red")} className='red'>Red</button>
            <button onClick={() => handleClick("green")} className='green'>Green</button>
            <button onClick={() => handleClick("blue")} className='blue'>Blue</button>
        </>
    )
}

export default CambioColor
