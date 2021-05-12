import {applyMiddleware, createStore} from "redux" 
import demo from "./reducers"
import createSaga from "redux-saga"
import {rootSaga} from "./sagas"
import thunk from "redux-thunk";

var sagaMiddleware = createSaga()
var middlewares = applyMiddleware(sagaMiddleware,thunk)

export default createStore(demo,middlewares)
sagaMiddleware.run(rootSaga)

