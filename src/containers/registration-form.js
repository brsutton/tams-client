import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SelectedUser } from '../actions/index';
import $ from 'jquery';


class RegistrationForm extends Component(){
    render(){
        return(
            <div>
                <form>
                    <input type="text" name="firstName"/>
                    <input type="submit" value="register"/>
                </form>
            </div>
        );
    }
}

export default RegistrationForm;