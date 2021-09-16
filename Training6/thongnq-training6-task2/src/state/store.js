import {createStore, applyMiddleware} from "redux";

import {composeWithDevTools} from "redux-devtools-extension";

import {persistStore} from "redux-persist";

import createSagaMiddleware from "redux-saga";

import {offlineMiddleware} from "redux-offline-queue"

import rootReducer from "./reducers";

import {watchStatus} from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware]

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

sagaMiddleware.run(watchStatus);

export const persistor = persistStore(store);