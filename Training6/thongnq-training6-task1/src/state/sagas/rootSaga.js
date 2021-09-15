import { takeLatest } from "redux-saga/effects";

import { handleLogin } from "./handlers/auth";

import {handleGetUserInfo, handleGetUsers} from "./handlers/user";

import {LOGIN
        ,START_GET_USER_INFO
        ,START_GET_USERS} from "../actions/types";

export function* watcherSaga() {
    yield takeLatest(LOGIN, handleLogin);
    yield takeLatest(START_GET_USERS, handleGetUsers);
    yield takeLatest(START_GET_USER_INFO, handleGetUserInfo);
}