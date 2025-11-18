import React from 'react'
import { useEffect, useState } from 'react'


function scrollHooks() {

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        console.log("Fase de montaje");
    }, []) /* Los [] , hacen que solamente se monte una vez */

    useEffect(() => {
        console.log("Moviendo scroll");

        const detectarScroll = () => {
            setScrollY(window.pageYOffset);
        }

        window.addEventListener("scroll", detectarScroll);

        return () => {
            window.removeEventListener("scroll", detectarScroll);
            console.log("fase de desmontaje");
        }

    }, [scrollY]); /* Cuando pones algo se renderiza cada vez que el estado cambie , en esta ocasion cada vez que hagamos un cambio en el scroll , se renerizara */

    return (
        <div>scrollHook
            <h1>Scroll y de navegador {scrollY}</h1>

        </div>

    )
}

export default scrollHooks

