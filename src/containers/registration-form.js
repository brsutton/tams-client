import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { RegisterUser } from '../actions/index';
import BatchComponent from '../components/batchComponent';

class RegistrationForm extends Component{

    onSubmit(val){
        let user = {
            firstName: this.firstName.value,
            lastName: this.lastName.value,
            userName: this.userName.value,
            contact: this.contact.value,
            password: this.password.value,
            email: this.email.value,
            roleId: this.role.value,
            batchId: this.batch.value
        }

        this.props.RegisterUser(user);
    }

    render(){
        const { onSubmit } = this.props;
        return(
            <div>
                <h1>Registration Form</h1>
                <br/>
                <form onSubmit={(event)=>{
                    event.preventDefault();
                    this.onSubmit(event)}}>
                        <table>
                            <tbody>
                            <tr>
                                <td><input type="text" ref={(value) => { this.firstName = value; }} name="firstName" placeholder="First Name" /></td>
                            </tr>
                            <tr>
                                <td><input type="text" ref={(value) => { this.lastName = value; }} placeholder="Last Name" /></td>
                            </tr>
                            <tr>
                                <td><input type="text" ref={(value) => { this.userName = value; }} placeholder="User Name" /></td>
                            </tr>
                            <tr>
                                <td><input type="text" ref={(value) => { this.contact = value; }} minLength="10" maxLength="10" placeholder="Contact" /></td>
                            </tr>
                            <tr>
                                <td><input type="text" ref={(value) => { this.password = value; }} placeholder="Password" /></td>
                            </tr>
                            <tr>
                                <td><input type="email" ref={(value) => { this.email = value; }} placeholder="Email" /></td>
                            </tr>
                            <tr>
                                <td>
                                    <select ref={(value) => { this.role = value; }}>
                                        <option value="3">Role</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <select ref={(value) => { this.batch = value; }}>
                                        {this.props.batches.map(function(batch , index){
                                            return <BatchComponent batch={batch} index={index} />
                                        })}
                                    </select>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        userDetails:state.user,
        batches:state.batches
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators(
        {RegisterUser:RegisterUser},dispatch
        )
}

export default connect(mapStateToProps, matchDispatchToProps)(RegistrationForm);