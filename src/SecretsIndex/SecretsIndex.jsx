import React, { Component } from 'react';
import NewSecret from './NewSecret/NewSecret';

class SecretsIndex extends Component {
    constructor(){
        super();
        this.state = {
            secrets: ["test react", "hardcode stuff"]
        }
    }
    addSecret = (formData) => {
        console.log(formData);
        this.setState({
            secrets: [...this.state.secrets, formData.secret]
        })
    }
    render(){
        const secretsList = this.state.secrets.map((secret, index)=>{
            return <p key={index}>{secret}</p>
        })
        return <div>
            <h1>Welcome to your secrets, {this.props.username}</h1>
            <NewSecret addSecret={this.addSecret}></NewSecret>
            <h4>Here are the secrets</h4>
            {secretsList}
        </div>
    }
}

export default SecretsIndex