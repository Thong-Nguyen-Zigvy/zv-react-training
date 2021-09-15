import {createStore, applyMiddleware} from "redux"

import {composeWithDevTools} from "redux-devtools-extension"

// import thunk from "redux-thunk";

import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers";
import { watcherSaga } from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const middleWare = [sagaMiddleware];

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleWare))
)

sagaMiddleware.run(watcherSaga);

export default store;