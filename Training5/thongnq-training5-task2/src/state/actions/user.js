import userService from "../../services/user.service";
import {
    GET_USER_INFO
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