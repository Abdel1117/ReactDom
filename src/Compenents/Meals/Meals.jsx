import React, { useEffect } from 'react'
import Meal from '../Meal/Meal'
import "./Meals.css"
export default function Meals({ meals }) {
    useEffect(() => {
        console.log(meals)
    }, [])
    return (
        <div className='wrapper_card'>

            {meals.map((meal, index) =>

                <Meal
                    key={index}
                    index={index}
                    meal={meal}
                />


            )}

        </div>
    )
}
