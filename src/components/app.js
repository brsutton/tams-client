/*
This is the parent component and all other components are caled here
*/

import React from 'react';
import AddAssignment from './addAssignment'
import AssignmentList from '../containers/assignments-list';
import UserList from '../containers/dummy-user-list';
import RegistrationForm from '../containers/registration-form';

const App = ()=>(
            <div>
                <h1>TAMS Client</h1>
                <hr/>
                {/*Call your components here*/}
                <AssignmentList/>
                <UserList/>
                <hr/>
            </div>
        );

export default App;