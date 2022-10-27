import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Animal({ name, quantity, index, animalsDelete, animalsQuantityAdd }) {
    const [toogle, setToogle] = useState(false)

    useEffect(() => {
        console.log("Composant Instancié ! ")

        return () => {
            console.log("Composant détruit")
        }

    }, [])
    useEffect(() => {
        console.log(name + " valeur toogle ou name modifié")
    }, [toogle, name])
    return (
        <div className='animal'>
            {name} <br />
            {quantity} <br />

            <button onClick={() => setToogle(!toogle)}>Edit</button>
            {
                toogle &&
                <div>
                    <button onClick={() => animalsDelete(index)}>X</button>
                    <button onClick={() => animalsQuantityAdd(index)}>+1</button>
                </div>
            }
        </div>
    )
}
