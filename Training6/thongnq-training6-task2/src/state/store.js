import {createStore, applyMiddleware, compose} from "redux";

import {composeWithDevTools} from "redux-devtools-extension";
import {persistStore} from "redux-persist";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import {rootSaga} from "./sagas/rootSaga";


const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware]


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);