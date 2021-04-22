import logo from './logo.svg';
import './App.css';
import Home from "./Home"
import Navbar from "./Navbar"
import Signup from './Signup'
import Login from './Login';
import CakeDetails from './cakeDetails';
import Search from './Search';
import { connect } from "react-redux"
import Cart from './Cart';
import Checkout from './Checkout';
import ForgotPassword from './forgotPassword';

import { useState } from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
  
} from "react-router-dom";

import axios from "axios"

function App(props) {
  if(localStorage.token && !props.user){
    var token = localStorage.token
    axios({
      method:'get',
      url : 'https://apibyashu.herokuapp.com/api/getuserdetails',
      headers :{
        authToken : token
      }
    }).then((response)=>{
      console.log("response from api",response)
      props.dispatch({
        type : "INTIALIZE",
        payload : response.data.data
      })
    },(error)=>{
      console.log("error",error)
    })
  }
  var [login,setLogin]=useState(false);
  return (
    <div>
      <Router>
      <Navbar loginStatus={login} Logout={setLogin}/>
        <div>
      <Switch>
      <Route path ="/" exact component={Home} ></Route>
      <Route path ="/login" exact component={Login} ></Route>
      <Route path ="/signup" exact component={Signup} ></Route>
      <Route path ="/search" exact component={Search} ></Route>
      <Route path ="/checkout"  component={Checkout} ></Route>
      <Route path ="/forgotpassword"  component={ForgotPassword} ></Route>


      <Route path ="/cart" exact component={Cart} ></Route>


      <Route path ="/cake/:cakeid" exact component={CakeDetails} ></Route>

      <Route path ="/*" >
        <Redirect to="/"></Redirect>
      </Route>
      </Switch>
        
      
        </div>
      </Router>
    </div>
  );
}

export default connect (function(state,props){
return {
  user:state?.user
}
})(App);
