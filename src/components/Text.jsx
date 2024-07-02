import React, { useState } from 'react';

export const Value = () => {

    const [ text, setText ] = useState('');
    
    return (
        <div>
            <label htmlFor="">Ingresar texto:<input onChange = { (e) => setText(e.target.value) } type="text" name="input" id="" /></label>
            <p>Ud ha escrito: { text } </p>
        </div>
    )
    
}