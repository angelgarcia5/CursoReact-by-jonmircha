import React, { useEffect, useState } from "react";

function CicloVida() {
    const [contador, setContador] = useState(0);

    // 🟢 Se ejecuta al montar (una sola vez)
    useEffect(() => {
        console.log("🟢 [Montaje] El componente se ha montado");

        // 🔴 Se ejecuta al desmontar
        return () => {
            console.log("🔴 [Desmontaje] El componente se va a desmontar");
        };
    }, []);

    // 🔵 Se ejecuta cada vez que el componente se actualiza
    useEffect(() => {
        console.log("🔵 [Actualización] El componente se ha actualizado");
    });

    // 🟣 Se ejecuta solo cuando cambia 'contador'
    useEffect(() => {
        console.log(`🟣 [Cambio específico] El contador ahora es: ${contador}`);
    }, [contador]);

    return (
        <div>
            <h2>Ciclo de vida de nuestro componente</h2>
            <p>Contador: {contador}</p>
            <button onClick={() => setContador(contador + 1)}>
                Incrementar
            </button>
        </div>
    );
}

export default CicloVida;
