
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
function CartSummary(props){
    if(localStorage.token){

    let setCounter = function(){
      props.dispatch({
        type : "ADD_COUNTER",
        counter : 2,
        payload : false
      })
      props.history.push("/checkout/address")
    }
    return(
      <div>
        <div class="pb-5">
          {props?.cart &&  props?.cart?.length > 0?(
          <div class="container">
              <div class="row" style ={{marginRight:"100px"}}>
                <div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                    <div class="table-responsive cart-design">
                      <table class="table">
                          <thead>
                            <tr >
                                <th scope="col" class="border-0 bg-light" style={{width:"20px"}}>
                                  <div class="p-2 px-3 text-uppercase">Product</div>
                                </th>
                                <th scope="col" class="border-0 bg-light" style={{width:"20px"}}>
                                  <div class="p-2 px-3 text-uppercase">Name</div>
                                </th>
                                <th scope="col" class="border-0 bg-light" style={{width:"20px"}}>
                                  <div class="py-2 text-uppercase">Price</div>
                                </th>
                            </tr>
                          </thead>
                          <tbody>
                            {props?.cart?.length>0 && props?.cart.map((each)=>{
                            return(
                            <tr>
                                <th >
                                  <div class="p-1">
                                      <img src={each.image} alt="" style={{width:"100px"}} class="img-fluid rounded shadow-sm" />
                                  </div>
                                </th>
                                <td class="border-0 align-middle"><strong>{each.name}</strong></td>
                                <td class="border-0 align-middle"><strong>${each.price}</strong></td>
                            </tr>
                            )
                            })}
                          </tbody>
                      </table>
                      {!props?.updatecounter &&
                      <button class="btn btn-outline-primary" onClick={setCounter}>Next</button> }
                    </div>
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
    )
    }else{
        return <Redirect to={"/"} />
    }
}

export default connect(function(state,props)
{
    return{
        cart:state?.cart,
        updatecounter:state?.updatecounter,
    }
}
)(CartSummary)