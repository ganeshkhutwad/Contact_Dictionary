import React from 'react';

const ConfirmationBox = ({ value }) => {
    return (
        <div>
            <div> Do you want to delete contact with id = {value}</div>
            <button>Ok</button>
        </div>
    )
}

export default ConfirmationBox;