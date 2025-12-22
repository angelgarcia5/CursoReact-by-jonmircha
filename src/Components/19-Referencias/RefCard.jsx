import React, { forwardRef } from 'react';

const RefCard = forwardRef(({ nombre, edad, carrera, semestre, universidad }, ref) => {
    return (
        <div ref={ref}>
            <p>Hola mi Nombre es {nombre}</p><br />
            <p>Edad: {edad}</p><br />
            <p>Carrera: {carrera}</p><br />
            <p>Semestre: {semestre}</p><br />
            <p>Universidad: {universidad}</p>
        </div>
    );
}
);

export default RefCard;


