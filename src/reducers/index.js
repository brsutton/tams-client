import {combineReducers} from 'redux';
import AssignmentReducer from './reducer-assignment';
import UserReducer from './dummy-reducer';
import BatchReducer from './reducer-batches';
//Combine the reducers you create here
const reducers=combineReducers({
    //assignments: AssignmentReducer
    //users: UserReducer,
    batches: BatchReducer
})

export default reducers;