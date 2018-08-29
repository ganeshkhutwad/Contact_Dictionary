/**
Test `AddButton` Presentational Component.
@author Ganesh Khutwad
 */
import React from 'react';
import { DynaForm } from '../../components/DynaForm';

const classes = { };

describe('`DynaForm` Tests', () => {
    it('`DynaForm` Snapshot', () => {
        const dynaFormWrapper = shallow(<DynaForm classes={classes} />);
        expect(dynaFormWrapper).toMatchSnapshot();
    });
});
