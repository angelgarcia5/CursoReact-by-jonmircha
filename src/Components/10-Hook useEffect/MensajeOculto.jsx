import React, { useEffect, useState } from 'react'



function MensajeOculto() {

    const mensajeOriginal = "Este es un mensaje cifradio, si quieres ocultarlo presiona el boton";

    const [visible, setVisible] = useState(true);

    const handleClick = (valor) => {
        setVisible(valor);
    }

    useEffect(() => {
        if (!visible) {
            console.log("El mensaje se oculto")
        }
    }, [visible])

    return (
        <>
            <h1>MensajeOculto</h1>
            {visible && mensajeOriginal}<br></br>
            <button onClick={() => handleClick(false)}>Ocultar</button>
            <button onClick={() => handleClick(true)}>Mostrar</button>
        </>
    )
}

export default MensajeOculto