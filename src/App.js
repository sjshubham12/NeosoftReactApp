import logo from './logo.svg';
import './App.css';
import Home from "./Home"
import videoDetails from "./videoDetails"
import Navbar from "./Navbar"

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
  
} from "react-router-dom";

<<<<<<< HEAD
import axios from "axios"
import Orderdetail from './Orderdetail';

=======
>>>>>>> 6f434fea7d6a366b15568abae4cdce6cad51b4e7
function App(props) {
  
 
  return (
    <div>
      <Router>
      <Navbar />
        <div>
      <Switch>
      <Route path ="/" exact component={Home} ></Route>
<<<<<<< HEAD
      <Route path ="/login" exact component={Login} ></Route>
      <Route path ="/signup" exact component={Signup} ></Route>
      <Route path ="/search" exact component={Search} ></Route>
      <Route path ="/checkout"  component={Checkout} ></Route>
      <Route path ="/forgotpassword"  component={ForgotPassword} ></Route>


      <Route path ="/cart" exact component={Cart} ></Route>
     
      <Route path ="/myorders"  component={Orderdetail} ></Route>

      <Route path ="/cake/:cakeid" exact component={CakeDetails} ></Route>

      <Route path ="/*" >
        <Redirect to="/"></Redirect>
      </Route>
=======
      <Route path ="/videoplay/:videoid" exact component={videoDetails} ></Route>

     
>>>>>>> 6f434fea7d6a366b15568abae4cdce6cad51b4e7
      </Switch>
        
      
        </div>
      </Router>
    </div>
  );
}

export default App
