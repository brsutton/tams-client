/*
This is the parent component and all other components are caled here
*/

import React from 'react';
import AddAssignment from './addAssignment'
import AssignmentList from '../containers/assignments-list';
import UserList from '../containers/dummy-user-list';
import RegistrationForm from '../containers/registration-form';
import DeleteAssignment from '../components/delete_assignment';

const App = ()=>(
            <div>
                <h1>TAMS Client</h1>
                <hr/>
                {/*Call your components here*/}
<<<<<<< HEAD
                {/*<UserList/>*/}
                <RegistrationForm/>
=======
                <DeleteAssignment/>
                <AssignmentList/>
                {/*<UserList/>*/}
>>>>>>> 688c7d560651ec9179d0b680a49cf3e7a984cee1
                <hr/>
            </div>
        );

export default App;