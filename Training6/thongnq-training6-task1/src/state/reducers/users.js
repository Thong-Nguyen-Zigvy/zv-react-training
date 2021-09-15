import { GET_USERS, GET_USERS_FAIL, CLEAR_USERS } from "../actions/types";

const inititalState = {users: [], error: null};

const users = (state = inititalState, action) => {
    const {type, payload} = action;

    switch(type){
        case GET_USERS:
            return {...state, users: payload.users, error: null}
        case GET_USERS_FAIL:
            return {...state, users: [], error: payload.error}
        case CLEAR_USERS:
            return inititalState;
        default:
            return state;
    }
}

export default users;