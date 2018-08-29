/**
Test `AddButton` Presentational Component.
@author Ganesh Khutwad
 */
import React from 'react';
import { AddButton } from '../../components/AddButton';

const openForm = () => { }

describe('`AddButton` Tests', () => {
    it('`AddButton` Snapshot', () => {
        const addButtonWrapper = shallow(<AddButton openForm={openForm} />);
        expect(addButtonWrapper).toMatchSnapshot();
    });
});
