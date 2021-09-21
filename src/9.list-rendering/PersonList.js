import React from 'react'
import Person from './Person'

function PersonList() {
    const persons = [
        {id:1, name:'Scott', age:45, skill:'Scrum Master'},
        {id:2, name:'Adam', age:43, skill:'Business Analyst'},
        {id:3, name:'Tuan', age:41, skill:'Tech Boss'},
    ]

    const personList = persons.map(person => <Person key={person.id} person={person} />)
    return (
        <div>
            {personList}
        </div>
    )
}
export default PersonList
