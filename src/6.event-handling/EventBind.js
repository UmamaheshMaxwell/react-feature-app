import React, { Component } from 'react'

 class EventBind extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              message: 'Hello'
         }

         // 3rd Approach 

         this.clickHandler = this.clickHandler.bind(this)
     }
     

    // clickHandler(){
    //     console.log(this)
    //     this.setState({
    //         message : 'Thank you'
    //     })
    //     console.log('Hello consoole')
    // }

    // 4th approach 

    clickHandler = () => {
        this.setState({
            message: 'Thank you'
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* 1st Approach */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click Me !!!</button>*/}

                {/* 2nd Approach */}
                {/* <button onClick={() => this.clickHandler()}>Click Me !!!</button>  */}
                <button onClick={this.clickHandler}>Click Me !!!</button>
            </div>
        )
    }
}

export default EventBind
