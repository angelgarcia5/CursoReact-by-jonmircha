import React from 'react'
import { useState, useEffect } from 'react'
import "./frases.css"

function Frases() {
    const [respuesta, setRespuesta] = useState("")


    const handleClick = () => {
        const getFrases = async (url) => {
            try {
                let res = await fetch(url);
                let data = await res.json();
                console.log(data);
                setRespuesta(data.slip.advice);

            } catch (error) {
                console.log(error);
            }
        }
        getFrases("https://api.adviceslip.com/advice")
    }

    useEffect(() => {
        console.log("Se modifico la frase")
    }, [respuesta]);

    return (
        <>
            <h1>Api de Frases Random</h1>
            <div className='container-frases'>
                <p className='title'>Generador de Frases Random</p>
                <p className='respuesta'>"{respuesta}"</p>
                <button className='btn' onClick={handleClick}>Da cLick</button>
            </div>
        </>
    )
}

export default Frases