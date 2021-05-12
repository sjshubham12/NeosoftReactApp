import { Link } from "react-router-dom"

import {faSearch, faShoppingBag, faShoppingCart, faSignOutAlt} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function  Navbar(props){
 

    return (
      <div>
        

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link to="/"><a class="navbar-brand" href="#"> StreamingApp</a></Link>
 
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
  
    </ul>
    <div class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" id="txt_serach" placeholder="Search" aria-label="Search"/>
      <button  class="btn btn-outline-success my-2 my-sm-0 btn-data" type="submit"><FontAwesomeIcon icon={faSearch} /></button>
      
     
    
    </div>
    
        <button  className="btn btn-primary">Login</button>

     
     
  </div>
</nav>
</div>
    )
}


export default  Navbar