import React from 'react'
import "./RenderizadoCondicional.css"
function RenderizadoCondicional({ esDiaoNoche }) {

    return (
        <div className='contenedor-RenderizadoCondicional'>
            {esDiaoNoche ? <h3>Buenos dias</h3> : <h3>Buenas Noches</h3>}
        </div>
    )
}

export default RenderizadoCondicional