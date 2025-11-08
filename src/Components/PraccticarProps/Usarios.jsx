import React from 'react'

function Usarios({ users }) {
    return (
        < >
            <p>{users.nombre}</p>
            <p>{users.materia}</p>
            <p>{users.calificacion}</p>
        </>
    );
}

export default Usarios