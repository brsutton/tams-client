import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SelectedUser } from '../actions/index';
import $ from 'jquery';

class RegistrationForm extends Component{

    onSubmit(val){
        let user = {
            firstName: this.firstName.value,
            lastName: this.lastName.value,
            userName: this.userName.value,
            contact: this.contact.value,
            email: this.email.value,
            role: this.role.value,
            batch: this.batch.value
        }

        console.log(this.firstName.value,
            this.lastName.value  +" " +
            this.userName.value +" " +
            this.contact.value +" " +
             this.email.value +" " +
             this.role.value +" " +
            this.batch.value)
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
                                <td><input type="email" ref={(value) => { this.email = value; }} placeholder="Email" /></td>
                            </tr>
                            <tr>
                                <td>
                                    <select ref={(value) => { this.role = value; }}>
                                        <option value="role">Role</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <select ref={(value) => { this.batch = value; }}>
                                        <option value="batch">Batch</option>
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

export default RegistrationForm;