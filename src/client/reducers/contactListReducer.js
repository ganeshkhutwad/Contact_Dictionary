import { actionTypes } from 'actions';

const { ADD_CONTACT_SUCCESS, LOAD_CONTACTLISTS_SUCCESS } = actionTypes;

export default function courseReducer(state = [], action) {
    switch(action.type) {
        case ADD_CONTACT_SUCCESS: {
            return [
                ...state,
                {
                    ...action.contact
                }
            ]
        }

        case LOAD_CONTACTLISTS_SUCCESS: {
            console.log('action list ==>', action.contactLists);
            return [
                ...action.contactLists
            ];
        }

        default: {
            return state;
        }
            
    }
}