import React from 'react'
import { useState } from 'react'
import Meals from '../../Compenents/Meals/Meals'
import Cart from '../../Compenents/Cart/Cart';

export default function Borne() {
    const [index, setIndex] = useState();
    const meals = [
        {
            url: "https://assets.lightspeedhq.fr/img/2019/08/90ca3847-8aac85b2-blog_foodpresentationtipsfromtopchefs.jpg",
            alt: "un plat"
        },
        {
            url: "https://assets.lightspeedhq.fr/img/2019/08/90ca3847-8aac85b2-blog_foodpresentationtipsfromtopchefs.jpg",
            alt: "Un plat"
        },
        { url: "https://assets.lightspeedhq.fr/img/2019/08/90ca3847-8aac85b2-blog_foodpresentationtipsfromtopchefs.jpg", alt: "un plat" },
        { url: "https://www.obernairestaurantleresto.fr/ressources/images/66906d154b4b.jpg", alt: "un plat" },
        { url: "https://img.freepik.com/photos-gratuite/spaghetti-italien-sauce-tomate-dans-casserole_1220-4240.jpg?w=2000", alt: "un plat" }
    ]
    return (
        <div>

            <Cart index={index} />
            <Meals meals={meals} />
        </div>
    )
}
