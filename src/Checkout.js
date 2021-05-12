import { Route, useRouteMatch } from "react-router";
import {Link} from 'react-router-dom'
import Order from './Order'
import Address from './Address'
import CartSummary from './CartSummary'
import Payment from './Payment'
import { connect } from "react-redux";

function Checkout(props){
  
    var route = useRouteMatch()
    var url = route.url
    var path = route.path
    
    return <div className="row">
        <div className="col-4" style={{paddingLeft:"35px",width:"100%",paddingTop:"40px"}}>
        
            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <Link to={url}><li class="checkout-link nav-link " >Cart Summary</li></Link>
            
            {props?.updatecounter>=2 ?<Link to={url+"/address"}><li class="checkout-link nav-link">Address</li></Link>:<li class="checkout-link nav-link  ">Address</li>}  
            
            {props?.updatecounter>=3 ?<Link to={url+"/payment"}> <li class="checkout-link nav-link" >Payment</li></Link>:<li class="checkout-link nav-link ">Payment</li>}
                    
            {props?.updatecounter>=4 ?<Link to={url+"/order"}><li class="checkout-link nav-link" >Order</li></Link>:<li class="checkout-link nav-link ">Order</li>}
            </div>
        </div>

        <div className="col-8" style={{width:"100%", paddingTop:"25px"}}>
            <Route exact path={path} component={CartSummary} />
           {props?.updatecounter>=2 && <Route exact path={path+"/address"} component={Address} />}
           {props?.updatecounter>=3 && <Route exact path={path+"/payment"} component={Payment} /> }
           {props?.updatecounter>=4 && <Route exact path={path+"/order"} component={Order} /> }
        </div>
    </div>
    
}
export default connect(function(state,props){
    return{
        updatecounter:state?.updatecounter,
    }
}) (Checkout)