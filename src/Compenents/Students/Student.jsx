import React from 'react'
import { StudentsContext } from '../../utils/context/studentContext'

export default function Student({ student, index }) {

    const { setStudents, students } = useContext(StudentsContext)

    const handleClick = () => {

        const newArray = [...students]
        newArray.splice(index, 1);
        setStudents(newArray)
    }

    return (
        <div>
            {student.lastname}
            {student.firstname}
            <button onClick={handleClick}>X</button>
        </div>
    )
}
