import React, {useEffect} from 'react';

const Modal = ({action}) => {

    useEffect(() => {
        let keys = "";

        document.addEventListener('keyup', (event) => {
            let get =  event || window.event;
            keys += get.key;
        });

        const timer = setInterval(() => action(keys), 500);
    }, []);
    return (
        <div>
            <input type="text" />
        </div>
    )
}

export default Modal;
