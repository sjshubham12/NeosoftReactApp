var demo = function(state ={
    user : null
}, action){
    switch(action.type){

        /* Login Disptach Action*/
        case "LOGIN" :{
            state = {...state}
            state["is_fetch"] =true
            return state
        }
        case "LOGIN_SUCCESS" :{
            state = {...state}
            state["is_Login"] =true
            state["user"] = action.payload
            state["is_fetch"] = false
            state["is_loginerror"] = false
            return state
        }
        case "LOGIN_FAILURE" :{
            state = {...state}
            state["is_fetch"] = false
            state["is_loginerror"] = true
            return state
        }
        /*Ends Here*/

        /* Signup Disptach Action*/    
        case "SIGNUP" :{
            state = {...state}
            state["is_fetch"] =true
            return state
        }
        case "SIGNUP_SUCCESS" :{
            state = {...state}
            state["user"] = action.payload
            state["is_fetch"] = false
            return state
        }
        case "SIGNUP_FAILURE" :{
            state = {...state}
            state["is_fetch"] = false
            return state
        }
        /*Ends Here*/

        /* AllCakes Disptach Action*/    
         case "ALLCAKES" :{
            state = {...state}
            state["is_fetch"] =true
            return state
        }
        case "ALLCAKES_SUCCESS" :{
            state = {...state}
            state["allcakes"] = action.payload
            state["is_fetch"] = false
            return state
        }
        case "ALLCAKES_FAILURE" :{
            state = {...state}
            state["is_fetch"] = false
            return state
        }
        /*Ends Here*/

        /* AllCakes Disptach Action*/    
          case "CAKEDETAIL" :{
            state = {...state}
            state["is_fetch"] =true
            return state
        }
        case "CAKEDETAIL_SUCCESS" :{
            state = {...state}
            state["cakedetail"] = action.payload
            state["is_fetch"] = false
            return state
        }
        case "CAKEDETAIL_FAILURE" :{
            state = {...state}
            state["is_fetch"] = false
            return state
        }
        /*Ends Here*/

        /* AddtoCart Disptach Action*/    
        case "ADDTOCART" :{
            state = {...state}
            state["is_fetch"] =true
            return state
        }
        case "ADDTOCART_SUCCESS" :{
            state = {...state}
            state["addtocart"] = action.payload
            state["is_fetch"] = false
            return state
        }
        case "ADDTOCART_FAILURE" :{
            state = {...state}
            state["is_fetch"] = false
            return state
        }
        /*Ends Here*/

        /* CakeCart Disptach Action*/    
          case "CAKECART" :{
            state = {...state}
            state["is_fetch"] =true
            return state
        }
        case "CAKECART_SUCCESS" :{
            state = {...state}
            state["cakecart"] = action.payload
            state["is_fetch"] = false
            return state
        }
        case "CAKECART_FAILURE" :{
            state = {...state}
            state["is_fetch"] = false
            return state
        }
        /*Ends Here*/

        /* RemoveCart Disptach Action*/    
         case "REMOVECART" :{
            state = {...state}
            state["is_fetch"] =true
            return state
        }
        case "REMOVECART_SUCCESS" :{
            state = {...state}
            state["removecart"] = action.payload
            state["is_fetch"] = false
            return state
        }
        case "REMOVECART_FAILURE" :{
            state = {...state}
            state["is_fetch"] = false
            return state
        }
        /*Ends Here*/

        /* MyOrder Disptach Action*/    
         case "MYORDERS" :{
            state = {...state}
            state["is_fetch"] =true
            return state
        }
        case "MYORDERS_SUCCESS" :{
            state = {...state}
            state["myorder"] = action.payload
            state["is_fetch"] = false
            return state
        }
        case "MYORDERS_FAILURE" :{
            state = {...state}
            state["is_fetch"] = false
            return state
        }
        /*Ends Here*/

        /* Add Order Disptach Action*/    
        case "ADDCAKEORDER" :{
            state = {...state}
            state["is_fetch"] =true
            return state
        }
        case "ADDCAKEORDER_SUCCESS" :{
            state = {...state}
            state["addorder"] = action.payload
            state["is_fetch"] = false
            return state
        }
        case "ADDCAKEORDER_FAILURE" :{
            state = {...state}
            state["is_fetch"] = false
            return state
        }
        /*Ends Here*/

        case "INTIALIZE" :{
            state = {...state}
            state["is_Login"] =true
            state["user"] = action.payload
            return state
        }
        case "FORGOT_PASSWORD":{
            state = {...state}
            state["forgot"] = action.payload
            return state
        }

        case "UPDATE_CART":{
            state = {...state}
            state["updatecart"] = action.payload
            return state
        }

       

        case "CAKE_ORDER":{
        state = {...state}
        state["orderdetails"] = action.payload
        return state
    }

        case "ADD_COUNTER":{
            state = {...state}
            state["updatecounter"] = action.counter
            return state
        }
        
    
        case "CART":{
            state = {...state}
            state["cart"] = { data:action.payload}
         
           return state
        }

        case "PLACEORDER":{
            state = {...state}
            state["orderdata"] = action.payload
            return state
        }
        
        
        case "LOGOUT" :{
            state = {...state}
            localStorage.clear()
            delete state["user"]
            delete state["is_Login"]

            return state
        }
        default : return state
    }
}

export default demo