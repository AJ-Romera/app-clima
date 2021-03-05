import React from 'react';

function Formulario() {
    return (
        <form>
            <div className='input-field col s12'>
                <input type='text' name='ciudad' is='ciudad' />
                <label htmlFor='ciudad'>Ciudad: </label>
            </div>

            <div className='input-field col s12'>
                <select name='pais' id='pais'>
                    <option value=''>-- Seleccione un país --</option>
                </select>
                <label htmlFor='pais'>País: </label>
            </div>
        </form>
    );
}

export default Formulario;
