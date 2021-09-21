import React, { Component, mapStateToProps } from 'react'
import { connect } from 'react-redux';

class Counter extends Component {
    constructor(props) {
        super(props)
    
        // this.state = {
        //      count: 0
        // }
    }

    increment = () => {
        // this.setState({
        //     count: this.state.count + 1
        // })
        this.props.dispatch({type: 'INCREMENT'})
        console.log(this.props)
    }

    decrement = () => {
        // this.setState({
        //     count: this.state.count - 1 
        // })
        this.props.dispatch({type: 'DECREMENT'})
    }

    // Add this function:
    mapStateToProps = (state) =>{
    return {
      count: state.count
    };
  }
    
    
    render() {
        return (
            <div className="container">
                <br />
                <button className="btn btn-warning"
                        onClick={()=>this.decrement()}
                > - </button>&nbsp;&nbsp;
                <span>{this.props.count}</span>&nbsp;&nbsp;
                <button className="btn btn-primary"
                        onClick={()=>this.increment()}
                >+</button>&nbsp;&nbsp;
                <br />
            </div>
        )
    }
}

export default connect(mapStateToProps)(Counter);
