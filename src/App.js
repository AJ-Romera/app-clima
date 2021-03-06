import React, { useEffect, useState } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import Clima from './components/Clima';

function App() {
    // State del formulario
    const [busqueda, setBusqueda] = useState({
        ciudad: '',
        pais: '',
    });
    const [consultar, setConsultar] = useState(false);
    const [resultado, setResultado] = useState({});

    // Destructuring; obtener ciudad y país
    const { ciudad, pais } = busqueda;

    useEffect(() => {
        const consultarAPI = async () => {
            if (consultar) {
                const appId = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
                const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

                const respuesta = await fetch(url);
                const resultado = await respuesta.json();

                setResultado(resultado);
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
                        <div className='col m6 s12'>
                            <Clima resultado={resultado} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
