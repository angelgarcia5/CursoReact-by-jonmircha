import React, { use, useState } from 'react'


function Clima() {

    const [ciudad, setCiudad] = useState("");
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        const getClima = async (url) => {
            try {

                let res = await fetch(url);
                let data = await res.json();
                console.log(data);

                if (!res.ok) {
                    throw new Error("Error al cargar la ciudad");
                }
            } catch (error) {
                console.log(error.message);
            }
        }

        getClima(`https://goweather.herokuapp.com/weather/{city}`)
    }


    return (
        <div className='container-clima'>
            <h1>Api Clima</h1>
            <input type="text" placeholder='Ingresa una ciudad' value={ciudad} onChange={((e) => { setCiudad(e.target.value) })} />
            <button onClick={handleClick}>Buscar</button>

            {loading && <p>Cargando....</p>}

            {weather && (
                <>
                    <p>Ciudad: {ciudad}</p>
                    <p>Clima: </p>
                    <p>Viento: </p>
                    <p>Descripcion: </p>
                </>

            )}
        </div>

    )
}

export default Clima