// import React, { useEffect, useState } from "react";
// import { connect } from "react-redux";
// import axios from "axios";
// import { faShoppingCart, faTrash } from '@fortawesome/free-solid-svg-icons'
// import {BrowserRouter as Router, Link, Redirect, Route, Switch,useRouteMatch} from "react-router-dom"

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


// function Cart(props) {
 
//   const [cartDetails, setcartDetails] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);
//   useEffect(() => {
//     let detailsapiurl = "https://apibyashu.herokuapp.com/api/cakecart";
//     axios({
//       url: detailsapiurl,
//       method: "post",
//       data: {},
//       headers: {
//         authtoken: props.token,
//       },
//     })
//       .then((response) => {
//         // console.log(response)
//         console.log("cart data", response.data.data);
//         setcartDetails(response.data.data);
//         let total = 0;
//         response.data.data.map(({ price }) => {
//           total = total + price;
          
//         });
//         setTotalPrice(total);
//       })
//       .catch((error) => console.log(error));
//   }, [props.token]);

  
//   let RemoveFromCart= function (cakeid) {

//     console.log("in remove cart",localStorage)
//     console.log("in remove cart cakedetails >>are>>",cartDetails)
//     console.log("in remove cart",cakeid)
//    var email=cartDetails.email
//     let apiurl="https://apibyashu.herokuapp.com/api/removecakefromcart"
//     var token = localStorage.token
//     axios({
//             url: apiurl,
//             method:"post",
//             headers: { authtoken : token},
//             data:{email,cakeid}
//         }).then((response)=>{
//             console.log("remove from Cart => ", response.data)
//             props.dispatch({
//                 type:"SHOP_REMOVE_PRODUCT",
//                 payload: response.data
//             })
//         }, (error)=>{
//             console.log("api Error", error)
//             // setError("Invalid Login")
//         })

// }

//   return (
//     <div>
//       <h1
//         style={{
//           margin: "auto",
//           left: 0,
//           right: 0,
//           textAlign: "center",
//           paddingBottom: "20px",
//           padding: "20px",
//         }}
//       >
//         Your Cart <FontAwesomeIcon icon={faShoppingCart} />
//       </h1>
     
//       <div className="row" style={{ padding: "80px" }}>
//         {cartDetails?.length > 0 ? (
//           <>
//             <div className="col-sm-12 col-md-12 col-md-offset-1 container">
//               <table className="table table-hover">
//                 <tbody>
//                 <tr className="text-white bg-dark">
//                 <td className="text-center">
//                 <h4 className="media-heading">
//                   Image
//                   </h4>
//                   </td>
//                   <td className="text-center">
//                   <h4 className="media-heading">
//                     Name
//                     </h4>
//                   </td>
//                   <td className="text-center">
//                   <h4 className="media-heading">
//                     Price
//                     </h4>
//                   </td>
//                   <td className="text-center">
//                   <h4 className="media-heading">
//                     Weight
//                     </h4>
//                   </td>
//                   <td className="text-center">
//                   <h4 className="media-heading">
//                     Remove
//                     </h4>
//                   </td>
//                   </tr>
//                   {cartDetails?.length > 0 &&
//                     cartDetails.map((cart, index) => {
//                       return (
//                         <tr key={index}>
//                           <td className="text-center ">
//                             <img
//                               className="media-object"
//                               src={cart?.image}
//                               style={{ width: "72px", height: "72px" }}
//                             />{" "}
//                           </td>
//                           <td className="text-center">
//                             <div className="media-body">
//                               <h4 className="media-heading">
//                                 <a>{cart?.name}</a>
//                               </h4>
//                             </div>
//                           </td>
//                           <td className="text-center">
//                             <strong>${cart.price}</strong>
//                           </td>
//                           <td className="text-center">
//                             <strong>{cart.weight}KG</strong>
//                           </td>
//                           <td className="text-center">
//                             <button type="button" className="btn btn-danger" onClick={()=>RemoveFromCart(cart.cakeid)}>
//                               <span className="glyphicon glyphicon-remove"></span>{" "}
//                               {/ Remove /}
//                               <FontAwesomeIcon icon={faTrash} />
//                             </button>
//                           </td>
//                         </tr>
//                       );
//                     })}
//                 </tbody>
//               </table>
//             </div>
//             <div className="col-sm-4 col-md-4"   style={{ float: "right",margin: "auto" }}>
//               <div
//                 style={{
//                   border: "1px solid black",
//                   display: "flex",
//                   justifyContent: "space-around",
//                   paddingTop: "10px",
//                 }}
//               >
//                 <p style={{ textAlign: "center" }}>
//                   Total Item <br /> {cartDetails?.length}
//                 </p>
//                 <p style={{ textAlign: "center" }}>
//                   Total Price <br />$ {totalPrice}
//                 </p>
//               </div>
//               <br/>
//               <Link to="/checkout">
//               <button
//                 style={{ display: "flex", margin: "auto" }}
//                 className="btn btn-success"
//               >
//                 Checkout
//               </button></Link>
//             </div>
//           </>
//         ) : (
//           <div className="alert alert-warning container" role="alert">
//             <h4 className="alert-heading" style={{ textAlign: "center" }}>
//               CART IS EMPTY!
//             </h4>
//             <hr />
//             <div style={{ display: "flex", justifyContent: "space-between" }}>
//               <p>
//                 Please add some cake to cart{!props?.token && ", Please login"}
//               </p>

            
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default connect(function (state, props) {
//   return {
//     token: state?.user?.token
//   };
// })(Cart);

import axios from 'axios'
import {useState} from 'react'; 
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'


function Cart(props){
    console.log("cart token" ,props.is_login)
 //let [total, setTotal] = useState(0)
 let setTotal = props?.cart?.data?.reduce((sum, {price})=>sum+price,0)

    //console.log("need to check total", total)

    let [removed, setRemoved] = useState(false)
    //let setdeleteCake(false)
    let deleteCake = (data) =>{
        //console.log("cake details...",cakecart)
    
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
                   {props?.cart?.data?.length >0 ?(
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
                        Please add some cake to cart {!localStorage?.token && ", Please login"}
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
