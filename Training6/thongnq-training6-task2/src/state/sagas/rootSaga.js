import {actionChannel, fork, call, take, put, select, all} from "redux-saga/effects";
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
            const status = yield take(channel);
            yield put({type: UPDATE_NETWORK, payload: {status: status}});
            if(status === "Online"){
                const tasks = yield select((state) => state.tasks);
                for(let i= 0; i < tasks.length; i++) {
                    if(tasks[i].status === 'Ready'){
                        yield call(handleStatus, tasks[i]);
                    };
                }
            } 
        } catch (error) {
            console.error(error)
        }
    }
}

//handler
// function* handleChangeNetwork() {
//     networkStatus = yield select((state) => state.network.status);
    
//     if(networkStatus === "Online" && queueActionOffline.length !== 0){
//         while(queueActionOffline.length !== 0){

//             yield call(handleStatus, queueActionOffline.shift());
//         }
//     }
// }

function* handleStatus(payload){
    let networkStatus = yield select((state) => state.network.status);
    if(networkStatus === 'Online'){
        try{
            yield put({type: UPDATE_STATUS, payload: {id: payload.id, status: 'Submitting'}})
            yield delay(2000);
            yield put({type: UPDATE_STATUS, payload: {id: payload.id, status: 'Success'}})
        } catch (e) {
            yield put({type: UPDATE_STATUS, payload: {id: payload.id, status: 'Error'}})
    
        }
    }
}



//watcher
export function* watchStatus() {
    const requestChan = yield actionChannel(UPDATE_STATUS_READY);
    while(true){
        const {payload} = yield take(requestChan)
        yield call(handleStatus, payload);
    }
    
}




export function* rootSaga(){
    yield all([
        fork(watchNetwork),
        fork(watchStatus)
    ])
}