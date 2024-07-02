import React, {useState} from 'react';

export const Incrementar = () => {

    const [ number, setNumber] = useState(0);

    return (
        <div>
            {number > 1 ? <button onClick = { () => setNumber(number - 1) }>Disminuir</button> : <button disabled>Disminuir</button> }
            <button onClick = { () => setNumber(number + 1) }>Aumentar</button>
            <h1>Now number is {number}</h1>
        </div>
    )

}