import React, { Component } from 'react'

export class Api extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             id: '',
             name: '',
             email: '',
             city: ''
        }
    }

    componentDidMount(){

    }

    getStudents(){
        fetch()
    }
    
    render() {
        return (
            <div>
                <h2>Student list</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Api
