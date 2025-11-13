import React, { useState } from "react";
import "./Comunicacion.css";

// 🧒 Componente Hijo
function Hijo({ onEnviarMensaje }) {
    return (
        <div className="hijo">
            <h3>Componente Hijo</h3>
            <button onClick={() => onEnviarMensaje("Hola papá, soy tu hijo 👋")}>
                Enviar mensaje al padre
            </button>
        </div>
    );
}

// 👨‍👦 Componente Padre
function ComunicacionEntreComponentes() {
    const [mensaje, setMensaje] = useState("");

    // 📩 Función que el hijo llamará
    const recibirMensaje = (texto) => {
        setMensaje(texto);
    };

    return (
        <div className="padre">
            <h2>Componente Padre</h2>
            <p><strong>Mensaje recibido:</strong> {mensaje}</p>

            {/* 🔽 Pasamos la función como prop al hijo */}
            <Hijo onEnviarMensaje={recibirMensaje} />

        </div>
    );
}

export default ComunicacionEntreComponentes;
