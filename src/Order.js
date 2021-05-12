

import { useState } from "react"
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import axios from 'axios'
import {Link} from 'react-router-dom'


function Order(props){
    
    console.log("order data",props)
    let ConfirmOrder = function(){
    var baseurl = process.env.REACT_APP_BASE_URL;
        var token = localStorage.token
            axios({
                url : baseurl+'/api/addcakeorder',
                method : "Post",
                data : props.orderdata,
                headers:{
                    authtoken:token
                }
            }).then((response)=>{
                if(response.data){
                    props.dispatch({
                        type : "PLACEORDER",
                        payload : false
                    })

                    props.dispatch({
                        type:"UPDATE_CART",
                        payload:false
                    })

                
                    props.dispatch({
                        type : "ADD_COUNTER",
                        counter : 5,
                        payload : false
                    })
                      
                
                    
                }
            },(error)=>{
                console.log("error",error)
            })
        
    }
    return (
        // <div className="row" >
        //     <div className="col-md-8">
                
        //         <button onClick={ConfirmOrder} className="btn btn-primary">Order Button</button>
        //     </div>
        //     <div class="col-sm-5"></div>
        // </div>
        <div>

<div class="alert alert-success container" role="alert" style={{width:"95%"}}>
   <h4 class="alert-heading" style={{textAlign: "center"}}>Please proceed further with Cash on delivery</h4>
   <hr/>
   <div class="payment-style">
      <p class="mb-0">Sweet Shopping !</p>
   </div>
</div>
              {/* <Link to ="/checkout/order"><button  className="btn btn-primary" onClick={setPaymentCpunter}>Confirm</button></Link> */}
              <div class="row payment-form" >
   <div class="form-check"><Link to ="/checkout/order"><button class="btn btn-outline-primary"  onClick={ConfirmOrder}>order</button></Link></div>
   <br />

</div>
        </div>
        )
    }


// export default connect ((state ,props){
//     return {
//         orderdadata:state?.orderdata
//     }
// })(Order)


export default connect((state,props)=>{
    return {
        orderdata:state?.orderdata

    }
})(Order)