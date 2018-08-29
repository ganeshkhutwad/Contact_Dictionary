/**
Test `AddButton` Presentational Component.
@author Ganesh Khutwad
 */
import React from 'react';
import { ContactList } from '../../components/ContactList';

const classes = { };
const lists = [ ];
const editContact = () => { }
const deleteContact = () => { }

describe('`ContactList` Tests', () => {
    it('`ContactList` Snapshot', () => {
        const contactListWrapper = shallow(<ContactList
                                                classes={classes}
                                                lists={lists}
                                                editContact={editContact}
                                                deleteContact={deleteContact}
                                            />);
        expect(contactListWrapper).toMatchSnapshot();
    });
});
