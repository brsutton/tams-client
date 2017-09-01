/*
This is the parent component and all other components are caled here
*/

import React from 'react';
import AddAssignment from './addAssignment'
import AssignmentList from '../containers/assignments-list';

const App = ()=>(
            <div>
                <h1>TAMS Client</h1>
                <hr/>
                {/*Call your components here*/}
                <AssignmentList/>
                <hr/>
            </div>
        );

export default App;