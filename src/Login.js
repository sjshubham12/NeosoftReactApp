import {useState , useEffect} from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
function Login(props){
   
    var [formErrors , SetformErrors] = useState({})
    var loginValidate = function(elements){
        var errors = {} 
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
       
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



  
    var user = {}
   

    let login = function(){

        var form = document.getElementById('login_form');
        var errors = loginValidate(form.elements)
        if(errors){
             SetformErrors(errors)
        }else{
         SetformErrors({})
         let loginapiUrl ="https://apibyashu.herokuapp.com/api/login" 
         axios({
             url : loginapiUrl,
             method : "post",
             data : user
         }).then((response)=>{
             
             // console.log("response from login api",response.data)
             if(response.data.token){
                 localStorage.token = response.data.token
                 localStorage.email = response.data.email
                 props.dispatch({
                     type :"LOGIN",
                     payload : response.data
                 })
                 props.history.push("/")

             }else{
                 alert("Invalid Credentials")
             }
         },(error)=>{
             console.log("error" , error)
         })
        }

       
       
        
        
    }
    return (
        <div style={{width:"50%" , margin:"auto"}}>
            <form id="login_form">
            <div className="form-group">
                <label>Email </label>
                <input type="email"  class="form-control" name="email"/>
                <div className="form-error">
                        {formErrors?.email && <div> {formErrors.email}</div> }
                    </div>
                </div>
                <div className="form-group">
                <label>Password </label>
                <input type="password" class="form-control" name="password"/>
                <div className="form-error">
                        {formErrors?.password && <div> {formErrors.password}</div> }
                    </div>
                </div>

                

               
                <div style={{float : "right"}}>
                   <Link to="/forgot">Forgot Password
                   </Link>
                </div>
                <div>
                   <Link to="/signup">New User ? Click Here
                   </Link>
                </div>
            </form>
                
                <button className="btn btn-primary" onClick={login}>Login</button>
            </div>
    )
}

export default connect()(Login)
