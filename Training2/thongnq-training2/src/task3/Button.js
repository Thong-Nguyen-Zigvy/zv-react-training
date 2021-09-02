import React from 'react';

const Button = ({action, children}) => {
    return (
        <button onClick={action} className="bg-green-500 hover:shadow-md hover:bg-green-700 text-white font-bold py-2 px-4 rounded">{children}</button>
    )
}

export default Button;
