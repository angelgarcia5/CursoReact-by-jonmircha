/* 4. Input que muestre cuántas letras has escrito
✔ Input
✔ Texto abajo: "Has escrito 5 letras"
✔ useEffect detecta cambios en el texto */

import React from 'react'
import { useState, useEffect } from 'react'


function InputLetras() {

    const [mensaje, setMensaje] = useState("");

    const evento = (e) => {
        setMensaje(e.target.value);
    }

    useEffect(() => {
        console.log("Se escribio en el input y la cantidad de letras es de: ", mensaje.length)
    }, [mensaje]);

    return (
        <>
            <h1>Este es un input que te dice cuantos caracteres has escrito</h1>
            <input onChange={evento} value={mensaje} type="text" />
            <p>{mensaje}</p>
            <p>Has escrito {mensaje.length} letras</p>

            <p></p>
        </>
    )
}

export default InputLetras