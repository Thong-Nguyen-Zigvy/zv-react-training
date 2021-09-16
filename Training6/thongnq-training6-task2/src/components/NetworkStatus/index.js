
import React from 'react';
import { Para } from './NetworkStatus.styles';

import {useDispatch, useSelector} from "react-redux";

import {updateNetwork} from "../../state/actions/network"

const NetworkStatus = () => {
    const dispatch = useDispatch();

    const status = useSelector(state => state.network.status);

    const handleChangeStatus = () => {
        dispatch(updateNetwork());
    }

    return <Para>Network: <button onClick={handleChangeStatus}>{status}</button></Para>
}

export default NetworkStatus
