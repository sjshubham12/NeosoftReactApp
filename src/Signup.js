import {Component} from "react"
import axios from "axios"


class Signup extends Component{
    constructor(){
        super()
        this.state = {
           
        }
       
    }

    register =()=>{
        if(!this.user.email ||  !this.user.password || !this.user.name){
            this.setState({
                errorMessage : "Please fill Details"
            })
        }else{
            let apiUrl ="https://apibyashu.herokuapp.com/api/register" 
            axios({
                url : apiUrl,
                method : "Post",
                data : this.user
            }).then((response)=>{
                console.log("response from Sigunp api",response.data)
            },(error)=>{
                console.log("....... user Details",this.user)
            })
        }
        
    }

    user = {}

    getEmail = (event)=>{
        this.user.email = event.target.value
    }  
    
    getName = (event)=>{
        this.user.name = event.target.value
    } 
    
    
    getPassword = (event)=>{
        this.user.password = event.target.value
        
    } 
    render() {
        return (
            <div style={{width:"50%" , margin:"auto"}}>
                <div className="form-group">
                <label>Email </label>
                <input type="email"  onChange= {this.getEmail}class="form-control" />
                    
                </div>
                <div className="form-group">
                <label>Password </label>
                <input type="password" onChange= {this.getPassword}class="form-control" />
                    
                </div>

                <div className="form-group">
                <label>Name </label>
                <input type="text" onChange= {this.getName}class="form-control" />
                    
                </div>

                <div style={{color : "red"}}>
                    {this.state.errorMessage}
                </div>
                <button className="btn btn-primary" onClick={this.register}>Register</button>
            </div>  
        )
    }
}

export default Signup