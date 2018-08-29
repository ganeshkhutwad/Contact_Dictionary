/**
Test `AddButton` Presentational Component.
@author Ganesh Khutwad
 */
import React from 'react';
import { Header } from '../../components/Header';

const classes = { };

describe('`Header` Tests', () => {
    it('`Header` Snapshot', () => {
        const headerWrapper = shallow(<Header classes={classes} />);
        expect(headerWrapper).toMatchSnapshot();
    });
});
