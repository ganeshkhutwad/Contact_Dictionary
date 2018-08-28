/**
    @author Ganesh Khutwad
    This file contains action creators related to contact list feature.
 */
import axios from 'axios';
import actionTypes from './actionTypes';

// Action Types.
const { ADD_CONTACT_SUCCESS, LOAD_CONTACTLISTS_SUCCESS } = actionTypes;

// Returns object when successful response received on get list request. 
const loadContactListsSuccess = (contactLists) => {
    return {
        contactLists,
        type: LOAD_CONTACTLISTS_SUCCESS
    };
};

// Returns object when successful response recieved after adding new record.
const addContactSuccess = (contact) => {
    return {
        contact,
        type: ADD_CONTACT_SUCCESS
    }
}

// Wrapped all Action Creators to easily accessible outside module.
const contactListActions = {
    // Action creator to add new list.
    addContact: (contact) => {
        return (dispatch) => {
            return axios.post('/contactLists', contact)
                .then((res) => {
                    console.log('response ==>', res);
                    dispatch(addContactSuccess(contact));
                })
                .catch((error) => {
                    throw error;
                });
        }
    },

    // Action creator to load contact list.
    loadContactLists: () => {
        return (dispatch) => {
            return axios.get('/contactLists')
                .then((res) => {
                    console.log('response ==>', res);
                    dispatch(loadContactListsSuccess(res.data));
                })
                .catch((error) => {
                    throw(error);
                });
        }
    }
};

export default contactListActions;
