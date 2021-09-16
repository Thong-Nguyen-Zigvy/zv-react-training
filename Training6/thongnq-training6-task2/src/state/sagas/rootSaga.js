import {actionChannel, call, take, put, select, takeEvery} from "redux-saga/effects";

import {
    UPDATE_STATUS_READY,
    UPDATE_STATUS_SUBMITTING,
    UPDATE_STATUS_ERROR,
    UPDATE_STATUS_SUCCESS,
    UPDATE_NETWORK} from "../actions/types";

const delay = (ms) => new Promise((res, rej) => {
    const decideStatus = () => {
        Math.random() > .5 ? res("success") : rej("error");
    }
    setTimeout(decideStatus, ms);
});

let networkStatus;

const queueActionOffline = [];


function* changeNetwork() {
    networkStatus = yield select((state) => state.network.status);
    
    if(networkStatus === "Online" && queueActionOffline.length !== 0){
        while(queueActionOffline.length !== 0){

            yield call(handleStatus, queueActionOffline.shift());
        }
    }
}


export function* watchStatus() {
    yield takeEvery(UPDATE_NETWORK, changeNetwork)
    networkStatus = yield select((state) => state.network.status);

    const requestChan = yield actionChannel(UPDATE_STATUS_READY);
    while(true){
            const {payload} = yield take(requestChan)

            if(networkStatus === "Online"){
                yield call(handleStatus, payload);
            } else {
                queueActionOffline.push(payload);
            }
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