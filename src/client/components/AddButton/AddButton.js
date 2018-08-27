import React from 'react';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const addBtn = {
  position: 'fixed',
  bottom: '10px',
  right: '14px'
};

const AddButton = ({openForm}) => {
    return (
        <Button variant="fab" color="primary" style={addBtn} aria-label="Add" onClick={openForm}>
          <AddIcon />
        </Button>
    );
}

export default AddButton;