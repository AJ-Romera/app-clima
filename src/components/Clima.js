import React from 'react';

function Clima({ resultado }) {
    // Extraer los valores
    const { name, main, weather } = resultado;

    if (!name) {
        return null;
    }

    // Grados Kelvin
    const kelvin = 273.15;

    // Icono
    const iconId = weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/wn/${iconId}@2x.png`;

    return (
        <div className='card-panel white col s12'>
            <div className='black-text'>
                <h2>El clima de {name} es: </h2>
                <p className='temperatura'>
                    {parseFloat(main.temp - kelvin, 10).toFixed(2)}
                    <span> &#x2103; </span>
                </p>
                <p>
                    Temperatura Máxima:{' '}
                    {parseFloat(main.temp_max - kelvin, 10).toFixed(2)}
                    <span> &#x2103; </span>
                </p>
                <p>
                    Temperatura Mínima:{' '}
                    {parseFloat(main.temp_min - kelvin, 10).toFixed(2)}
                    <span> &#x2103; </span>
                </p>
                <p className='icon'>
                    <img src={iconUrl} alt='weather-icon' />
                </p>
            </div>
        </div>
    );
}

export default Clima;
