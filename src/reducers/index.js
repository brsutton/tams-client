import {combineReducers} from 'redux';
import AssignmentReducer from './reducer-assignment';
import UserReducer from './dummy-reducer';

//Combine the reducers you create here
const reducers=combineReducers({
    //assignments: AssignmentReducer
    users: UserReducer
})

export default reducers;