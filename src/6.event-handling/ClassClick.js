import React, { Component } from 'react'

class ClassClick extends Component {

    clickHandler() {
        console.log('Button Clicked on Class Component')
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Submit</button>
            </div>
        )
    }
}

export default ClassClick