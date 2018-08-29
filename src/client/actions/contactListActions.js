/**
    @author Ganesh Khutwad
    This file contains action creators related to contact list feature.
 */
import axios from 'axios';
import actionTypes from './actionTypes';

// Action Types.
const {
    ADD_CONTACT_SUCCESS,
    LOAD_CONTACTLISTS_SUCCESS,
    UPDATE_CONTACT_SUCCESS,
    DELETE_CONTACT_SUCCESS
} = actionTypes;

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

// Returns object when successful response recieved after updating the record.
const updateContactSuccess = (contact) => {
    return {
        contact,
        type: UPDATE_CONTACT_SUCCESS
    }
}

// Returns object when successful response recieved after deleting the record.
const deleteContactSuccess = (contact) => {
    return {
        contact,
        type: DELETE_CONTACT_SUCCESS
    }
}

// Wrapped all Action Creators to easily accessible outside module.
const contactListActions = {
    // Action creator to load contact list.
    loadContactLists: () => {
        return (dispatch) => {
            return axios.get('/contactLists')
                .then((res) => {
                    dispatch(loadContactListsSuccess(res.data));
                })
                .catch((error) => {
                    throw(error);
                });
        }
    },

    // Action creator to add new list.
    addContact: (contact) => {
        return (dispatch) => {
            return axios.post('/contactLists', contact)
                .then((res) => {
                    dispatch(addContactSuccess(contact));
                })
                .catch((error) => {
                    throw error;
                });
        }
    },

    // Action creator to add new list.
    updateContact: (contact) => {
        return (dispatch) => {
            return axios.put('/contactLists', contact)
                .then((res) => {
                    dispatch(updateContactSuccess(res.data));
                })
                .catch((error) => {
                    throw error;
                });
        }
    },

    // Action creator to add new list.
    deleteContact: (id) => {
        return (dispatch) => {
            return axios.delete(`/contactLists/${id}`)
                .then((res) => {
                    dispatch(deleteContactSuccess(res.data));
                })
                .catch((error) => {
                    throw error;
                });
        }
    }
};

export default contactListActions;
