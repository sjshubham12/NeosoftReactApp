//import {useState} from 'react'; 
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { useRouteMatch } from "react-router";
function CartSummary(props){

    var route = useRouteMatch()
    var url = route.url
   
    let setTotal = props?.cart?.data?.reduce((sum, {price})=>sum+price,0)
    return(
        <div class="cart_section">
     <div class="container-fluid">
         <div class="row">
             
             <div class="col-lg-8 offset-lg-1">
                 <div class="cart_container">
                 <div class="cart_title">Your Cart<small> ({props?.cart?.data?.length} item in your cart) </small></div>
                   <div class="row">
                    <div class="col-sm-8">

                        <table className="table table-bordered">

                            {props?.cart?.data?.length>0 && props?.cart?.data.map((each)=>{
                            return(
                            <tr>
                                <td><img src={each.image} alt="" width="50px" height="50px" /></td>
                                <td>{each.name}</td>
                                <td>₹{each.price}</td>
                                
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


                     
                 </div>
             </div>



         </div>
     </div>
 </div>
    )
}
//export default CartSummary
export default connect(function(state,props)
{
    return{
        cart:state?.cart,
       
    }
}
)(CartSummary)