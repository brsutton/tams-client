import {combineReducers} from 'redux';
import AssignmentReducer from './reducer-assignment';
<<<<<<< HEAD
import UserReducer from './dummy-reducer';
import BatchReducer from './reducer-batches';
//Combine the reducers you create here
const reducers=combineReducers({
    //assignments: AssignmentReducer
    //users: UserReducer,
    batches: BatchReducer
=======

//Combine the reducers you create here
const reducers=combineReducers({
    //assignments: AssignmentReducer
    assignments: AssignmentReducer
>>>>>>> 688c7d560651ec9179d0b680a49cf3e7a984cee1
})

export default reducers;