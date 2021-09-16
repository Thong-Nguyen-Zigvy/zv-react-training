import {actionChannel, call, take, put, select} from "redux-saga/effects";

import {
    UPDATE_STATUS_READY,
    UPDATE_STATUS_SUBMITTING,
    UPDATE_STATUS_ERROR,
    UPDATE_STATUS_SUCCESS} from "../actions/types";

const delay = (ms) => new Promise((res, rej) => {
    const decideStatus = () => {
        Math.random() > .5 ? res("success") : rej("error");
    }
    setTimeout(decideStatus, ms);
});

const getNetworkStatus = (state) => state.network.status;

export function* watchStatus() {
    const requestChan = yield actionChannel(UPDATE_STATUS_READY);

    while(true){
            const {payload} = yield take(requestChan)
    
            yield call(handleStatus, payload);
    }
    
}

function* handleStatus(payload){
    try{
        yield put({type: UPDATE_STATUS_SUBMITTING, payload: {id: payload.id}})
        yield delay(2000);
        yield put({type: UPDATE_STATUS_SUCCESS, payload: {id: payload.id}})
    } catch (e) {
        yield put({type: UPDATE_STATUS_ERROR, payload: {id: payload.id}})

    }
}