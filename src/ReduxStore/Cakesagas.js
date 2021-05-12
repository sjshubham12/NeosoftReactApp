import axios from "axios";
import {call ,put,takeEvery} from "redux-saga/effects"

function cakes(action){

    return axios({
        method : "Post",
        url : "https://apifromashu.herokuapp.com/api/allcakes",
        data : action.payload
    })
    

}

function* CakeGenerator(action){
    
    var result = yield call(cakes,action)
    
    if(result){  
        yield put({type :"ALLCAKES_SUCCESS",payload:result.data.data})
    }
}

export function*  CakeSaga(){
   
    yield takeEvery('ALLCAKES',CakeGenerator)
    
 }
