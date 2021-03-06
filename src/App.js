import React, { useEffect, useState } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';

function App() {
    // State del formulario
    const [busqueda, setBusqueda] = useState({
        ciudad: '',
        pais: '',
    });
    const [consultar, setConsultar] = useState(false);

    // Destructuring; obtener ciudad y país
    const { ciudad, pais } = busqueda;

    useEffect(() => {
        const consultarAPI = async () => {
            if (consultar) {
                const appId = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
                const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

                const respuesta = await fetch(url);
                const resultado = await respuesta.json();

                console.log(resultado);
                setConsultar(false);
            }
        };
        consultarAPI();
    }, [consultar]);

    return (
        <>
            <Header titulo='App Clima' />
            <div className='contenedor-form'>
                <div className='container'>
                    <div className='row'>
                        <div className='col m6 s12'>
                            <Formulario
                                busqueda={busqueda}
                                setBusqueda={setBusqueda}
                                setConsultar={setConsultar}
                            />
                        </div>
                        <div className='col m6 s12'>2</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
