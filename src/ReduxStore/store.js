import {applyMiddleware, createStore} from "redux" 
import demo from "./reducers"
import createSaga from "redux-saga"
import {LoginSaga} from "./sagas"


var sagaMiddleware = createSaga()
var middlewares = applyMiddleware(sagaMiddleware)

export default createStore(demo,middlewares)
sagaMiddleware.run(LoginSaga)

