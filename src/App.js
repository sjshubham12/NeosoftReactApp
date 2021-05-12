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

function App(props) {
  
 
  return (
    <div>
      <Router>
      <Navbar />
        <div>
      <Switch>
      <Route path ="/" exact component={Home} ></Route>
      <Route path ="/videoplay/:videoid" exact component={videoDetails} ></Route>

     
      </Switch>
        
      
        </div>
      </Router>
    </div>
  );
}

export default App
