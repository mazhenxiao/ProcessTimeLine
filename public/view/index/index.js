import React, { Component } from "react";
import controllerIndex from "./controller-index";
import actionIndex from "./action-index";
import {connect} from "react-redux";
import {mixin} from "@js/tools";
import Demo from "@view/demo";
 const mapStateToProps=(state)=>{
    
    return {storeIndex:state.storeIndex}
}
const mapDispatchToProps=(dispatch)=>{
   return {
        onLoad(callback){ callback(dispatch) }
   }
}
@connect(mapStateToProps,mapDispatchToProps)
@mixin(controllerIndex,actionIndex)
class VIewIndex extends Component{
    constructor(props, context){
        super(props, context);
        this.dispatch=null;
        console.log("this=>===>",this);
        for(var i in this){
            console.log(i);
        }
    }
    componentDidMount(){
        this.getData();
        this.props.onLoad(dispatch=>this.dispatch=dispatch);
    }
    componentWillReceiveProps(next){
       
    }
    render(){
        let {storeIndex,children} = this.props
    
        return <article onClick={this.Event_Click_Getstate.bind(this)}>
               demo
              {
                   storeIndex.data.list.map((da,ind)=>{
                    return <p key={ind}>{da.startTime}</p>
                  })  
              }
        </article>
    }
}

export default VIewIndex;
//export default connect(mapStateToProps,mapDispatchToProps)(VIewIndex);