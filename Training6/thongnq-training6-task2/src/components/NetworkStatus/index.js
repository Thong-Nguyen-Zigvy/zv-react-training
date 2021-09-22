
import React from 'react';
import { Para } from './NetworkStatus.styles';

import {useSelector} from "react-redux";


const NetworkStatus = () => {

    const status = useSelector(state => state.network.status);


    return <Para>Network: <button>{status}</button></Para>
}

export default NetworkStatus
