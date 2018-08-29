import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = () => ({
    okBtn: {
        marginLeft: 170,
        marginTop: 30
    }
});

const ConfirmationBox = ({ value, deleteRecord, classes }) => {
    return (
        <div>
            <div>Do you want to delete contact {value} ?</div>
            <Button onClick={deleteRecord} className={classes.okBtn} variant="contained" color="primary">
                OK
            </Button>
        </div>
    )
}

// Check prop types
ConfirmationBox.propType = {
    value: PropTypes.string.isRequired,
    deleteRecord: PropTypes.func.isRequired
};

export default withStyles(styles)(ConfirmationBox);