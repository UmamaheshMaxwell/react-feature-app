import React, { Component } from 'react'

class Person extends Component {
    constructor(){
        super()
        this.state = {
            city: 'Bangalore',
            isActive: true
        }
    }
    render() {
        const {name, heroName} = this.props;
        const {city, isActive} = this.state;

        return (
            <div>
                <h1>{name} is {heroName}</h1>
                <h1>She is from {city} : {isActive ? "True": "False"} </h1>
            </div>
        )
    }
}

export default Person;
