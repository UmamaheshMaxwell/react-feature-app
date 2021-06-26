import React from 'react'

function Child(props) {
    return (
        <div>
            <button onClick={() => props.callParent('child')}>Call Parent</button>
        </div>
    )
}

export default Child
