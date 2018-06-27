import React, { Component } from "react";
import controllerIndex from "./controller-index";
class VIewIndex extends Component{
    constructor(){
        super();
        Object.assign(this,controllerIndex); //扩咋办
       
    }
    componentDidMount(){
        this.getData();
      
    }
    render(){
        return <article>
            
        </article>
    }
}
export default VIewIndex;