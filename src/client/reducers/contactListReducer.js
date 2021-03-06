/**
@author Ganesh Khutwad
Reducer to update application state based on action type.
 */
import { actionTypes } from 'actions';

const {
    ADD_CONTACT_SUCCESS,
    LOAD_CONTACTLISTS_SUCCESS,
    UPDATE_CONTACT_SUCCESS,
    DELETE_CONTACT_SUCCESS
} = actionTypes;

export default function courseReducer(state = [], action) {
    switch(action.type) {
        case ADD_CONTACT_SUCCESS: {
            return [
                ...state,
                {
                    ...action.contact
                }
            ];
        }

        case LOAD_CONTACTLISTS_SUCCESS: {
            return [
                ...action.contactLists
            ];
        }

        case UPDATE_CONTACT_SUCCESS: {
            return [
                ...action.contact
            ];
        }

        case DELETE_CONTACT_SUCCESS: {
            return [
                ...action.contact
            ];
        }

        default: {
            return state;
        }
            
    }
}
