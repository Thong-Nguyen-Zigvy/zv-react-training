import { GET_USERS } from "../actions/types";

const inititalState = [];

const users = (state = inititalState, action) => {
    const {type, payload} = action;

    switch(type){
        case GET_USERS:
            console.log(payload);
            return payload.users
        default:
            return state;
    }
}

export default users;