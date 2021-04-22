
import axios from 'axios'
import {useState} from 'react'; 
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'


function Cart(props){
 let setTotal = props?.cart?.data?.reduce((sum, {price})=>sum+price,0)

   let [removed, setRemoved] = useState(false)
    
    let deleteCake = (data) =>{
       
        var token = localStorage.token
            let removecakeapi="https://apibyashu.herokuapp.com/api/removecakefromcart"
            axios({
                method:"post",
                url:removecakeapi,
                data:{
                    cakeid:data  
                },
    
                headers:{
                    authtoken:token
                  }
            }).then((response)=>{

                props.dispatch({
                    type:"UPDATE_CART",
                    payload:false
                })

                console.log(response)
                setRemoved(true)
            },(error)=>{
                console.log("Error form removecakefromcart api", error)
            })
        
    }

    return (
             <div class="cart_section">
     <div class="container-fluid">
     
         <div class="row">
             
             <div class="col-lg-8 offset-lg-1">
                 <div class="cart_container">
                   {props?.cart?.data &&  props?.cart?.data?.length > 0?(
                     <div>
                        <div class="cart_title">Shopping Cart<small> ({props?.cart?.data?.length} item in your cart) </small></div>
                   <div class="row">
                    <div class="col-sm-8">

                        <table className="table table-bordered">

                            {props?.cart?.data?.length>0 && props.cart.data.map((each)=>{
                            return(
                            <tr>
                                <td><img src={each.image} alt="" width="50px" height="50px" /></td>
                                <td>{each.name}</td>
                                <td>₹{each.price}</td>
                                <td><button type="button" onClick={()=>deleteCake(each.cakeid)} className="btn btn-warning">Remove</button></td>
                            </tr>
                            )
                            })}
                            
                        </table>

                     
                       </div>

                       <div class="col-sm-4">
                       <table className="table table-bordered">
                            <tr>
                                <td>Total Items</td>
                                <td>Total Price</td>
                            </tr>
                            <tr>
                                <td>{props?.cart?.data?.length}</td>
                                <td>{setTotal}</td>
                            </tr>
                        </table>
                         
                       </div>

                     </div>
                     <div class="row">
                        <div className="col-sm-10"></div>
                        <div className="col-sm-2">
                        <Link to="/checkout"><button type="button" class="button cart_button_checkout">Checkout</button></Link>
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
                 


                   
                     
                 </div>
             </div>



         </div>
         
     </div>
 </div>
        
    )
    
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
