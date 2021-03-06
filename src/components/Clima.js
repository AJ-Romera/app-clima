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

    // Descripción del tiempo (Ejemplo: Soleado)
    let weatherDesc = weather[0].description;

    switch (weatherDesc) {
        case 'clear sky':
            weatherDesc = 'Cielo Despejado';
            break;
        case 'few clouds':
            weatherDesc = 'Parcialmente Nublado';
            break;
        case 'scattered clouds':
            weatherDesc = 'Nubes Dispersas';
            break;
        case 'broken clouds':
            weatherDesc = 'Nublado';
            break;
        case 'shower rain':
            weatherDesc = 'Chubascos Dispersos';
            break;
        case 'rain':
            weatherDesc = 'Chubascos';
            break;
        case 'thunderstorm':
            weatherDesc = 'Tormenta';
            break;
        case 'snow':
            weatherDesc = 'Nieve';
            break;
        case 'mist':
            weatherDesc = 'Niebla';
            break;

        default:
            weatherDesc = 'Error, inténtelo de nuevo más tarde';
            break;
    }

    return (
        <div className='card-panel white col s12'>
            <div className='black-text'>
                <h2>El clima de {name} es: </h2>
                <p className='temperatura'>
                    {parseInt(main.temp - kelvin, 10)}
                    <span> &#x2103; </span>
                </p>
                <p className='temp-max-min'>
                    Máx: {parseInt(main.temp_max - kelvin, 10)}
                    <span> &#x2103; </span>
                    {'/ '}
                    Mín: {parseInt(main.temp_min - kelvin, 10)}
                    <span> &#x2103; </span>
                </p>
                <p className='tiempo-p'>
                    <img
                        className='tiempo-img'
                        src={iconUrl}
                        alt='icono-del-tiempo'
                    />
                </p>
                <p className='tiempo-desc'>{weatherDesc}</p>
            </div>
        </div>
    );
}

export default Clima;
