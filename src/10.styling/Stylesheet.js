import React from 'react'
import './Styling.css'

function Stylesheet(props) {
    const className = props.primary? 'primary': ''
    return (
        <div>
            <h1 className={`${className} enlarge-font`}>Stylesheets</h1>
        </div>
    )
}

export default Stylesheet
