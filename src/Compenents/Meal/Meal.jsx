import React from 'react'
import { useEffect } from 'react'
import "./Meal.css"

export default function Meal({ meal, index }) {

    useEffect(() => {
        console.log(meal)
        console.log(index)
    }, [meal])

    return (
        <div id="card_label">
            <img src={meal.url} />
            <h2>{meal.alt}</h2>
            <h2>{meal.price} €</h2>
            <button>+</button>
        </div>
    )
}
