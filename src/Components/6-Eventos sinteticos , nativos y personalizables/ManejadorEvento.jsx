import React from 'react'
import "./Manejador.css"

function ManejadorEvento() {

    const handleClick = () => {
        console.log("Hiciste click en este boton")
    }

    const handleClick2 = (e, nombre) => {
        console.log(nombre);
        console.log(e.target);
    }

    return (
        <div className='container-manejador'>
            <button className='btn-1' onClick={handleClick}>Click en este boton</button>
            <button onClick={(e) => handleClick2(e, "Angel")}>Haz click para pasar parametros</button>
        </div>
    )
}

export default ManejadorEvento