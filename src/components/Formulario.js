import React, { useState } from 'react';
import Error from './Error';

function Formulario({ busqueda, setBusqueda, setConsultar }) {
    // State de error
    const [error, setError] = useState(false);

    // Destructuring; obtener ciudad y país
    const { ciudad, pais } = busqueda;

    // Función que coloca los elementos en el state
    const handleBusqueda = (e) => {
        // Actualizar el State
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value,
        });
    };

    // Cuando el usuario hace submit al formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validar
        if (ciudad.trim() === '' || pais.trim() === '') {
            setError(true);
            return;
        }

        setError(false);

        // Pasarlo al componente principal
        setConsultar(true);
    };

    return (
        <form onSubmit={handleSubmit}>
            {error ? (
                <Error mensaje='Por favor, rellene todos los campos' />
            ) : null}
            <div className='input-field col s12'>
                <input
                    type='text'
                    name='ciudad'
                    id='ciudad'
                    value={ciudad}
                    onChange={handleBusqueda}
                />
                <label htmlFor='ciudad'>Ciudad: </label>
            </div>

            <div className='input-field col s12'>
                <select
                    name='pais'
                    id='pais'
                    value={pais}
                    onChange={handleBusqueda}
                >
                    <option value=''>-- Seleccione un país --</option>
                    <option value='AR'>Argentina</option>
                    <option value='CO'>Colombia</option>
                    <option value='CR'>Costa Rica</option>
                    <option value='ES'>España</option>
                    <option value='US'>Estados Unidos</option>
                    <option value='MX'>México</option>
                    <option value='PE'>Perú</option>
                </select>
                <label htmlFor='pais'>País: </label>
            </div>

            <div className='input-field col s12'>
                <button
                    type='submit'
                    className='waves-effect waves-light btn-large btn-block yellow accent-4 col s10 offset-s1'
                >
                    Buscar Clima
                </button>
            </div>
        </form>
    );
}

export default Formulario;
