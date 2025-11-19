import React, { use } from 'react'
import { useState, useEffect } from 'react'

import "./Multiplo.css"


/*🟩 5. Contador que cambia el fondo cuando es múltiplo de 5

✔ Botones + y -
✔ Cada vez que el número sea múltiplo de 5 → cambia color con CSS
✔ Usa useEffect para detectar eso  */


function Multiplo() {

    const [cambio, setCambio] = useState(0);

    const [color, setColor] = useState("");

    const handleClickAumento = () => {
        setCambio(cambio + 1);
    }

    const handleClickDisminuir = () => {
        setCambio(cambio - 1);
    }

    const handleClickReiniciar = () => {
        setCambio(0);
    }


    useEffect(() => {
        if (cambio !== 0 && cambio % 5 === 0) {
            console.log("Es multiplo de 5 y cambio de color")
            setColor("cambio-color")
        } else {
            setColor("color")
        }
    }, [cambio]);

    return (
        <>
            <h1>Cada vez que sea multiplo de 5 cambiara de fondo</h1>
            <p className={color}>{cambio}</p> <br></br>
            <button onClick={handleClickAumento}>Sumar</button>
            <button onClick={handleClickDisminuir}>Restar</button>
            <button onClick={handleClickReiniciar}>Reiniciar</button>
        </>
    )
}

export default Multiplo