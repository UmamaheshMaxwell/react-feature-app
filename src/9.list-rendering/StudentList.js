import React from 'react'

function StudentList() {
    const names = ["Uma", 'Swathi', 'Jagrav', 'Jagrav']
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
    return <div>{nameList}</div>
}

export default StudentList
