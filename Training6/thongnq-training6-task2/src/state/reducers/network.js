import {
    UPDATE_NETWORK,
    
} from "../actions/types";

const initialState = {status: "Online"};

const network = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NETWORK:
            return {...state, status: action.payload.status}

        default: 
            return state;
    }
}

export default network;