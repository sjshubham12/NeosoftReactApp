
import {useEffect} from 'react';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Loader from './Loader';

function Orderdetail(props){
    useEffect(() =>{
    props.dispatch({
          type:"MYORDERS",
          payload:false
    })
    },[])
    
  if(localStorage.token){

  return (
      <div>
        {props?.is_fetch== false ?(
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
     <Loader/>
      )} 
    </div>
    )
      }else{
        return <Redirect to={"/"} />
      }
  }

export default connect((state,props)=>{
    return {
        orderdetails:state?.orderdetails?.cakeorders,
        is_fetch:state?.is_fetch,
    }
})(Orderdetail)