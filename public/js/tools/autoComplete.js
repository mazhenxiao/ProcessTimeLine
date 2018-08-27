import React, { Component } from "react";
import ("./css/tools.scss");
let setT = null;
class AutoComplete extends Component{
    constructor(arg){
        super(arg)
        this.state={
            list:[]
        }
        this.local={
            setT:null
        }
    }
    A_Event_ChangeInput=(ev)=>{
        let th = this,val = ev.target.value;
        if(this.setT){ clearTimeout(this.setT)}
        this.setT = setTimeout(e=>{
            if(th.props["onChange"]){
                Promise.resolve(th.props["onChange"](val))
                       .then(da=>{
                           th.setState({"list":da});
                       });
              }
        },500)
        
        
    }
   
    render(){
      return  <div className="inlineBlock">
                    <input type="text" onChange={this.A_Event_ChangeInput} />   
              </div>
    }
}
export default AutoComplete;