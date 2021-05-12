var demo = function(state ={
    user : null
}, action){
    switch(action.type){
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


        case "REGISTER" :{
            state = {...state}
            state["is_fetch"] =true
            return state
        }
        case "REGISTER_SUCCESS" :{
            state = {...state}
            state["user"] = action.payload
            state["is_fetch"] = false
            
          
            return state
        }
    
        case "REGISTER_FAILURE" :{
            state = {...state}
            state["is_fetch"] = false
            return state
        }


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

        case "ADDTOCART" :{
            state = {...state}
            state["is_fetch"] =true
            return state
        }
        case "ADDTOCART_SUCCESS" :{
            state = {...state}
            state["cartdata"] = action.payload
            state["is_fetch"] = false
          
            return state
        }

        case "ADDTOCART_FAILURE" :{
            state = {...state}
            state["is_fetch"] = false
            return state
        }


        case "CAKEDETAILS" :{
            state = {...state}
            state["is_fetch"] =true
            return state
        }
        case "CAKEDETAILS_SUCCESS" :{
            state = {...state}
            state["allcakesdetails"] = action.payload
            state["is_fetch"] = false
            return state
        }



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
        
        case "CART" :{
            state = {...state}
            state["is_fetch"] =true
            return state
        }
        case "CART_SUCCESS" :{
            state = {...state}
            state["cart"] = action.payload
            state["is_fetch"] = false
            return state
        }

        case "CART_FAILURE" :{
            state = {...state}
            state["is_fetch"] = false
            return state
        }


        case "REMOVECART" :{
            state = {...state}
            state["is_fetch"] =true
            return state
        }
        case "REMOVECART_SUCCESS" :{
            state = {...state}
            state["is_fetch"] = false
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