import React from 'react'

function NameList() {
    const names =["Scott", "Adam", "Tuan"]
    const nameList = names.map(name=><h2>{name}</h2>)
    return <div>{nameList}</div>   
}

export default NameList
