import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'
class LifeCycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }

        console.log('LifeCycleA Contsructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifeCycleA getDerivedStateFromProps ')
        return {}
    }

    componentDidMount(){
        console.log('LifeCycleA componentdidmount')
        
    }
    
    render() {
        console.log('LifeCycleA render Method')
        return (
            <div>
                <h1>LifeCycle A</h1>
                <LifeCycleB />
            </div>
        )
    }
}

export default LifeCycleA;