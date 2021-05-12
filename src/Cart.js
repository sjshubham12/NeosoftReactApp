
import axios from 'axios'
import {useState} from 'react'; 
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faRecycle, faSearch, faShoppingCart, faTrash} from '@fortawesome/free-solid-svg-icons'
import { Redirect } from "react-router-dom";


function Cart(props){
    let setTotal = props?.cart?.data?.reduce((sum, {price})=>sum+price,0)
    let [removed, setRemoved] = useState(false)

    if(localStorage.token){

    
    let deleteCake = (data) =>{
        var baseurl = process.env.REACT_APP_BASE_URL;
        var token = localStorage.token
            axios({
                method:"post",
                url : baseurl+'/api/removecakefromcart',
                data:{
                    cakeid:data  
                },
                headers:{
                    authtoken:token
                  }
            }).then((response)=>{
                console.log(" cart response data",response)
               
                    props.dispatch({
                        type:"UPDATE_CART",
                        payload:false
                    })
                
                setRemoved(true)
            },(error)=>{
                console.log("error", error)
            })
        
    }

    return (
    <section>
        {props?.cart?.data &&  props?.cart?.data?.length > 0?(
        <div class="row" >
        
            
            <div class="col-lg-6" style={{marginLeft:"60px" , marginTop:"35px"}}>
                <div class="card wish-list mb-3">
                    <div class="card-body">
                        <span>
                   <h5 class="mb-1"><FontAwesomeIcon icon={faShoppingCart} /> (<span>{props?.cart?.data?.length}</span> items)</h5>

                        </span>
                    </div>
                    <div class="card mb-3"></div>
                    {props?.cart?.data?.length>0 && props.cart.data.map((each)=>{
                         return(
                             <div>
                                    <div class="row mb-1">
                    <div class="col-md-5 col-lg-3 col-xl-3">
                        <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                            <img class="img-fluid "  style={{marginLeft:"10px"}}src={each.image} alt="Sample" /> 
                            <a href="#!">
                            </a>
                        </div>
                    </div>
                    <div class="col-md-7 col-lg-9 col-xl-9">
                        <div>
                            <div class="d-flex justify-content-between">
                                <div style={{marginLeft:"30px"}}>

                                <h5 class="mb-3">{each.name}</h5>
                                <p class="mb-3"><span><strong id="summary">${each.price}</strong></span></p>

                                </div>
                            </div>
                            <div class="d-flex justify-content-between align-items-center" style={{marginLeft:"30px"}}>
                                <div>
                                <button type="button" onClick={()=>deleteCake(each.cakeid)} className="btn btn-danger"><FontAwesomeIcon icon={faTrash}/></button>
                                 </div>
                            </div>
                        </div>
                    </div>
                  
                    </div>
                    <div class="card mb-3">
                </div>
                   
                             </div>
                    
                    
                     )
                    })}
                   
                </div>
            </div>
            
                   
         
            <div class="col-md-4" >
                <div class="card mb-3" style={{marginTop:"30px"}}>
                    <div class="card-body">
                    
                    <ul class="list-group list-group-flush">
                       
                        <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                            <div>
                                <strong>The total amount </strong>
                             
                            </div>
                            <span><strong id="shadows-example-total">${setTotal}</strong></span>
                        </li>
                        <div class="card mb-3">
                </div>
                        <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                            <div>
                                <strong>Total Items </strong>
                             
                            </div>
                            <span><strong id="shadows-example-total">{props?.cart?.data?.length}</strong></span>
                        </li>
                    </ul>
                    <Link to="/checkout"><button type="button" class="btn btn-primary btn-block waves-effect waves-light">go to checkout</button></Link>
                    
                    </div>
                </div>
                <div class="card mb-3">
                </div>
            </div>
        </div>
           ):(
            <div className="alert alert-warning container" role="alert">
            <h4 className="alert-heading" style={{ textAlign: "center" }}>
              CART IS EMPTY!
            </h4>
            <hr />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>
                Please add some cake to cart 
              </p>

            
            </div>
          </div>
           )}
         
    </section>
        
    )
    }else{
        return <Redirect to={"/"} />

    }
 
    
}
//export default Cart
export default connect(function(state,props)
{
    return{
        cart:state?.cart,
        user:state?.user?.email
    }
}
)(Cart)
