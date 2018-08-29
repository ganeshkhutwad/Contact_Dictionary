/**
Test `AddButton` Presentational Component.
@author Ganesh Khutwad
 */
import React from 'react';
import { ContactDetails } from '../../components/ContactDetails';

const classes = { };
const list = { };

describe('`ContactDetails` Tests', () => {
    it('`ContactDetails` Snapshot', () => {
        const contactDetailsWrapper = shallow(<ContactDetails classes={classes} list={list} />);
        expect(contactDetailsWrapper).toMatchSnapshot();
    });
});
