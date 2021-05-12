
import {useState, useEffect} from 'react';
import { connect } from "react-redux";
import axios from 'axios'

function Orderdetail(props){
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
          console.log("error", error)
            })
          },[])
    
    return (
      <div className="container cart-design" style={{marginTop:"17px" ,marginLeft: "51px",
            width: "1200px"}}>
        <article className="card">
            <header className="card-header" style={{textAlign:"center"}}> <strong>My Orders</strong> </header>
              <table class="table">
                <tbody>
                {props?.orderdetails?.length>0 && props?.orderdetails.map((each)=>{
                return(
                <div >
              {each.cakes.map((cakeitem)=>{
                  return(
                    <tr>
                    <td style={{paddingRight:"200px",paddingLeft:"100px"}}  >
                        <img src={cakeitem.image} alt="" style={{width:"100px"}} class="img-fluid rounded shadow-sm" />
                    </td>
                    <td style={{paddingRight:"200px"}} ><strong>{cakeitem.name}</strong></td>

                    <td  style={{paddingRight:"200px"}}><strong>${cakeitem.price}</strong></td>
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