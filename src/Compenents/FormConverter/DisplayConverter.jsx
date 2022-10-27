import React, { useState } from 'react'
import { useEffect } from 'react'
import { randomNumber } from '../../utility/Random'


export default function DisplayConverter({ value, setValue }) {
    const [fontSize, setFontSize] = useState()

    useEffect(() => {
        setFontSize(randomNumber(14, 25))
    }, [value])

    return (
        <div style={{ fontSize: fontSize + "px" }}>
            {value &&

                <div >
                    {value} € = {value * 0.00005} BTC <br />
                </div>
            }
            <button onClick={() => setValue(null)}>Reset</button>

        </div>
    )
}
