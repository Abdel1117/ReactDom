import React, { useState } from 'react'
import Task from "../../Compenents/Task"

export default function Home() {

    const [task, setTask] = useState([]);
    const [inputTask, setInputTask] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        console.log("Formulaire Enovyé ")
        setTask([...task, inputTask])

    }
    return (
        <>
            <h1>Etats</h1>

            <form action="" onSubmit={handleSubmit}>
                <input type="text" onChange={e => setInputTask(e.target.value)} value={inputTask} />
                <button type='submit'>Ajouter une tâche</button>
            </form>

            {task.map((name) => (
                <Task task={task.name} />
            ))}


        </>
    )
}
