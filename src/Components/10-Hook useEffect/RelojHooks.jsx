import React from 'react'
import { useState, useEffect } from 'react'


function Reloj({ hora }) {
    return <h3>{hora}</h3>
}

function RelojHooks() {
    const [hora, setHora] = useState(new Date().toLocaleTimeString());
    const [visible, setVisible] = useState(false);


    useEffect(() => {
        let temporizador;
        if (visible) {
            temporizador = setInterval(() => {
                setHora(new Date().toLocaleTimeString());
            }, 1000)
        } else {
            clearInterval(temporizador);
        }

        return () => {
            console.log("Fase de desmontaje");
            clearInterval(temporizador);
        }

    }, [visible])


    return (
        <div>
            <h1>Reloj con hooks</h1>
            {visible && < Reloj hora={hora} />}
            <button onClick={() => setVisible(true)}>Iniciar</button>
            <button onClick={() => setVisible(false)}>Detener</button>


        </div>
    )
}

export default RelojHooks