import React, { use } from 'react'
import { useState, useEffect } from 'react'
import "./exchange.css"




function Exchange() {
    const [amount, setAmount] = useState("");
    const [baseCurrency, setBaseCurrency] = useState("USD");
    const [targetCurrency, setTargetCurrency] = useState("MXN");
    const [exchangeRates, setExchangeRates] = useState({});
    const [conversionResult, setConversionResult] = useState(0);


    /* Funcion para convertir */
    const handleConvert = () => {
        if (!amount || !baseCurrency || !targetCurrency) return;

        const result = (Number(amount) / exchangeRates[baseCurrency]) * exchangeRates[targetCurrency];
        setConversionResult(result.toFixed(2));


    }


    useEffect(() => {
        const getMonedas = async (url) => {
            try {
                let res = await fetch(url);
                let data = await res.json();
                console.log(data);
                setExchangeRates(data.conversion_rates)
            } catch (error) {
                console.log("Error")
            }
        }

        getMonedas("https://v6.exchangerate-api.com/v6/f05a3a47904ea2c0acbfcd5b/latest/USD")
    }, [])

    /* Extraer Monedas del arreglo */
    const currencyList = Object.keys(exchangeRates);

    return (
        <div className='container-exchange'>
            <h1>Ejercicio con API de cambio de moneda.</h1>

            <input type="number" placeholder='Cantidad' value={amount} onChange={(e) => setAmount(e.target.value)} />

            <div className='container-2'>
                <select name="Moneda-Base" id="" value={baseCurrency} onChange={(e) => setBaseCurrency(e.target.value)}>

                    {currencyList.map((c) => (
                        <option key={c} value={c}>{c} </option>
                    ))}

                </select>

                <select name="Moneda-Destino" id="" value={targetCurrency} onChange={(e) => setTargetCurrency(e.target.value)}>

                    {currencyList.map((c) => (
                        <option key={c} value={c}>{c} </option>
                    ))}

                </select>
            </div>

            <button onClick={handleConvert} className='btn-convertir'>Convertir</button>


            <p className='resultado'>Resultado:{conversionResult} {targetCurrency}</p>

        </div>
    )
}

export default Exchange