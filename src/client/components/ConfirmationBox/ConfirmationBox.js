import React from 'react';

const ConfirmationBox = ({ value, deleteRecord }) => {
    return (
        <div>
            <div> Do you want to delete contact with id = {value}</div>
            <button onClick={deleteRecord}>Ok</button>
        </div>
    )
}

export default ConfirmationBox;