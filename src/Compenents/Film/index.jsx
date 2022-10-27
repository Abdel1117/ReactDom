import React, { useEffect, useState } from 'react'
import { changeColor } from "../../utility/Random"
export default function Film({ index, name, year, deleteFilm, changeColor }) {
    const [toogle, setToogle] = useState(false);
    const [bgColor, setBgColor] = useState(changeColor)

    return (
        <div style={{
            backgroundColor: bgColor
        }}>
            <h2 key={index}>{name}</h2>
            <h2 key={index}>{year}</h2>
            <button key={index} onClick={() => setToogle(!toogle)}>Edit</button>


            {
                toogle &&
                <div >
                    <button onClick={() => deleteFilm(index)}>X</button>
                    <button onClick={handleClick}>Changer la Couleur</button>
                </div>
            }
        </div >
    )
}
