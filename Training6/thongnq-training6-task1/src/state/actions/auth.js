import {
    LOGOUT,
    LOGIN
} from "./types";

import AuthService from "../../services/auth.service";

export const login = (email, password) => {
    return ({
        type: LOGIN,
        payload: {email, password}
    })
}

export const logout = () => {
    AuthService.logout();
    return ({
        type: LOGOUT
    })
}