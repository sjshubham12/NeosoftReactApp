

import axios from 'axios'
import {useState} from 'react'
import { Link, withRouter } from 'react-router-dom'
import {connect} from "react-redux"
import { useEffect } from 'react'

function ForgotPassword(props){
 
    useEffect(()=>{

    },[])
    var [formErrors , SetformErrors] = useState({})
    
    var validateForgotPassword = function(elements){
        var errors = {} 
        var emailpattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
       
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

   
    var [forgotdata, setForgotData]=useState({})
    let getEmail=(event)=>{
        setForgotData({
            ...forgotdata,
            email:event.target.value
        }) 
        forgotdata.email=event.target.value;
    }

    let forgotpassword=function(){
        var form = document.getElementById('forgotpasswordform');
        var errors = validateForgotPassword(form.elements)
        var baseurl = process.env.REACT_APP_BASE_URL;
        if(errors){
                SetformErrors(errors)
                }else{
        SetformErrors({})
        var token = localStorage.token
            axios({
                url : baseurl+'/api/recoverpassword',
                method : "Post",
                data : forgotdata,
                headers:{
                    authtoken:token
                }
            }).then((response)=>{
                if(response.data){
                    props.dispatch({
                        type : "FORGOT_PASSWORD",
                        payload : false
                    })
                }
            },(error)=>{
                console.log("error",error)
            })
        }
    }
    return(
       
    <div id="login">
        <h3 class="text-center text-white pt-5">Forgot Password</h3>
        <div class="container">
           <div id="login-row" class="row justify-content-center align-items-center">
              <div id="login-column" class="col-md-6">
                 <div id="login-box" class="col-md-12" style={{height:"270px"}}>
                    <form id="forgotpasswordform">
                       <h3 class="text-center login-form-custom">Forgot Password</h3>
                       <div class="form-group">
                          <label for="email">Email:</label><br />
                          <input type="text" name="email" id="email"  onChange={getEmail}  class="form-control" />
                          {formErrors?.email && 
                          <div className="form-error">  {formErrors.email}</div>
                          }
                       </div>
                    </form>
                    <div class="text-center">
                       <button className="btn btn-primary"  onClick={forgotpassword}>Forgot Password</button>
                    </div>
                    <div id="register-link"  style={{float:'left'}}>
                       <Link to="/login">
                       <a >Click Here to login</a></Link>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </div>
        
    )
}
export default connect((state,props)=>{
    return { }
})(ForgotPassword)
