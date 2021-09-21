import React from 'react'

function Person({person}) {
    return (
        <div>
            <h2>

                <PersonOne name={person.name}></PersonOne>
            </h2>
        </div>
    )
}

export default Person
