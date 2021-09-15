import userService from "../../services/user.service";
import {
    GET_USER_INFO,
    GET_USERS,
    GET_USERS_FAIL,
    CLEAR_USERS
} from "./types";

export const getUserInfo = () => dispatch =>{
    return userService.getUserInfo()
    .then(
        (response) => {
            dispatch({
                type: GET_USER_INFO,
                payload: response.data
            })

            return Promise.resolve();
        },
        (error) => {
            console.log(error);
            return Promise.reject();
        }
    )
    
}

export const getUsers = () => dispatch => {
    return userService.getUserList()
    .then( response => {
        dispatch({
            type: GET_USERS,
            payload: response.data
        })

        return Promise.resolve();
        },
        (error) => {
            if(error.response.status === 403){
                dispatch({
                    type: GET_USERS_FAIL,
                    payload: error.response.data
                })
            }
            return Promise.reject();
        }
    )
    
}

export const clearUsers = () => {
    return ({
        type: CLEAR_USERS,
    })
}