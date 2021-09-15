import { takeLatest } from "redux-saga/effects";

import { handleLogin } from "./handlers/auth";

import {LOGIN} from "../actions/types";

export function* watcherSaga() {
    yield takeLatest(LOGIN, handleLogin);
}