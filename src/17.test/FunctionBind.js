import React from 'react'

function FunctionBind() {
    const callMe = () =>{
        console.log('Button Clicked')
    }
    return (
        <div className="container">
            <h2>Event Binding</h2>
            <button onClick={callMe} className="btn btn-primary">Call Me</button>
        </div>
    )
}

export default FunctionBind
