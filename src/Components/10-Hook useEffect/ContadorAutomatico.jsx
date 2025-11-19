import React, { use, useEffect, useState } from 'react'

/* 8️⃣ Contador automático

Un estado inicia en 0.

Cada 2 segundos aumenta en 1 automáticamente.

Agrega botones Pausar y Reanudar.

✔ Usa dos estados: contador y activo ✔ Intervalos ✔ Limpieza */



function ContadorAutomatico() {

    const [contador, setContador] = useState(0);

    const [activo, setActivo] = useState(true);


    useEffect(() => {
        let timer;
        if (activo) {
            timer = setInterval(() => {
                setContador(c => c + 1);
            }, 2000)
        }


        return () => clearInterval(timer);
    }, [activo])

    const pausar = () => {
        setActivo(false);
    }

    const reunadar = () => {
        setActivo(true);
    }


    return (
        <div>
            <h1>Contador automatico</h1>
            <p>{contador}</p>
            <button onClick={pausar}>Pausar</button>
            <button onClick={reunadar}>Reanudar</button>
        </div>

    )
}

export default ContadorAutomatico