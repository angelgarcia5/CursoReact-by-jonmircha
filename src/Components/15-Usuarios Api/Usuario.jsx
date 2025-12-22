import React from 'react'
import "./Usuario.css"
import { useState, useEffect } from 'react'

function Usuario() {
    const [usuario, setUsuario] = useState(null);
    const [loading, setLoading] = useState(false);


    const getUsuario = async () => {
        try {
            setLoading(true);
            let res = await fetch("https://randomuser.me/api/");
            let data = await res.json();
            setUsuario(data.results[0]);
            setLoading(false);
        } catch (error) {
            console.log("Error no se pudo hacer la peticion");
        }
    }




    return (

        <>
            <h1>Usuario Generador de Api </h1>
            <button onClick={getUsuario}>
                {loading ? (<p>Cargando...</p>) : (<p>Obtener Usuario</p>)}
            </button>

            {!loading && usuario && (
                <div>
                    <p>{usuario.name.first}</p>
                    <p>{usuario.name.last}</p>
                    <p>{usuario.location.country}</p>
                    <p>{usuario.email}</p>
                    <p>{usuario.dob.age}</p>
                    <img src={usuario.picture.medium} alt="Usuario" />

                </div>
            )}
        </>
    )
}

export default Usuario