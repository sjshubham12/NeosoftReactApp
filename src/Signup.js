
import axios from "axios"
import {useState} from 'react'
import { Link, withRouter } from 'react-router-dom'


function Signup (){
    var [formErrors , SetformErrors] = useState({})

    var validateregister = function(elements){
        var errors = {} 
        var emailpattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
       
        if(!elements.password.value){
            errors.password ="Password field is Required"
        }
        if(!elements.name.value){
            errors.name ="Name Field is Required"
        }
        if(!elements.email.value){
            errors.email ="Email field is Required"
        }
        else if (!emailpattern.test(elements.email.value)) {
            errors.email ="Please Enter Valid Email "
        }
        
        var errorKeys = Object.keys(errors)
        if(errorKeys.length > 0)
        return errors
        else
        return false 
    }
    var user = {}

    let getEmail=(event)=>{
        user.email=event.target.value;
    }

    let getPassword=(event)=>{
        
        user.password=event.target.value;
    }

    let getName=(event)=>{
     
        user.name =event.target.value;
    }



    let register =function(){
        var form = document.getElementById('register_form');
        var errors = validateregister(form.elements)
        var baseurl = process.env.REACT_APP_BASE_URL;

        if(errors){
            SetformErrors(errors)
       }else{
            axios({
                url : baseurl+'/api/register',
                method : "Post",
                data : user
            }).then((response)=>{
                console.log("Respone" , response.data)
            },(error)=>{
                console.log("error",error)
            })
       }
    }
    
   
        return ( 

        <div id="login">
        <h3 class="text-center text-white pt-5 ">Login form</h3>
        <div class="container custom-form ">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12" style={{height:"450px"}}>
                    <form id="register_form">
                            <h2 class="text-center login-form-custom">Sign up</h2>
                            <div class="form-group">
                                <label for="email">Email:</label><br />
                                <input type="text" name="email" id="email"  onChange={getEmail}  class="form-control" />
                                {formErrors?.email && <div className="form-error">  {formErrors.email}</div> }

                            </div>
                            <div class="form-group">
                                <label for="password">Password:</label><br />
                                <input type="password" name="password" id="password" onChange={getPassword} class="form-control" />
                                {formErrors?.password && <div className="form-error"> {formErrors.password}</div> }

                            </div>
                            <div class="form-group">
                                <label for="email">Name:</label><br />
                                <input type="text" name="name" id="name"  onChange={getName}  class="form-control" />
                                {formErrors?.name && <div className="form-error">  {formErrors.name}</div> }

                            </div>
                            
                         
                          
                        </form>
                        {/* <div style={{float:'right'}}>
                        <Link to="/forgot">Forgot Password ?</Link>
                    </div>
                    <div>
                        <Link to="/signup">New User? Click here</Link>
                    </div>
                     */}
                     <div class="text-center">
                              <button className="btn btn-primary" onClick={register}>Sign up</button>

                        </div>
                       
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
         
        )
    
}

export default Signup