import React, { useEffect, useState } from 'react'

function ClimaPorCiudad() {

  const [ciudad, setCiudad] = useState("");
  const [clima, setClima] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cords, setCords] = useState(null);

  const getDatos = () => {
    setClima(null);
    setLoading(true)

    const getCordenadas = async (url) => {
      try {
        let res = await fetch(url);
        let data = await res.json();
        setCords({
          lat: data.results[0].latitude,
          lon: data.results[0].longitude

        });
      } catch (error) {
        console.log("No se pudo acceder a las coordenadas de la ciudad");
        setLoading(false);
      }
    }

    getCordenadas(`https://geocoding-api.open-meteo.com/v1/search?name=${ciudad}`);
  }


  useEffect(() => {
    if (!cords) return;

    const getClima = async (url) => {
      try {
        let res = await fetch(url)
        let data = await res.json();
        setClima(data.current_weather)
        setLoading(false);


      } catch (error) {
        console.log("Error al conseguir el clima")
        setLoading(false);
      }
    }

    getClima(`https://api.open-meteo.com/v1/forecast?latitude=${cords.lat}&longitude=${cords.lon}&current_weather=true`)
  }, [cords]);


  return (
    <div>
      <h1>Trabjando desde cordenadas para sacar el Clima con api</h1>
      <p>Escribe Una ciudad Para obtener el clima</p>
      <input onChange={(e) => setCiudad(e.target.value)} type="text" value={ciudad} placeholder='Escribe una Ciudad' />
      <button onClick={getDatos}>Click</button>
      {loading && <p>Cargando....</p>}

      {!loading && clima && (
        <>
          <p>El clima de la ciudad es: {clima.temperature} °C</p>
          <p>El viento de la ciudad es: {clima.windspeed} km/h</p>
        </>
      )}

    </div>
  )
}

export default ClimaPorCiudad