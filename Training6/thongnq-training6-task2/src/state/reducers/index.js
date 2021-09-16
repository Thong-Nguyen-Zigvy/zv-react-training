import {combineReducers} from "redux";

import {persistReducer} from "redux-persist";

import storage from "redux-persist/lib/storage";

import tasks from "./tasks";
import network from "./network";

import {reducer as offline} from "redux-offline-queue"

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['tasks']
}

const rootReducer = combineReducers({offline, tasks, network});

export default persistReducer(persistConfig, rootReducer);