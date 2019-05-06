import React, { Component } from 'react';

class NewSecret extends Component {
    constructor(){
        super();
        this.state = {
            secret: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            secret: ""
        })
        this.props.addSecret(this.state);
    }
    render(){
        return <form onSubmit={this.handleSubmit}>
            <h5>Fill in this to add a secret</h5>
            Secret: <input onChange={this.handleChange} type="text" name="secret" value={this.state.secret}/>
            <input type="submit" />
        </form>
    }
}

export default NewSecret;