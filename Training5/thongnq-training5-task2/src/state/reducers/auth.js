import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    GET_USER_INFO
} from "../actions/types";

const user = JSON.parse(localStorage.getItem("user"));

const inititalState = user
    ? {isLoggedIn : true,error: null, user}
    : {isLoggedIn: false,error: null, user: null}

const auth = (state = inititalState, action) => {
    const {type, payload} = action;

    switch(type){
        case LOGIN_SUCCESS:
            return {...state,
                    isLoggedIn: true,
                    error: null,
                    user: payload.user};
        case LOGIN_FAIL:
            return {...state,
                    isLoggedIn: false,
                    error: payload.error,
                    user: null};
        case LOGOUT:
            return {...state,
                isLoggedIn: false,
                error: null,
                user: null};
        
        case GET_USER_INFO:
            return {
                ...state,
                isLoggedIn: true,
                error: null,
                user: {...user, ...payload}
            }

        default:
            return state;
    } 
}

export default auth;