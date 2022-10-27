import React from 'react'
import { useState } from 'react'



function createTriangle(number) {
    let array_triangle = []
    for (let i = 0; i < number; i++) {
        let bgColor = Math.floor(Math.random() * 16777215).toString(16);
        let width = Math.floor(Math.random() * 200) + 1;
        let height = Math.floor(Math.random() * 100) + 1;

        let myDiv = <div style={{ backgroundColor: `${bgColor}`, height: `${height}`, width: `${width}` }} ></ div>
        array_triangle.push(myDiv)
    }
    return array_triangle
}


export default function ArrayState() {
    const [value, setValue] = useState([])
    const [inputNumber, setInputNumber] = useState();

    const handleSubmit = e => {
        e.preventDefault()
        setValue(createTriangle(inputNumber));
        console.log(value)

    }
    return (
        <>
            <form onSubmit={handleSubmit} action="">
                <input onChange={e => setInputNumber(e.target.value)} type="text" input={inputNumber} />
                <button type="submit">Ajouter</button>
            </form>

            {value &&

                value.map((div, bg, h, w) => (
                    <div style={{ backgroundColor: `${bg}` }} > </div>
                ))
            }
        </>
    )
}
