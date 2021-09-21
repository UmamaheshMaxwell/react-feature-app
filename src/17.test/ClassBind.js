import React, { Component } from 'react'

export class ClassBind extends Component {

    constructor(){
        super()
        this.state = {
            message: 'Hello Students, Welcome to React Website'
        }

       // this.getDetails = this.getDetails.bind(this)
    }

    callMe() {
        console.log(this)
        console.log('Button Clicked on Class Component')
    }
    // 3rd Approach

    // getDetails(){
    //     this.setState({ 
    //         message: 'Thank you for Visiting'
    //     })
    // }

    getDetails = () =>{
        this.setState({ 
            message: 'Thank you for Visiting'
        })
    }

    render() {
        return (
            <div className="container">
                {/* <button onClick={this.callMe.bind(this)} className="btn btn-primary">Call Me</button> */}
                <h4>{this.state.message}</h4>
                {/* <button onClick={() => this.getDetails()} className="btn btn-primary">Call Me</button> */}
                <button onClick={this.getDetails} className="btn btn-primary">Call Me</button>
            </div>
        )
    }
}

export default ClassBind
