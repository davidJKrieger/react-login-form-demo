import React, { Component } from 'react';

class LoginForm extends Component {
    constructor(){
        super()
        this.state = {
            username: "",
            password: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render(){
        return <div>
            <form>
                username: <input onChange = {this.handleChange} type="text" name="username"/>
                password: <input onChange = {this.handleChange} type="password" name="password"/>
                <input type="submit"/>
            </form>
        </div>
    }
}

export default LoginForm;