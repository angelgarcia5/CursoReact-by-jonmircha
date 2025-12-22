import React, { useRef } from 'react'

/* Qué vas a construir

1️⃣ Un input
→ donde el usuario escribe texto

2️⃣ Un párrafo (<p>)
→ donde se muestra lo que escribió



4️⃣ Un botón “Limpiar”
→ borra el input y el párrafo
→ regresa el cursor al input */

function InputRef() {

    const inputRef = useRef();
    const textRef = useRef();

    const handleShow = () => {
        let valor = inputRef.current.value;
        textRef.current.textContent = valor;
    }

    const handleClear = () => {
        textRef.current.textContent = "";
    }


    return (
        <div>
            <h1>Input Refernces</h1>
            <input type="text" ref={inputRef} />
            <p ref={textRef}></p>
            <button onClick={handleShow}>Mostrar texto</button>
            <button onClick={handleClear}>Borrar texto</button>
        </div>
    )
}

export default InputRef