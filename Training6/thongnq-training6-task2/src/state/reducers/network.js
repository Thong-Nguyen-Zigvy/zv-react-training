import {
    UPDATE_NETWORK,
    
} from "../actions/types";

const initialState = {status: "Online"};

const network = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NETWORK:
            return {...state, status: state.status === "Online" ? "Offline" : "Online"}

        default: 
            return state;
    }
}

export default network;