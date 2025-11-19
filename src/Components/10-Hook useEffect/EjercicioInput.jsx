import React from 'react'
import { useState, useEffect } from 'react'

/* 🔥 Ejercicio 6: Formulario que muestra un mensaje en tiempo real

Objetivo:
Mientras escribes en un input de texto, abajo aparece:
"Hola, {nombre}"

Requisitos:

useState para el content del input.

useEffect para imprimir en consola cada vez que el usuario escriba.

Practicas:

✔ Estado controlado
✔ useEffect dependiente del input */

function EjercicioInput() {

    const [content, setContent] = useState("");

    const evento = (e) => {
        setContent(e.target.value);
    }

    useEffect(() => {
        console.log("El usario escribio en el input");
    }, [content]);

    return (
        <div>
            <h1>EjercicioInput</h1>
            <input onChange={evento} value={content} type="text" />
            <p>Hola,{content}</p>
        </div>
    )
}

export default EjercicioInput