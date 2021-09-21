import React, { Component } from 'react'
import axios from 'axios'

class Fetch extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             todos: []
        }
    }

    // componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/todos')
    //     .then(res => res.json())
    //     .then(data => this.setState({todos: data}))
    // }

    componentDidMount(){
        axios('https://jsonplaceholder.typicode.com/todos')
        .then(res => this.setState({todos: res.data}))
    }
    
    render() {
        return (
            <div className="container">
                <div className="col-xs-12">
                    <h1>My Todos</h1>
                    {this.state.todos.map((todo) => (
                            <ul key={todo.id}>
                                <li> {todo.title}</li>
                            </ul>
                        )
                    )}
                </div>
            </div>
        )
    }
}

export default Fetch;