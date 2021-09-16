import {
    UPDATE_NETWORK_ONLINE,
    UPDATE_NETWORK_OFFLINE
} from "./types";

export const updateNetworkOnline = () => ({type: UPDATE_NETWORK_ONLINE});

export const updateNetworkOffline = ()=> ({type: UPDATE_NETWORK_OFFLINE});