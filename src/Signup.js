import {useState , useEffect} from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
function Signup(props){
    
    var [formErrors , SetformErrors] = useState({})
    var RegisterValidate = function(elements){
        console.log("form elements" , elements)
        var errors = {} 
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        
        if(!elements.name.value){
            errors.name ="Name Field is Required"
        }
        if(!elements.password.value){
            errors.password ="Password Field is Required"
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


   
    let register = function(){

        var form = document.getElementById('register_form');
        var errors = RegisterValidate(form.elements)
        if(errors){
             SetformErrors(errors)
        }else{
         SetformErrors({})
         let registerUrl ="https://apibyashu.herokuapp.com/api/register" 

         axios({
             url : registerUrl,
             method : "post",
             data : this.user
         }).then((response)=>{
             
             
            console.log("response from Sigunp api",response.data)
            
         },(error)=>{
             console.log("error" , error)
         })
        }

       
       
        
        
    }
    return (
        <div style={{width:"50%" , margin:"auto"}}>
              <form id="register_form"> 
              <div className="form-group">
                <label>Email </label>
                <input type="email" class="form-control" name="email"/>
                <div className="form-error">
                        {formErrors?.email && <div> {formErrors.email}</div> }
                    </div>
                </div>
                <div className="form-group">
                <label>Password </label>
                <input type="password" class="form-control" name="password" />
                <div className="form-error">
                        {formErrors?.password && <div> {formErrors.password}</div> }
                    </div>
                </div>

                <div className="form-group">
                <label>Name </label>
                <input type="text" class="form-control" name="name" />
                <div className="form-error">
                        {formErrors?.name && <div> {formErrors.name}</div> }
                    </div>
                </div>
                </form>
                <button className="btn btn-primary" onClick={register}>Register</button>
                
              
                
            </div>  
    )
}

export default connect()(Signup)
