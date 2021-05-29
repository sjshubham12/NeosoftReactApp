
import {useState} from 'react'
import { Link, withRouter } from 'react-router-dom'
import {connect} from "react-redux"
import { useEffect } from 'react'

function Login(props){
    if(props.isLogin ==true){
        props.history.push("/")
    }  
    useEffect(()=>{

    },[])
    var [formErrors , SetformErrors] = useState({})
    
    var validateLogin = function(elements){
        var errors = {} 
        var emailpattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
       
        if(!elements.password.value){
            errors.password ="Password is Required"
        }
        if(!elements.email.value){
            errors.email ="Email is Required"
        }
        else if (!emailpattern.test(elements.email.value)) {
            errors.email ="Please Enter Valid Email id"
        }
        
        var errorKeys = Object.keys(errors)
        if(errorKeys.length > 0)
        return errors
        else
        return false 
    }

    var user = {}
    var [error,setError]=useState()
   
    var [user, setUser]=useState({})
    
    let getLoginData=(event)=>{
        let name=event.target.name
        let value=event.target.value
        setUser({...user,[name]:value})
    }


    let login=function(){
        var form = document.getElementById('loginform');
        var errors = validateLogin(form.elements)
        if(errors){
        SetformErrors(errors)
        }else{
        SetformErrors({})
        props.dispatch({
            type:"LOGIN",
            payload:user
        })
        
        }
    }
    return(
    <div id="login">
        <h3 class="text-center text-white pt-5 ">Login form</h3>
        <div class="container custom-form ">
           <div id="login-row" class="row justify-content-center align-items-center">
              <div id="login-column" class="col-md-6">
                 <div id="login-box" class="col-md-12">
                    <form id="loginform">
                       <h2 class="text-center login-form-custom">Login</h2>
                       <div class="form-group">
                          <label for="email">Email:</label><br />
                          <input type="text" name="email" id="email"  onChange={getLoginData}  class="form-control" />
                          {formErrors?.email && 
                          <div className="form-error">  {formErrors.email}</div>
                          }
                       </div>
                       <div class="form-group">
                          <label for="password">Password:</label><br />
                          <input type="password" name="password" id="password" onChange={getLoginData} class="form-control" />
                          {formErrors?.password && 
                          <div className="form-error"> {formErrors.password}</div>
                          }
                       </div>
                       { props?.error &&
                       <div className="text-danger" style={{color:"red"}}>
                          Invalid Credentials    
                       </div>
                       }
                    </form>
                    <div class="text-center">
                       <button className="btn btn-primary "  onClick={login}>Login</button>
                    </div>
                    <div id="register-link" class="" style={{float:'left'}}>
                       <Link to="/signup">
                       <a >New User ? Register here</a></Link>
                    </div>
                    <div style={{float:'right'}}>
                       <Link to="/forgotpassword">
                       Forgot Password ?</Link>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </div>
        
    )
}
Login = withRouter(Login)
export default connect((state,props)=>{
    return {
        cart:state?.cart,
        isLogin:state['is_Login'],
        error:state['is_loginerror']
    }
})(Login)
//above line added props to login component known as dispatch