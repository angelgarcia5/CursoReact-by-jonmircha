import React, { useState } from 'react'
import "./PracticarUseState.css"

function PracticarUseState() {

    const [contador, setContador] = useState(0)

    const handleClick = () => {
        setContador(contador + 1);
    }

    const handleDecrement = () => {
        setContador(contador - 1);
    }


    const handleReset = () => {
        setContador(0);
    }

    return (
        <div className='container-contador'>
            <h3>Esto es un contador: {contador} </h3>
            <button className='btn1' onClick={handleClick}>Agregar +</button>
            <button className='btn2' onClick={handleDecrement}>Restar -</button>
            <button onClick={handleReset}>Reiniciar</button>
        </div>

    )
}

export default PracticarUseState