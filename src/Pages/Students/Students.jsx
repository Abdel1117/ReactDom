import React, { useState } from 'react'
import StudentList from "../../Compenents/Students/StudentsList"
import { StudentsContext } from '../../utils/context/studentContext'

export default function Students() {
    const [students, setStudents] = useState([
        {
            lastname: "Mavracic",
            firstname: "Jonathan",
            age: 32,
        },
        {
            lastname: "Mavracic",
            firstname: "Eliott",
            age: 5,
        },
        {
            lastname: "Mavracic",
            firstname: "Joseph",
            age: 7,
        },
    ])
    return (
        <StudentsContext.Provider value={{ setStudents, students }}>

            <div>
                <h1>Student</h1>
                <StudentList students={students} />

            </div>
        </StudentsContext.Provider>
    )
}
