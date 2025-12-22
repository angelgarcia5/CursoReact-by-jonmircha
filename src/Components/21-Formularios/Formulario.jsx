import React, { useState } from 'react'

function Formulario() {
    const [nombre, setNombre] = useState("");
    const [sabor, setSabor] = useState("");
    const [lenguaje, setLenguaje] = useState("");
    const [terminos, setTerminos] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("El formulario se envio")
    }

    return (
        <div>
            <h1>Formularios</h1>
            <form onSubmit={handleSubmit}> {/* evento para enviar formulario */}
                <label htmlFor="nombre">Nombre: </label>{/* El htmlfor sirve para que a la hora de presionar el label haga focus en el formulario , se asocia con el id del input*/}
                <input type="text" id='nombre' name='nombre' value={nombre} /* el id es para un identificador , el name para cuando enviemos un json sea la clave y el value el valor de esa clave */ onChange={(e) => setNombre(e.target.value)} />
                <p>{nombre}</p> {/* Cuando escribimos algo en el input se pasa ese valor en el estado */}

                <p>Elige tu sabor JS Favorito</p>
                <input type="radio" id='vanilla' name='sabor' value="vanilla" onChange={(e) => setSabor(e.target.value)} />
                <label htmlFor="vanilla">vanilla</label>
                <input type="radio" id='React' name='sabor' value="React" onChange={(e) => setSabor(e.target.value)} />
                <label htmlFor="React">React</label>
                <input type="radio" id='Angular' name='sabor' value="Angular" onChange={(e) => setSabor(e.target.value)} />
                <label htmlFor="Angular">Angular</label>
                <p>{sabor}</p> {/* CUando seleionamos una cambia el estado con el valor seleccionado */}

                <select name="lenguaje" id="lenguaje" onChange={(e) => setLenguaje(e.target.value)} defaultValue="">
                    <option value="">---</option>
                    <option value="js">Js</option>
                    <option value="Python">Python</option>
                    <option value="go">Go</option> {/* Hace que cuando selecionemos alguna opccion cambie el estado con el valor selecionado */}
                </select>
                <br>
                </br>
                <label htmlFor="terminos">Acepto terminos y condiciones</label>
                <input type="checkbox" id='terminos' name='terminos' onChange={(e) => setTerminos(e.target.checked)} /> {/* Hace que se ponga en true */}
                <br />
                <input type="submit" />

            </form>
        </div>
    )
}

export default Formulario