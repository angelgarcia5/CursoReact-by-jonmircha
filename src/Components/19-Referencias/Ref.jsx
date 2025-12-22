import React, { useRef } from 'react'

function Ref() {

    let refMenu = useRef();
    let refMenuBtn = useRef();


    const handleToggleMenu = (e) => {
        if (refMenuBtn.current.textContent === "Menu") {
            refMenuBtn.current.textContent = "Cerrar";
            refMenu.current.style.display = "block";
        } else {
            refMenuBtn.current.textContent = "Menu";
            refMenu.current.style.display = "none";
        }
    }

    return (
        <div>
            <h1>Referencias</h1>
            <button id='menu-btn' ref={refMenuBtn} onClick={handleToggleMenu}>Menu</button>
            <nav id='menu' ref={refMenu}>
                <a href="#">Seccion 1</a><br />
                <a href="#">Seccion 2</a><br />
                <a href="#">Seccion 3</a><br />
                <a href="#">Seccion 4</a><br />
                <a href="#">Seccion 5</a><br />
            </nav>
        </div>
    )
}

export default Ref