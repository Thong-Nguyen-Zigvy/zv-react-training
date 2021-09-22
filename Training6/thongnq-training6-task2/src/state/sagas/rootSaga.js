import {actionChannel, fork, call, take, put, select, takeEvery, all} from "redux-saga/effects";
import { eventChannel } from "@redux-saga/core";
import {
    UPDATE_STATUS,
    UPDATE_NETWORK,
    UPDATE_STATUS_READY} from "../actions/types";

const delay = (ms) => new Promise((res, rej) => {
    const decideStatus = () => {
        Math.random() > .5 ? res("success") : rej("error");
    }
    setTimeout(decideStatus, ms);
});

let networkStatus;

const queueActionOffline = [];


//network
function createNetworkChannel() {
    return eventChannel(emit => {
        const networkOnline = (e) => {
            emit('Online');
        }
        const networkOffline = (e) => {
            emit('Offline');
        }

        window.addEventListener('offline', networkOffline);

        window.addEventListener('online', networkOnline);

        return () => {
            window.removeEventListener('offline', networkOffline);

            window.removeEventListener('online', networkOnline);
        }
    })
}

export function* watchNetwork() {
    const channel = yield call(createNetworkChannel);
    while(true){
        try {
            const networkStatus = yield take(channel);
            yield put({type: UPDATE_NETWORK, payload: {status: networkStatus}})
        } catch (error) {
            console.error(error)
        }
    }
}

//handler
function* handleChangeNetwork() {
    networkStatus = yield select((state) => state.network.status);
    
    if(networkStatus === "Online" && queueActionOffline.length !== 0){
        while(queueActionOffline.length !== 0){

            yield call(handleStatus, queueActionOffline.shift());
        }
    }
}

function* handleStatus(payload){
    try{
        yield put({type: UPDATE_STATUS, payload: {id: payload.id, status: 'Submitting'}})
        yield delay(2000);
        yield put({type: UPDATE_STATUS, payload: {id: payload.id, status: 'Success'}})
    } catch (e) {
        yield put({type: UPDATE_STATUS, payload: {id: payload.id, status: 'Error'}})

    }
}



//watcher
export function* watchStatus() {
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

// export function* watchNetwork() {
//     yield takeEvery(UPDATE_NETWORK, handleChangeNetwork)
//     networkStatus = yield select((state) => state.network.status);
// }



export function* rootSaga(){
    yield all([
        fork(watchNetwork),
        fork(watchStatus)
    ])
}