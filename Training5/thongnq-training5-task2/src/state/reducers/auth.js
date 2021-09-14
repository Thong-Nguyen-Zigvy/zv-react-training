import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    GET_USER_INFO
} from "../actions/types";

const user = JSON.parse(localStorage.getItem("user"));

const inititalState = user
    ? {isLoggedIn : true, user}
    : {isLoggedIn: false, user: null}

const auth = (state = inititalState, action) => {
    const {type, payload} = action;

    switch(type){
        case LOGIN_SUCCESS:
            return {...state,
                    isLoggedIn: true,
                    user: payload.user};
        case LOGIN_FAIL:
            return {...state,
                    isLoggedIn: false,
                    user: null};
        case LOGOUT:
            return {...state,
                isLoggedIn: false,
                user: null};
        
        case GET_USER_INFO:
            return {
                ...state,
                isLoggedIn: true,
                user: {...user, ...payload}
            }

        default:
            return state;
    } 
}

export default auth;