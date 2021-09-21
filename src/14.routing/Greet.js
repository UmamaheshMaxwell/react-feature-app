import React from 'react'
import {useParams} from 'react-router-dom'

function Greet() {
    const params = useParams();

    return (
        <div>
            <h1>Greetings !!! {params.name}</h1>
        </div>
    )
}

export default Greet;
