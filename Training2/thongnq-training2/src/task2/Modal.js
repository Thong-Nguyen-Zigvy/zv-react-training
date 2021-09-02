import React from 'react';

const Modal = ({close, children}) => {
    return (<>
    
        {!close ? (<div>
            <h1>Not hello world!</h1>
            {children}
        </div>) : null}
    
    </>)
}

export default Modal;
