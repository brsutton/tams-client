/*
This is the parent component and all other components are caled here
*/

import React from 'react';
import AddAssignment from './addAssignment'
import UserList from '../containers/dummy-user-list';

const App = ()=>(
            <div>
                <h1>TAMS Client</h1>
                <hr/>
                {/*Call your components here*/}
                <UserList/>

                <hr/>
            </div>
        );

export default App;