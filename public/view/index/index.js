import React, { Component } from "react";
import controllerIndex from "./controller-index";
import actionIndex from "./action-index";
import {connect} from "react-redux";
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
class VIewIndex extends Component{
    constructor(props, context){
        super(props, context);
        Object.assign(this,controllerIndex,actionIndex); //扩咋办
        this.dispatch=null;
       
    }
    componentDidMount(){
        this.getData();
        this.props.onLoad(dispatch=>this.dispatch=dispatch);
       // console.log(this.props)
    }
    componentWillReceiveProps(next){
       
    }
    render(){
        let {storeIndex,children} = this.props
       
        return <article onClick={this.Event_Click_Getstate.bind(this)}>
               <Demo data={this.data}>
                   =============
               </Demo>
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