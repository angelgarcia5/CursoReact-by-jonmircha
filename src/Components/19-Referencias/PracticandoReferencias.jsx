import React, { useRef } from 'react'
import RefCard from './RefCard';

function PracticandoReferencias() {

    let refBtn = useRef();
    let refCard = useRef();

    const handleClick = (e) => {
        if (refBtn.current.textContent === "Haz Clik Para ver la Carta") {
            refCard.current.style.display = "block";
            refBtn.current.textContent = "Cierra la carta";
        } else {
            refBtn.current.textContent = "Haz Clik Para ver la Carta";
            refCard.current.style.display = "none";
        }
    }

    return (
        <div>
            <h1>Practiando Referencias</h1>
            <button ref={refBtn} onClick={handleClick}>Haz Clik Para ver la Carta</button>
            <RefCard nombre="Angel" edad={21} carrera="ITC" semestre="6to" universidad="Tec de Mty" ref={refCard} />
        </div>
    )
}

export default PracticandoReferencias