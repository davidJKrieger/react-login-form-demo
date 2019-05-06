import React, { Component } from 'react';

class SecretsIndex extends Component {
    constructor(){
        super();
    }
    render(){
        return <div>
            <h1>Welcome to your secrets, {this.props.username}</h1>
        </div>
    }
}

export default SecretsIndex