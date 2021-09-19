import React, {useState} from 'react';

import CloseButton from './CloseButton';

const Modal = ({children}) => {
    const [close, setClose] = useState(false);
  const closeModal = () => {
    setClose(true);
  }

  const childrenWithProps = React.Children.map(children, child => {
    if(typeof child.type === "string"){
        return child;
    }

    return React.cloneElement(child, {closeModal})
  })
    return (<>
    
        {!close ? (<div>
            <h1>Not hello world!</h1>
            {childrenWithProps}
        </div>) : null}
    
    </>)
}

export default Modal;
