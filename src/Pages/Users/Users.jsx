import React, { useState } from 'react'

export default function Users() {
    const [UserName, setUserName] = useState();
    const [UserAge, setAge] = useState();

    const [Form, handleForm] = useState([]);


    const handlingForm = e => {
        e.preventDefault();
        console.log("Form Envoyer");
        let user = {
            "Prenom": UserName,
            "Age": UserAge
        }
        handleForm([...Form, user])
    }

    const handleClick = (index) => {
        const newState = [...Form]
        newState.splice(index, 1)
        handleForm(newState)
    }



    return (
        <>
            <form onSubmit={handlingForm} action="">
                <input onChange={e => setUserName(e.target.value)} type="text" placeholder="Votre Prenom" />
                <input onChange={e => setAge(e.target.value)} type="text" placeholder='Age' />
                <button type="submit">Envoyer</button>
            </form>


            {Form.map((name, index) => (
                <div>
                    <p key={index}>{name.Prenom}  {name.Age}</p>

                    <button onClick={() => { handleClick(index) }}>x</button>
                </div>
            ))}

        </>
    )
}
