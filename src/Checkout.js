import { Route, useRouteMatch } from "react-router";
import {Link} from 'react-router-dom'
import Order from './Order'
import Address from './Address'
import CartSummary from './CartSummary'
import Payment from './Payment'

function Checkout(){
  
    var route = useRouteMatch()
    var url = route.url
    var path = route.path
    
    
    return <div className="row">
        <div className="col-4">
        <Link to={url}><li>Cart Summary</li></Link>
        <Link to={url+"/address"}><li>Add Address</li></Link>
        <Link to={url+"/payment"}><li>Payment</li></Link>
        <Link to={url+"/order"}><li>Order</li></Link>
        </div>

        <div className="col-8">
            <Route exact path={path} component={CartSummary} />
            <Route exact path={path+"/address"} component={Address} />
            <Route exact path={path+"/payment"} component={Payment} />
            <Route exact path={path+"/order"} component={Order} />
        </div>
    </div>
    
}
export default Checkout