
import {useState, useEffect} from 'react';
import { connect } from "react-redux";
//import { Redirect } from "react-router-dom";
import axios from 'axios'

function Orderdetail(props){
  //let [orderdetails, setOrderdetails] = useState({})
    useEffect(() =>{
        var token = localStorage.token
        var baseurl = process.env.REACT_APP_BASE_URL;
          axios({
              method:'post',
              url : baseurl+'/api/cakeorders',
              headers:{
                authtoken:token
              }
            }).then((response)=>{
             
              props.dispatch({
                type:"CAKE_ORDER",
                payload:response.data
            })
    
          
            }, (error)=>{
          console.log("error from get user details api", error)
            })
          },[])
    return (

        
           
        <div className="container cart-design" style={{marginTop:"17px"}}>
    <article className="card">
        <header className="card-header"> My Orders </header>
        <table class="table">
              <thead>
                <tr >
                  <th  >
                    Product
                  </th>
                  <th class="text-left"  style={{paddingRight: "30px"}}>
                   Name
                  </th>
                  <th class="text-left">
                    Price
                  </th>
                 
                 
                </tr>
              </thead>
              <tbody>
        {props?.orderdetails?.length>0 && props?.orderdetails.map((each)=>{
        return(
        <div >
          
           
                {each.cakes.map((cakeitem)=>{
                    return(
                //     <li className="col-md-4">
                //     <figure className="itemside mb-3">
                //         <div className="aside"><img src={cakeitem.image} width="200px" className="img-sm border" /></div>
                //         <figcaption className="info align-self-center">
                //             <p className="title">{cakeitem.name} <br /> Payment : {each.mode}</p> <span className="text-muted">Price {cakeitem.price} </span>
                //         </figcaption>
                //     </figure>
                // </li>
                <tr>
                <td >
                 
                    <img src={cakeitem.image} alt="" style={{width:"100px"}} class="img-fluid rounded shadow-sm" />
                    
                
                  
                </td>
                <td ><strong>{cakeitem.name}</strong></td>

                <td ><strong>${cakeitem.price}</strong></td>
                </tr>
                )
                })}
                
                
           
          </div>
        )
        })}
         </tbody>
            </table>
    </article>
</div>
        )
    }



export default connect((state,props)=>{
    console.log(" reducer order details page",state)
    return {
        orderdetails:state?.orderdetails?.cakeorders

    }
})(Orderdetail)