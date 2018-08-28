/**
@author Ganesh Khutwad
 */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

const SimpleModal = ({classes, open, closeModal, children}) => {
    return (
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={closeModal}
        >
          <div style={getModalStyle()} className={classes.paper}>
            {children}
          </div>
        </Modal>
    )
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleModal)