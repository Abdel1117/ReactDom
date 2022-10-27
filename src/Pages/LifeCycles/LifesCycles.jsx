import React from 'react'
import Animal from '../../Compenents/LifesCycles/Animal'
import { useState } from 'react'
export default function LifesCycles() {

    const [animals, setAnimals] = useState([
        { name: "Chat", quantity: 5 },
        { name: "Chien", quantity: 3 },
        { name: "Oiseau", quantity: 2 },
        { name: "Crocodiles", quantity: 10 },
    ])

    const animalsDelete = (index) => {
        const newState = [...animals]
        newState.splice(index, 1)
        setAnimals(newState)
    }

    const animalsQuantityAdd = (index) => {
        const newState = [...animals]
        newState[index].quantity++
        setAnimals(newState)
    }
    const animalsAdd = () => {
        setAnimals([...animals, { name: 'Castor', quantity: 2 }])
    }

    return (
        <div>
            <h1>LifesCycles</h1>
            <button onClick={animalsAdd}>Ajouter un animal</button>
            {animals.map((animal, index) => (

                <Animal
                    key={index}
                    name={animal.name}
                    quantity={animal.quantity}
                    index={index}
                    animalsDelete={animalsDelete}
                    animalsQuantityAdd={animalsQuantityAdd}
                />

            ))}



        </div>
    )
}
