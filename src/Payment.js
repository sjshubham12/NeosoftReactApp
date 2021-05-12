import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Payment(props){
    let setPaymentCpunter = function(){
        
        props.dispatch({
            type : "ADD_COUNTER",
            counter : 4,
            payload : false
          })
      }

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
        <div class="form-check"><input class="form-check-input payment-input" type="radio" name="cod" id="flexRadioDefault1" value="cod" checked/><span class="form-check-label payment-cod" >COD</span></div>
        <br />
        <div><Link to ="/checkout/order"><button class="btn btn-outline-primary" onClick={setPaymentCpunter}>Confirm</button></Link></div>
        </div>
    </div>
        
    )
}

export default connect() (Payment)