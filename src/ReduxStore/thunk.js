import axios from "axios"

//login think
export function  orderUser(ordermakedata){
    return function(dispatch){
  var baseurl = process.env.REACT_APP_BASE_URL;
    var token = localStorage.token
    axios({
        url : baseurl+'/api/addcakeorder',
        method : "Post",
        data : ordermakedata,
        headers:{
            authtoken:token
        }
    }).then((response)=>{
        if(response.data){
            dispatch({
                type : "PLACEORDER",
                payload : false
            })
            dispatch({
                type:"UPDATE_CART",
                payload:false
            })

            dispatch({
                type : "ADD_COUNTER",
                counter : 5,
                payload : false
            })
                
        }
    },(error)=>{
        console.log("error",error)
    })

}
}

