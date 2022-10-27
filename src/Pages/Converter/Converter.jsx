import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import DisplayConverter from '../../Compenents/FormConverter/DisplayConverter'
import FormConverter from '../../Compenents/FormConverter/FormConverter'

// Une paire d'accolade = js DEUX PAIRE d'accolade = OBJET 
export default function Converter() {
    const [value, setValue] = useState()
    return (
        <div>

            <FormConverter setValue={setValue} />
            <DisplayConverter value={value} setValue={setValue} />
        </div>
    )
}
