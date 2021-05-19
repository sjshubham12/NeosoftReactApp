
import {useState, useEffect} from 'react';
import { connect } from "react-redux";
//import { Redirect } from "react-router-dom";
import axios from 'axios'

function Orderdetail(props){
  let [loading,SetLoading] = useState(false)

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
              SetLoading(true)
              props.dispatch({
                type:"CAKE_ORDER",
                payload:response.data
            })
    
          
            }, (error)=>{
            })
          },[])
    return (
        <div>
        {loading?(
           
        <div className="container cart-design" style={{marginLeft:"50px" ,marginTop:"17px" , width:"1100px"}}>
        {props?.orderdetails &&  props?.orderdetails?.length > 0?(

    <article className="card">
        <header className="card-header" style={{textAlign:"center"}}> My Orders </header>
        <table class="table">
              <thead>
                <tr >
                  <th   style={{paddingLeft: "100px"}}>
                    Product
                  </th>
                  <th  style={{paddingRight: "200px"}}>
                   Name
                  </th>
                  <th   style={{paddingRight: "278px"}}>
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
        
                <tr>
                <td style={{paddingLeft: "100px"}}>
                 
                    <img src={cakeitem.image} alt="" style={{width:"100px"}} class="img-fluid rounded shadow-sm" />
                    
                
                  
                </td>
                <td style={{position: "relative",left:"200px"}} ><strong>{cakeitem.name}</strong></td>

                <td style={{position: "relative",left:"350px"}}><strong>${cakeitem.price}</strong></td>
                </tr>
                )
                })}
                
                
           
          </div>
        )
        })}
         </tbody>
            </table>
    </article>
    ):(
      
     
      <h2 style={{textAlign: "center" }}>
        <p>
          Please make some order
        </p>

      
      </h2>
    
     )}
   
</div>

):(
  <div class="d-flex justify-content-center">
<div class="spinner-border text-primary m-5"  style = {{width: "200px" ,height: "200px"}} role="status">
  <span class="sr-only">Loading...</span>
  </div>
</div>
)}
</div>

        )
    }



export default connect((state,props)=>{
    return {
        orderdetails:state?.orderdetails?.cakeorders

    }
})(Orderdetail)