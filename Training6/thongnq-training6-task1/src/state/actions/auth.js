import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from "./types";

import AuthService from "../../services/auth.service";

export const login = (email, password) => (dispatch) => {
    return AuthService.login(email, password).then(
        (data) => {
            if(data.error){
                dispatch({
                    type: LOGIN_FAIL,
                    payload: {error: data.error}
                })
            } else {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: {user:data}
                })
            }

            return Promise.resolve();
        },
        (error) => {
            dispatch({
                type:LOGIN_FAIL,
                payload: {error: error.message}
            })

            return Promise.reject();
        }
    )
}

export const logout = () => (dispatch) => {
    AuthService.logout();

    dispatch({
        type: LOGOUT
    })
}