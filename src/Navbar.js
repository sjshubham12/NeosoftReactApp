import { Link } from "react-router-dom"

import {faSearch, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {useState, useEffect} from 'react';
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import axios from 'axios'


function  Navbar(props){
    let search = function(event){
        event.preventDefault()
        var serachId = document.getElementById('txt_serach').value;
        let Searchurl = "/search?searchtext="+ serachId
        props.history.push(Searchurl)
    }

    useEffect(() =>{
      var token = localStorage.token
          axios({
            method:'post',
            url:'https://apibyashu.herokuapp.com/api/cakecart',
            headers:{
              authtoken:token
            }
          }).then((response)=>{
            
            props.dispatch({
              type:"CART",
              payload:response.data.data
          })
          // props.history.push("/cart")
  
          props.dispatch({
            type:"UPDATE_CART",
            payload:true
        })
      
          }, (error)=>{
        console.log("error ", error)
          })
        },[props?.updatecart])


  var Logout = (event) =>{
    event.preventDefault()  
    props.dispatch({
        type :"LOGOUT"
      
      })
      props.history.push("/")

  }
    return (
      <div>
        

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link to="/"><a class="navbar-brand" href="#"> CakeShop</a></Link>
 
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
    <li className="nav-item">
        {props.user && <a className="nav-link"  tabIndex={-1} aria-disabled="true">
        Welcome {props.user}
        </a>}
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" id="txt_serach" placeholder="Search" aria-label="Search"/>
      <button onClick= {search} class="btn btn-outline-success my-2 my-sm-0" type="submit"><FontAwesomeIcon icon={faSearch} /></button>
      
     
    
    </form>
    { props.loginStatus ?
          <div>
             <Link to="/cart" className="btn btn-warning my-2 my-sm-0" type="submit"><FontAwesomeIcon icon={faShoppingCart} />
        <span class="price">
          <i class="fa fa-shopping-cart"></i>
        
          <b>{props?.cart?.data?.length && props?.cart?.data?.length >0 ? props?.cart?.data?.length :0 }</b>
          
        </span>
        </Link>
     <button className="btn btn-danger" onClick={Logout}>Logout</button>

    
          </div>
     :  <div>
          <Link to="/login"><button  className="btn btn-primary">Login</button></Link>

     </div>}
     
  </div>
</nav>
</div>
    )
}

var navbar =  withRouter(Navbar)

export default connect(function (state ,props){
  return{
    user :state?.user?.name,
    cart:state?.cart,
    updatecart: state?.updatecart,
    loginStatus:state?.is_Login
    
  }
})(navbar)