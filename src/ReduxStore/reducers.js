var demo = function(state ={
    user : null
}, action){
    switch(action.type){
        case "LOGIN" :{
            state = {...state}
            state["is_Login"] =true
            state["user"] = action.payload
            return state
        }
        case "INTIALIZE" :{
            state = {...state}
            state["is_Login"] =true
            state["user"] = action.payload
            return state
        }
        case "UPDATE_CART":{
            state = {...state}
            state["updatecart"] = action.payload
            return state
        }
    
        case "CART":{
            state = {...state}
            state["cart"] = { data:action.payload}
            console.log("here we have to write logic for cart", state["cart"])
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