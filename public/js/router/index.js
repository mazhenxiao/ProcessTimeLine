import React,{Component} from "react";
//import {Provider} from "react-redux"; 
import {
    BrowserRouter as Router,
    Route
  } from 'react-router-dom';
import RouterIndex from "@js/router/routerIndex";
class Prouter extends Component{
    render(){
        return <Router>
                  <RouterIndex />
               </Router>
    }
}
export default Prouter;