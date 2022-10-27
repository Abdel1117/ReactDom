import React, { useEffect } from 'react'
import Meal from '../Meal/Meal'

export default function Meals({ meals }) {
    useEffect(() => {
        console.log(meals)
    }, [])
    return (
        <div>

            {meals.map((meal, index) => {

                < Meal
                    key={index}
                    index={index}
                    meal={meal}
                    alt={meal}
                />

            })}

        </div>
    )
}
