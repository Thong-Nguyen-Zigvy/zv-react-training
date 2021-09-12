import React, {useState} from 'react';

import CloseButton from './CloseButton';

const Modal = ({children}) => {
    const [close, setClose] = useState(false);
  const closeModal = () => {
    setClose(true);
  }

  const childrenWithProps = React.Children.map(children, child => {
      if(CloseButton === child.type) {
          return React.cloneElement(child, {closeModal})
      }
      return child;
  })
    return (<>
    
        {!close ? (<div>
            <h1>Not hello world!</h1>
            {childrenWithProps}
        </div>) : null}
    
    </>)
}

export default Modal;
