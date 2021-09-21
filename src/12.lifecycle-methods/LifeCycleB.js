import React, { Component } from 'react'

class LifeCycleB extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }

        console.log('LifeCycleB Contsructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifeCycleB getDerivedStateFromProps ')
        return {}
    }

    componentDidMount(){
        console.log('LifeCycleB componentdidmount')
        
    }
    
    render() {
        console.log('LifeCycleB render Method')
        return (
            <div>
                <h1>LifeCycle B</h1>
            </div>
        )
    }
}

export default LifeCycleB;