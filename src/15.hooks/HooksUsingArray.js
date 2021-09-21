import React, {useState} from 'react'

function HooksUsingArray() {
    const [items, setItems] = useState([])

    const addNumber = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() *10) + 1
        }])
    }
    return (
        <div className="container">
           <button onClick={addNumber} className="btn btn-primary">Add Number</button>
           <ul>
               {items.map(item => (
                   <li key={item.id}>{item.value}</li>
               ))}
           </ul> 
        </div>
    )
}

export default HooksUsingArray
