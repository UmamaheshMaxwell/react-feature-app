import React, { Component } from 'react'

export class Counter extends Component {
    constructor() {
        super()
    
        this.state = {
             count: 0
        }
    }

    addCount(){
       // this.state.count = this.state.count + 1;
    //    this.setState({
    //        count: this.state.count + 1
    //    }, () => {console.log('callback value : ' , this.state.count)})
    //    console.log(this.state.count)
    this.setState((prevState) => ({
        count: prevState.count + 1
    }),() => {console.log('callback value : ' , this.state.count)})
    }

    incrementFive(){
        this.addCount()
        this.addCount()
        this.addCount()
        this.addCount()
        this.addCount()
    }
    
    render() {
        return (
            <div>
                <h1>Counter : {this.state.count}</h1>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
