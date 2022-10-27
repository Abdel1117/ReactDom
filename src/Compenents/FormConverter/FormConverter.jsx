import React from 'react'
import { useState } from 'react'

export default function FormConverter({ setValue }) {
    const [number, setNumber] = useState("");


    const handleSubmit = e => {
        e.preventDefault();
        setValue(parseFloat(number))
        setNumber("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                <input onChange={(e) => setNumber(e.target.value)} type="text" value={number} />
                <button type="submit">Envoyer</button>
            </form>
        </div>
    )
}
