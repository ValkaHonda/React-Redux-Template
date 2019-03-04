import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component{
    render() {
        if (!this.props.users) {
            
            return (<div>Select a user...</div>);
        }
        
        return (
            <div>
                <img src={this.props.users.thumbnail} />
                <h2>{this.props.users.first} {this.props.users.last}</h2>
                <h3>Age: {this.props.users.age}</h3>
                <h3>Description: {this.props.users.description}</h3>
            </div>
        );
    }
}

function mapStateToProp(state){
    return {
        users: state.activeUser
    };
}

export default connect(mapStateToProp)(UserDetail);