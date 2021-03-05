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
        const consultarAPI = (async) => {};
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
