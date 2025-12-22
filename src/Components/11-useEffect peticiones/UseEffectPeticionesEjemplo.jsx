import React from 'react'
import { useState, useEffect } from 'react'
import "./UserCard.css"
import { use } from 'react';




function UserCard({ user }) {
    const [mostrarDetalle, setMostrarDetalle] = useState(false);

    const handleClick = () => {
        setMostrarDetalle(!mostrarDetalle);
    }

    return (
        <div className='userCard-container'>
            <p>Nombre:{user.name} </p>
            <p>Email:{user.email} </p>
            <p>Ciudad:{user.address.city} </p>
            <button onClick={handleClick} className='btn-more'>
                {mostrarDetalle ? "Ocultar detalle" : "Mostrar Detalle"}
            </button>
            {
                mostrarDetalle && (
                    <div>
                        <p>Telefono: {user.phone}</p>
                        <p>Comapñia: {user.company.name}</p>
                    </div>

                )
            }
        </div>
    )

}



function UseEffectPeticionesEjemplo() {
    const [usuario, setUsuario] = useState([]);

    useEffect(() => {
        const getUsuarios = async (url) => {
            try {
                let res = await fetch(url);
                let data = await res.json();
                console.log("useEffect se ejecuto")
                setUsuario(data);
            } catch (error) {
                console.log("Error");
            }

        }


        getUsuarios("https://jsonplaceholder.typicode.com/users");
    }, [])



    return (
        <>
            <h1>UseEffectPeticionesEjemplo</h1>
            <div className="cards-wrapper">
                {usuario.map(el => (
                    <UserCard key={el.index} user={el} />
                ))

                }
            </div>

        </>
    )
}

export default UseEffectPeticionesEjemplo