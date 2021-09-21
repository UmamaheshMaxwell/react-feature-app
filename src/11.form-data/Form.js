import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comments: '',
             country: '',
             gender: '',
             isActive: false
        }
    }

    changeUserName = (event) => {
        this.setState({
            username: event.target.value
        }, () => {
            console.log(this.state.username)
        })
    }

    checkIfActive= (event) => {
        this.setState({
            isActive: !this.state.isActive
        })
    }

    getFormdata = (event) => {
        event.preventDefault()
        console.log(this.state.username)
        console.log(this.state.comments)
        console.log(this.state.country)
        console.log(this.state.gender)
        console.log(this.state.isActive)
    }

    render() {
        return (
            <div className="container">
                <h1>Form Component</h1>
                <form action="">
                    <div className="form-group">
                        <label htmlFor="">Username</label>
                        <input type="text" 
                               value={this.state.username} 
                               onChange={(data) => this.setState({username: data.target.value})} 
                               className="form-control w-50"
                        />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="">Comments</label>
                        <textarea value={this.state.comments} 
                                  onChange={(data) => this.setState({comments: data.target.value})} 
                                  className="form-control w-50"
                        >      
                        </textarea>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="">Country</label>
                        <select onChange={(data) => this.setState({country: data.target.value})}
                                value={this.state.country}
                                className="form-select w-50"
                        >
                            <option value="">Select </option>
                            <option value="1">India</option>
                            <option value="2">Japan</option>
                            <option value="3">Australia</option>
                        </select>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="">Gender :</label><br />
                        <input type="radio" 
                               value={1}  
                               name="gender" 
                               onChange={(data) =>{
                                   console.log(data.target)
                                    this.setState({gender: data.target.value})
                                }}
                               className="form-check-input"
                        />Male &nbsp;&nbsp;&nbsp;
                        <input type="radio" 
                               value={0}
                               name="gender"
                               onSelect={(data) =>this.setState({gender: data.target.value})}
                               className="form-check-input"
                        /> Female
                    </div>
                    <br />
                    <input type="checkbox" 
                           onChange ={this.checkIfActive}
                    />
                    
                    <br />
                    <div>
                        <button type="submit" onClick={this.getFormdata} className="btn btn-primary">Get Data</button>
                    </div>
                </form>
            </div>

        )
    }
}

export default Form
