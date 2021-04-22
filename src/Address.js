import { useState } from "react"

function Address(){
    var [formErrors , SetformErrors] = useState({})
    var Validate = function(elements){
        var errors = {} 
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
       
        if(!elements.name.value){
            errors.name ="Name Field is Required"
        }
        if(!elements.pin_Code.value){
            errors.pin_Code ="Pin code Field is Required"
        }
        
        if(!elements.phone.value){
            errors.phone ="Phone Field is Required"
        }
        
        if(!elements.city.value){
            errors.city ="city is Required"
        }
        if(!elements.email.value){
            errors.email ="Email Field is Required"
        }
        else if (!pattern.test(elements.email.value)) {
            errors.email ="Please Enter Valid Email"
        }
        


        var errorKeys = Object.keys(errors)
        if(errorKeys.length > 0)
        return errors
        else
        return false
        
        
    }

    var PlaceOrder = function(){
        var form = document.getElementById('address_form');
       var errors = Validate(form.elements)
       if(errors){
            SetformErrors(errors)
       }else{
        SetformErrors({})
        alert("Validate Successfully")
       }
    }
    return (
        <div className="row" >
            <div className="col-md-8">

            
            <form id="address_form">
                <div className="form-group">
                    <label> Name </label> 
                    <input type ="text" name="name"  className="form-control"/>
                    <div className="form-error">
                        {formErrors?.name && <div> {formErrors.name}</div> }
                    </div>
                </div>

                <div className="form-group">
                    <label> Email </label> 
                    <input  type ="email" name="email"  className="form-control" />
                    <div className="form-error">
                        {formErrors?.email && <div> {formErrors.email}</div> }
                    </div>
                </div>

                <div className="form-group">
                    <label> Phone </label> 
                    <input  type ="text" name="phone"  className="form-control"/>
                    <div className="form-error">
                        {formErrors?.phone && <div> {formErrors.phone}</div> }
                    </div>
                </div>

                <div className="form-group">
                    <label> City </label> 
                    <input  type ="text" name="city"  className="form-control"/>
                    <div className="form-error">
                        {formErrors?.city && <div> {formErrors.city}</div> }
                    </div>
                </div>

                <div className="form-group">
                    <label> Pin Code </label> 
                    <input  type ="text" name="pin_Code" className="form-control"  />
                    <div className="form-error">
                        {formErrors?.pin_Code && <div> {formErrors.pin_Code}</div> }
                    </div>
                </div>


            </form>
            <button onClick={PlaceOrder} className="btn btn-primary">Place Order</button>

            </div>
            <div class="col-sm-5"></div>
        </div>
    )
}

export default Address