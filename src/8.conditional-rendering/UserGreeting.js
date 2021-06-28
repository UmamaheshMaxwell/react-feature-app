import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : false 
        }
    }
    
    render() {
        /*
            ? 3rd Approach 
        */
        return  this.state.isLoggedIn ? 
                <div>Welcome Uma</div>:
                <div>Welcome Guest</div>
        // 2nd - approach
        
        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Uma</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }
        // return(
        //     <div>{message}</div>
        // )
        // 1st - if else approach 

        // if(this.state.isLoggedIn){
        //     return (
        //         <div>
        //             <div>Welcome Uma</div>
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             <div>Welcome Guest</div>
        //         </div>
        //     )
        // }
    }
}

export default UserGreeting
