import React from 'react';

const CloseButton = ({closeModal}) => {
    return (
        <button onClick={closeModal} className="bg-gray-700 hover:shadow-md hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">Close modal</button>
    )
}

export default CloseButton;
