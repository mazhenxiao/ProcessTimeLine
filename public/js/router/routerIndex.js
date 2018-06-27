import React,{Component} from "react";
import {Route} from 'react-router-dom';
import ViewIndex from "@view/index";

class RouterIndex extends Component{
    render(){
       return <div>
            <Route exact path="/" component={ViewIndex} />
        </div>
    }
}
export default RouterIndex;