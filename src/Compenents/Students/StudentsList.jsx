import React from 'react'
import Student from '../../Pages/Students/Students'
import { useContext } from 'react'
import { StudentsContext } from '../../utils/context/studentContext'

export default function StudentsList({ students }) {

    return (
        <div>
            {
                students.map((student, i) => (
                    <Student key={i} index={i} student={student} />
                ))
            }

        </div>
    )
}
