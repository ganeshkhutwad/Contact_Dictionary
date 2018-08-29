/**
@author Ganesh Khutwad
Create root reducer by combining all reducers.
 */
import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import contactLists from './contactListReducer';

const rootReducer = combineReducers({
    contactLists,
    form: reduxFormReducer
});

export default rootReducer;