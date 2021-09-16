
import React from 'react';
import { Para } from './NetworkStatus.styles';

import {useDispatch, useSelector} from "react-redux";

import {updateNetworkOnline, updateNetworkOffline} from "../../state/actions/network"

const NetworkStatus = () => {
    const dispatch = useDispatch();

    const status = useSelector(state => state.network.status);

    const handleChangeStatus = () => {
        status === "Online" ? dispatch(updateNetworkOffline()) : dispatch(updateNetworkOnline());
    }

    return <Para>Network: <button onClick={handleChangeStatus}>{status}</button></Para>
}

export default NetworkStatus
