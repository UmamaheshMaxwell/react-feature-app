import React from 'react'

const header = {
    fontSize: '72px',
    color: 'blue'
}

function Inline() {
    return (
        <div>
            <h1 style={header}>Inline</h1>  
            <h1 className='error'>Error</h1>
            {/* <h1 className={styles.success}>Success</h1> */}
        </div>
    )
}

export default Inline
