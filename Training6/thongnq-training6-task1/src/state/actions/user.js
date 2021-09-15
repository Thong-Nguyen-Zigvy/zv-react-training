import {
    CLEAR_USERS,
    START_GET_USERS,
    START_GET_USER_INFO
} from "./types";

export const getUserInfo = () => ({type: START_GET_USER_INFO})

export const getUsers = () => ({type: START_GET_USERS})

export const clearUsers = () => {
    return ({
        type: CLEAR_USERS,
    })
}