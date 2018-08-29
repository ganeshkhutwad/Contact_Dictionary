/**
Test `AddButton` Presentational Component.
@author Ganesh Khutwad
 */
import React from 'react';
import { ConfirmationBox } from '../../components/ConfirmationBox';

const value = 10;
const deleteRecord = () => { }

describe('`ConfirmationBox` Tests', () => {
    it('`ConfirmationBox` Snapshot', () => {
        const confirmationBoxWrapper = shallow(<ConfirmationBox value={value} deleteRecord={deleteRecord} />);
        expect(confirmationBoxWrapper).toMatchSnapshot();
    });
});
