/**
Test `AddButton` Presentational Component.
@author Ganesh Khutwad
 */
import React from 'react';
import { SimpleModal } from '../../components/SimpleModal';

const classes = { };
const open = true;
const closeModal = () => { };

describe('`SimpleModal` Tests', () => {
    it('`SimpleModal` Snapshot', () => {
        const simpleModalWrapper = shallow(<SimpleModal
                                                classes={classes}
                                                open={open}
                                                closeModal={closeModal} />);
        expect(simpleModalWrapper).toMatchSnapshot();
    });
});
