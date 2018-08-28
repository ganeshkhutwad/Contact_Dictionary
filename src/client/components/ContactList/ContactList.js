/**
@author Ganesh Khutwad
 */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { ContactDetails } from 'components';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: 25
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

const getContactDetailLayout = (classes, list, editContact, deleteContact) => {
    return (
        <Grid key={list.id} item xs={12} sm={6}>
            <ContactDetails editContact={editContact} deleteContact={deleteContact} list={list} className={classes.paper} />
        </Grid>
    );
}

const ContactList = ({classes, lists, editContact, deleteContact}) => {
    return (
        <div className={classes.root}>
            <Grid container spacing={24}>
                {
                    lists.map(list => getContactDetailLayout(classes, list, editContact, deleteContact))
                }
            </Grid>
        </div>
    );
}

ContactList.propType = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContactList);