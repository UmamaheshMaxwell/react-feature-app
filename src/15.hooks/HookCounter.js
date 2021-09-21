import React, {useState} from 'react'

function HookCounter() {
    const [count, setState] = useState(0)
    return (
        <div className="container">
            <h1>Count: {count}</h1>
            <button onClick={() => setState(count+1)}>Increment</button>
        </div>
    )
}

export default HookCounter
