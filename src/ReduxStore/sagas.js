import axios from "axios";
import {call ,put,takeEvery} from "redux-saga/effects"

function login(action){
    // console.log("action data" ,action)

    return axios({
        method : "Post",
        url : "https://apifromashu.herokuapp.com/api/login",
        data : action.payload
    })
    

}


function* LoginGenerator(action){
    // console.log("action data" ,action)

    var result = yield call(login,action)
   
    if(result.data.token){  
        yield put({type :"LOGIN_SUCCESS",payload:result.data})
        localStorage.token = result.data.token
        localStorage.email = result.data.email
        yield put({type :"UPDATE_CART",payload:false})

    

    }else{
        yield put({type : "LOGIN_FAILURE"})

    }
}

export function*  LoginSaga(){
   yield takeEvery('LOGIN',LoginGenerator)
   
}
