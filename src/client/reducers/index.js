import { combineReducers } from 'redux';
import contactLists from './contactListReducer';

const rootReducer = combineReducers({
    contactLists
});

export default rootReducer;