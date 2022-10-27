import React from 'react'
import { useState } from 'react'
import Meals from '../../Compenents/Meals/Meals'
import Cart from '../../Compenents/Cart/Cart';

export default function Borne() {
    const [index, setIndex] = useState();
    const meals = [
        {
            url: "https://assets.lightspeedhq.fr/img/2019/08/90ca3847-8aac85b2-blog_foodpresentationtipsfromtopchefs.jpg",
            alt: "un plat",
            price: "3"
        },
        {
            url: "https://c8.alamy.com/compfr/r8rk8c/le-nord-de-la-france-plat-de-specialite-locale-la-biere-old-peculier-gallois-avec-le-jambon-l-oeuf-et-le-fromage-cheddar-fondu-servi-avec-de-la-biere-r8rk8c.jpg",
            alt: "Un plat",
            price: "6"
        },
        {
            url: "https://img.mesrecettesfaciles.fr/wp-content/uploads/2017/07/pdtfour-1000x500.jpg", alt: "un plat"
            ,
            price: "12"
        },

        {
            url: "https://cache.marieclaire.fr/data/photo/w1000_ci/5w/recettes-plats-en-sauce-hiver.jpg", alt: "un plat"
            ,
            price: "19"
        },

        {
            url: "https://img.freepik.com/photos-gratuite/spaghetti-italien-sauce-tomate-dans-casserole_1220-4240.jpg?w=2000", alt: "un plat"
            ,
            price: "9"
        }
    ]
    return (
        <div>

            <Cart index={index} />
            <Meals meals={meals} />
        </div>
    )
}
