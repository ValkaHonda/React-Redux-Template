import {combineReducers} from "redux";
import UserReducer from './reducer-users';
import ActiveUserReducer from './reducer-active-user';

const allReducers = combineReducers({
    users: UserReducer, // everywhere in the app we will call users to get userReducer!
    activeUser: ActiveUserReducer
});

export default allReducers;