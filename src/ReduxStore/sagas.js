import axios from "axios";
import {call ,put,takeEvery,all} from "redux-saga/effects"

var baseurl = process.env.REACT_APP_BASE_URL;

    /*Login function*/
    function login(action){
        return axios({
            method : "Post",
            url : baseurl+'/api/login',
            data : action.payload
        })
    }
    /*End Here*/

    /*Login Generator function*/
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
    /*End Here*/

    /*Signup function*/
    function Signup(action){
         return axios({
            method : "Post",
            url : baseurl+'/api/register',
            data : action.payload
        })
    }
    /*End Here*/

    /*Register Generator function*/
    function* RegisterGenerator(action){
        var result = yield call(Signup,action)
        if(result.data.token){  
            yield put({type :"SIGNUP_SUCCESS",payload:result.data})
        }else{
            yield put({type : "SIGNUP_FAILURE"})
        }
    }
    /*End Here*/

    
    /*AllCakes function*/
    function AllCakes(action){
        return axios({
            method : "get",
            url : baseurl+'/api/allcakes',
       })
   }
    /*End Here*/

    
    /*AllCakes Generator function*/
    function* AllCakesGenerator(action){
       var result = yield call(AllCakes,action)
       if(result){  
           yield put({type :"ALLCAKES_SUCCESS",payload:result.data.data})
       }else{
           yield put({type : "ALLCAKES_FAILURE"})
       }
   }
    /*End Here*/


    /*CakeDetail function*/
    function CakeDetail(action){
        return axios({
            method : "get",
            url : baseurl+'/api/cake/'+action.payload.params,
        })
    }
    /*End Here*/

    /*CakeDetail Generator function*/
    function* CakeDetailGenerator(action){
        var result = yield call(CakeDetail,action)
        if(result){  
            yield put({type :"CAKEDETAIL_SUCCESS",payload:result.data.data})
        }else{
            yield put({type : "CAKEDETAIL_FAILURE"})
        }
    }
    /*End Here*/

     /*Add to cart function*/
     function Addtocart(action){
        var token = localStorage.token
        return axios({
            method : "post",
            url : baseurl+'/api/addcaketocart',
            data : {cakeid:action.payload.cakeid,name:action.payload.name, image:action.payload.image,
                     price:action.payload.price, weight:action.payload.weight},
            headers:{
                authtoken:token
            }
        })
    }
    /*End Here*/

    /*Add to cart Generator function*/
    function* AddtoCartGenerator(action){
        var result = yield call(Addtocart,action)
        if(result){  
            yield put({type :"ADDTOCART_SUCCESS",payload:result.data.data})
            yield put({type :"UPDATE_CART",payload:false})

        }else{
            yield put({type : "ADDTOCART_FAILURE"})
        }
    }
    /*End Here*/    

    /*Cake cart function for navbar*/
      function Cakecart(action){
        var token = localStorage.token
        return axios({
            method : "post",
            url : baseurl+'/api/cakecart',
            data : action.payload,
            headers:{
                authtoken:token
            }
        })
    }
    /*End Here*/

    /*Cake cart Generator function*/
    function* CakeCartGenerator(action){
        var result = yield call(Cakecart,action)
        if(result){  
            yield put({type :"CAKECART_SUCCESS",payload:result.data.data})
            yield put({type :"UPDATE_CART",payload:true})
            
            
        }else{
            yield put({type : "CAKECART_FAILURE"})
        }
    }
    /*End Here*/

    /*Remove cart function*/
    function Removecart(action){
        var token = localStorage.token
        return axios({
            method : "post",
            url : baseurl+'/api/removecakefromcart',
            data :{ cakeid:action.payload},
            headers:{
                authtoken:token
            }
        })
    }
    /*End Here*/

    /*Remove cart Generator function*/
    function* RemoveCartGenerator(action){

        var result = yield call(Removecart,action)
        if(result){  
            yield put({type :"REMOVECART_SUCCESS",payload:false})
            yield put({type :"UPDATE_CART",payload:false})

        }else{
            yield put({type : "REMOVECART_FAILURE"})
        }
    }
    /*End Here*/

     /*My Orders function */
     function MyOrders(action){
        var token = localStorage.token
        return axios({
            method : "post",
            url : baseurl+'/api/cakeorders',
            data :action.payload,
            headers:{
                authtoken:token
            }
        })
    }
    /*End Here*/

    /*My Orders Generator function*/
    function* MyOrdersCartGenerator(action){

        var result = yield call(MyOrders,action)
        if(result){  
            yield put({type :"MYORDERS_SUCCESS",payload:result.data})
            yield put({type :"CAKE_ORDER",payload:result.data})

        }else{
            yield put({type : "MYORDERS_FAILURE"})
        }
    }
    /*End Here*/

    /*Add Order function*/
      function AddCakeOrder(action){
        var token = localStorage.token
        return axios({
            method : "post",
            url : baseurl+'/api/addcakeorder',
            data :action.payload,
            headers:{
                authtoken:token
            }
        })
    }
    /*End Here*/

    /*Add Order  Generator function*/
    function* AddCakeOrderCartGenerator(action){

        var result = yield call(AddCakeOrder,action)
        if(result){  
            yield put({type :"ADDCAKEORDER_SUCCESS",payload:result.data})
            yield put({type :"PLACEORDER",payload:false})
            yield put({type :"UPDATE_CART",payload:false})
            yield put({type :"ADD_COUNTER",counter:5,payload:false})
        }else{
            yield put({type : "ADDCAKEORDER_FAILURE"})
        }
    }
    /*End Here*/


    /*Root saga function*/
    export function * rootSaga() {
        yield all([
            takeEvery('LOGIN',LoginGenerator),
            takeEvery("SIGNUP", RegisterGenerator),
            takeEvery("ALLCAKES", AllCakesGenerator),
            takeEvery("CAKEDETAIL", CakeDetailGenerator),
            takeEvery("ADDTOCART", AddtoCartGenerator),
            takeEvery("CAKECART", CakeCartGenerator),
            takeEvery("REMOVECART", RemoveCartGenerator),
            takeEvery("MYORDERS", MyOrdersCartGenerator),
            takeEvery("ADDCAKEORDER", AddCakeOrderCartGenerator),

        ]);
    }
    /*Ends Here*/

