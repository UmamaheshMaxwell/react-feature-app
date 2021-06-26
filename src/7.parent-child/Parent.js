import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            parentName: 'Parent'
        }
    
        this.callParent = this.callParent.bind(this)
    }

    callParent(childName){
        alert(`Calling ${this.state.parentName} from ${childName}`)
    }
    
    render() {
        return (
            <div>
                <Child callParent={this.callParent} />
            </div>
        )
    }
}

export default Parent
