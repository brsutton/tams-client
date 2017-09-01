import {combineReducers} from 'redux';
import AssignmentReducer from './reducer-assignment';

//Combine the reducers you create here
const reducers=combineReducers({
    assignments: AssignmentReducer
})

export default reducers;