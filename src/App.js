import React, { useEffect, useState } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import Clima from './components/Clima';
import Error from './components/Error';

function App() {
    // State del formulario
    const [busqueda, setBusqueda] = useState({
        ciudad: '',
        pais: '',
    });
    const [consultar, setConsultar] = useState(false);
    const [resultado, setResultado] = useState({});
    const [error, setError] = useState(false);

    // Destructuring; obtener ciudad y país
    const { ciudad, pais } = busqueda;

    useEffect(() => {
        const consultarAPI = async () => {
            if (consultar) {
                const appId = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

                const respuesta = await fetch(url);
                const resultado = await respuesta.json();

                setResultado(resultado);
                setConsultar(false);

                // Detecta si encuentra la ciudad o país correctamente (cod:200) o no (cod:404)
                if (resultado.cod === '404') {
                    setError(true);
                } else {
                    setError(false);
                }
            }
        };
        consultarAPI();
        // eslint-disable-next-line
    }, [consultar]);

    // Carga Condicional de Componentes
    let componente;
    if (error) {
        componente = <Error mensaje='No hay resultados' />;
    } else {
        componente = <Clima resultado={resultado} />;
    }

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
                        <div className='col m6 s12'>{componente}</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
