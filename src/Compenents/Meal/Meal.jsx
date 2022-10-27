import React from 'react'
import { useEffect } from 'react'
export default function Meal({ meal, index }) {

    useEffect(() => {
        console.log(meal)
        console.log(index)
    }, [meal])

    return (
        <div>
            <img src={meal.url} alt={meal.alt} />
            <button>+</button>
        </div>
    )
}
