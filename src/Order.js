

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {Link} from 'react-router-dom'


function Order(props){
    let ConfirmOrder = function(){
        props.dispatch({
            type : "ADDCAKEORDER",
            payload : props?.orderdata
        })
        props.history.push("/myorders")
    }
    if(localStorage.token){
        return (
            <div>
                <div class="alert alert-success container" role="alert" style={{width:"95%"}}>
                    <h4 class="alert-heading" style={{textAlign: "center"}}>Please proceed further with Cash on delivery</h4>
                    <hr/>
                    <div class="payment-style">
                        <p class="mb-0">Sweet Shopping !</p>
                    </div>
                </div>
                <div class="row payment-form" >
                    <div class="form-check">
                        <Link to ="/checkout/order">
                        <button class="btn btn-outline-primary"  onClick={ConfirmOrder}>order</button></Link>
                    </div>
                    <br />
                </div>
            </div>
            )
        }else{
            return <Redirect to={"/"} />
        }
    }

export default connect((state,props)=>{
    return {
        orderdata:state?.orderdata
    }
})(Order)