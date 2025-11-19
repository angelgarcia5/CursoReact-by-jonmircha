import React, { useEffect, useState } from 'react'

function EjercicioMensaje() {

    const [mensaje, setMensaje] = useState("")

    useEffect(() => {


        const timer = setInterval(() => {
            setMensaje("Este es un mensaje aleatorio");
        }, 5000)

        return () => clearInterval(timer);
    }, [])

    return (
        <div>
            <h1>Mensaje despues de 5 segundos</h1>
            <p>{mensaje}</p>
        </div>
    )
}

export default EjercicioMensaje