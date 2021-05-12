import axios from "axios";
import {call ,put,takeEvery,all} from "redux-saga/effects"
import {useParams} from "react-router-dom"
    
    var baseurl = process.env.REACT_APP_BASE_URL;

    function login(action){
        return axios({
            method : "Post",
            url : baseurl+"/api/login",
            data : action.payload
        })
    }


    function* LoginGenerator(action){
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

    function register(action){
        return axios({
            method : "Post",
            url : baseurl+"/api/register",
            data : action.payload
        })
    }


    function* RegisterGenerator(action){
    var result = yield call(register,action)
        if(result){  
            yield put({type :"REGISTER_SUCCESS",payload:result.data})
        }else{
            yield put({type : "REGISTER_FAILURE"})
        }
    }


    function cakes(action){
        return axios({
            method : "get",
            url : baseurl+"/api/allcakes"
        
        })
    }

    function* CakeGenerator(action){
        var result = yield call(cakes,action)
        if(result){  
            yield put({type :"ALLCAKES_SUCCESS",payload:result.data.data})
        }
    }


    function cakesdetails(action){
        return axios({
            method : "get",
            url : baseurl+"/api/cake/"+action.payload.params
        })
     }

    function* CakeDetailGenerator(action){
    var result = yield call(cakesdetails,action)
    if(result){  
            yield put({type :"CAKEDETAILS_SUCCESS",payload:result.data.data})
        }
    }

    function addtocart(action){
        return axios({
            method : "post",
            url : baseurl+"/api/addcaketocart/",
            data :{ cakeid : action.payload.cakeid,name : action.payload.name, image:action.payload.image,weight:action.payload.weight,price:action.payload.price},
            headers:{
                authtoken:localStorage.token
            }
        })
    }

    function* AddtoCartGenerator(action){
        var result = yield call(addtocart,action)
        if(localStorage.token){  
            yield put({type :"ADDTOCART_SUCCESS",payload:result.data.data})
            
        }else{
            yield put({type :"ADDTOCART_FAILURE"})

        }
    }

    function caketocart(action){
        
        return axios({
            method : "post",
            url : baseurl+"/api/cakecart",
            data : action.payload,
            headers:{
                authtoken:localStorage.token
            }
        })
    }

    function* CakeCartGenerator(action){
        
        var result = yield call(caketocart,action)
    
        if(localStorage.token){  
            yield put({type :"CART_SUCCESS",payload:result.data.data})
            
        }else{
            yield put({type :"CART_FAILURE"})

        }
    }

    function removecart(action){
        
        return axios({
            method : "post",
            url : baseurl+"/api/removecakefromcart",
            data : action.payload,
            headers:{
                authtoken:localStorage.token
            }
           
        })
    }

    function* RemoveCartGenerator(action){
        
        var result = yield call(removecart,action)
    
        if(localStorage.token){  
            yield put({type :"REMOVECART_SUCCESS"})
            
        }
    }

    export function*  rootSaga(){
        yield all([
            yield takeEvery('LOGIN',LoginGenerator),
            yield takeEvery('ALLCAKES',CakeGenerator),
            yield takeEvery('REGISTER',RegisterGenerator),
            yield takeEvery('CAKEDETAILS',CakeDetailGenerator),
            yield takeEvery('ADDTOCART',AddtoCartGenerator),
            yield takeEvery('CART',CakeCartGenerator),
            yield takeEvery('REMOVECART',RemoveCartGenerator),

        ]);
    }




