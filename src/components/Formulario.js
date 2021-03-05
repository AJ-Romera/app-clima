import React, { useState } from 'react';

function Formulario() {
    // State del formulario
    const [busqueda, setBusqueda] = useState({
        ciudad: '',
        pais: '',
    });

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

    return (
        <form>
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
        </form>
    );
}

export default Formulario;
