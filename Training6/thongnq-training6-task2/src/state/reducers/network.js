import {
    UPDATE_NETWORK_ONLINE,
    UPDATE_NETWORK_OFFLINE
} from "../actions/types";

const initialState = {status: "Online"};

const network = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NETWORK_ONLINE:
            return {...state, status: "Online"}

        case UPDATE_NETWORK_OFFLINE:
            return {...state, status: "Offline"}

        default: 
            return state;
    }
}

export default network;