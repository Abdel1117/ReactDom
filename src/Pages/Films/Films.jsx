import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import Film from '../../Compenents/Film';

export default function Films() {
    const [filmName, setFilmName] = useState();
    const [year, setYear] = useState();
    const [form, setForm] = useState([]);
    const [count, setCount] = useState(0);

    const handleForm = e => {
        e.preventDefault();
        let film = {
            "Name": filmName,
            "Year": year
        }
        setForm([...form, film])

    }
    const deleteFilm = (index) => {
        const newState = [...form]
        newState.splice(index, 1);
        setForm(newState);

    }



    return (

        <>
            <div>Films</div>
            {count &&
                <div> {count}</div>
            }
            <form onSubmit={handleForm} action="">
                <input onChange={(e) => setFilmName(e.target.value)} type="text" placeholder='Nom du Film' />
                <input onChange={(e) => setYear(e.target.value)} type="text" placeholder='Année de Sortie' />
                <button type="submit">Ajouter</button>
            </form>



            <br />

            {form &&
                form.map((film, index) => (
                    <Film
                        key={index}
                        name={film.Name}
                        year={film.Year}
                        index={index}
                        deleteFilm={deleteFilm}
                        changeColor={changeColor}
                    />
                ))
            }

        </>




    )
}
