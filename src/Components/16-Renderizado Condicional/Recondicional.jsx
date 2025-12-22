import React, { useState } from 'react'

function Recondicional() {

    const [resultado, setResultado] = useState(false);

    const handleClick = () => {
        setResultado(true);
    }
    return (
        <>
            <h1>Ejemplo de Renderizasdo Condicional</h1>
            <button onClick={handleClick}>
                {resultado ? (<p>Obten otro vez el mensaje</p>) : (<p>Presiona el boton para ver el mensaje</p>)} {/* Aqui usamos el operador ternario que es un if else */}
            </button>
            {resultado && (<p>Esto saldra solo si es verdadero</p>)} {/* Aqui usamos el operador && que funciona solamente si es verdadero la condicion , si es asi , entonces renderiza lo que debe */}
        </>
    )
}

export default Recondicional



