import { call, put } from "@redux-saga/core/effects";

import userService from "../../../services/user.service";

import {GET_USER_INFO, GET_USERS, GET_USERS_FAIL} from "../../actions/types"

export function* handleGetUserInfo(action) {
    try{
        const response = yield call(userService.getUserInfo);
        yield put({
            type: GET_USER_INFO,
            payload: response.data
        })
    } catch(error) {
        console.log(error)
    }
}

export function* handleGetUsers(action) {
    try{
        const response = yield call(userService.getUserList);
        yield put({
            type: GET_USERS,
            payload: response.data
        })
    } catch(error) {
        if(error.response.status === 403){
            yield put({
                type: GET_USERS_FAIL,
                payload: error.response.data
            })
        } 
    }
}