import { call, put } from "redux-saga/effects";
import {LOGIN_SUCCESS, LOGIN_FAIL} from "../../actions/types"

import AuthService from "../../../services/auth.service";

export function* handleLogin(action){
    try{
        const data = yield call(AuthService.login, action.payload.email, action.payload.password)
        if(data.error){
            yield put({
                type: LOGIN_FAIL,
                payload: {error: data.error}
            })
        } else {
            yield put({
                type: LOGIN_SUCCESS,
                payload: {user:data}
            })
        }
    } catch (error) {
        yield put({
            type:LOGIN_FAIL,
            payload: {error: error.message}
        })
    }
}