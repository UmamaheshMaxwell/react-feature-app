import React from 'react'

const Student = (props) => {
    const {name, heroName} = props
    return (
        <div>
            <h1>{name} is {heroName}</h1>
        </div>
    )
}

export default Student