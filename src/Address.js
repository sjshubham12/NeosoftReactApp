import { useState } from "react"
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import axios from 'axios'

function Address(props){

    var [formErrors , SetformErrors] = useState({})
    
    var OrderData = {}
    var [OrderData , setAddressformdata] = useState({})
   

    // console.log("data of place order",OrderData)
            
    if(localStorage.token){
        var Validate = function(elements){
        var errors = {} 
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        
        if(!elements.name.value){
            errors.name ="Name Field is Required"
        }
        if(!elements.address.value){
            errors.address ="Address Field is Required"
        }
        if(!elements.pincode.value){
            errors.pincode ="Pin code Field is Required"
        }
        if(elements.pincode.value.match(/^[a-zA-Z]+$/)){
            errors.pincode="Wrong pincode entered"
        }
        if(!elements.phone.value){
            errors.phone ="Phone Field is Required"
        }
        if(!elements.city.value){
            errors.city ="city is Required"
        }
      
        var errorKeys = Object.keys(errors)
        if(errorKeys.length > 0)
        return errors
        else
        return false
    }


    
    let setTotal = props?.cakecart?.reduce((sum, {price})=>sum+price,0)

    let getAddData=(event)=>{
        let name=event.target.name
        let value=event.target.value
        setAddressformdata({...OrderData,[name]:value,price: setTotal,cakes: props?.cakecart})
    }

    let PlaceOrder = function(){
        var token = localStorage.token
        var form = document.getElementById('address_form');
        var errors = Validate(form.elements)
        if(errors){
            SetformErrors(errors)
        }else{
        SetformErrors({})
            props.dispatch({
                type : "PLACEORDER",
                payload : OrderData
            })
            props.dispatch({
                type : "ADD_COUNTER",
                counter : 3,
                payload : false
              })
            props.history.push("/checkout/payment")
        }
    }
    return (
        <div className="row" >
            <div className="col-md-8 cart-design" >
                <form id="address_form">
                    <div className="form-group">
                        <label> Name </label> 
                        <input type ="text" name="name" className="form-control" onChange={getAddData}/>
                        <div className="form-error">

                        {formErrors?.name &&  <div> {formErrors.name}</div> }
                        </div>
                    </div>
                    <div className="form-group">
                        <label> Phone </label> 
                        <input  type ="text" name="phone"  className="form-control" onChange={getAddData}/>
                        <div className="form-error">

                        {formErrors?.phone &&  <div> {formErrors.phone}</div>}
                        </div>
                    </div>
                    <div className="form-group">
                        <label> City </label> 
                        <input  type ="text" name="city"  className="form-control" onChange={getAddData}/>
                        <div className="form-error">
                            
                        {formErrors?.city && <div> {formErrors.city}</div>}
                        </div>
                    </div>

                    <div className="form-group">
                        <label> Address </label> 
                        <input  type ="text" name="address"  className="form-control" onChange={getAddData}/>
                        <div className="form-error">
                            
                        {formErrors?.address && <div> {formErrors.address}</div>}
                        </div>
                    </div>
                    <div className="form-group">
                        <label> Pin Code </label> 
                        <input  type ="text" name="pincode" className="form-control" onChange={getAddData} />
                        <div className="form-error">

                        {formErrors?.pincode &&  <div> {formErrors.pincode}</div> }
                        </div>
                    </div>
                </form>
                <button onClick={PlaceOrder} className="btn btn-primary">Place Order</button>
            </div>
            <div class="col-sm-5"></div>
        </div>
        )
    }else{
        return <Redirect to={"/"} />
    }
}

export default connect (function(state ,props){
    return {
        cakecart:state?.cakecart,

    }
})(Address)
