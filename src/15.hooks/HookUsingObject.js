import React, {useState} from 'react'

function HookUsingObject() {
    const [name, setName] = useState({firstName: '', lastName: ''})
    console.log({...name})
    return (
        <div className="container">
            <form action="">
                <label htmlFor="">Firstname:</label>
                <input type="text" 
                       value={name.firstName || ''} 
                       className="form-control w-50" 
                       onChange={(data) => setName( {...name, firstName: data.target.value})} /> <br />
                <label htmlFor="">LastName:</label>
                <input type="text" 
                       value={name.lastName || ''}   
                       onChange={(data) => setName( {...name, lastName: data.target.value})}
                       className="form-control w-50" />
                <h2>Your firstName is : {name.firstName}</h2>
                <h2>Your lastName is : {name.lastName}</h2>
            </form>
        </div>
    )
}

export default HookUsingObject
