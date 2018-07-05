import React, { Component } from "react";
import controllerIndex from "./controller-index";
import actionIndex from "./action-index";
import {connect} from "react-redux";
import {mixin,time} from "@js/tools";
import ("@view/index/css/index.scss");
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
        this.local={
            list:[], //数据
            timeLine:[], //时间线
        }
       
    }
    componentDidMount(){
        this.props.onLoad(dispatch=>this.dispatch=dispatch);
        this.init();//初始化
    }
    componentWillReceiveProps(next){
       
    }
     init(){
         this.C_setTimeline();//初始化生成线阵
    }
    render(){
        let {storeIndex} = this.props
        let {list=[],timeLine=[]}=storeIndex.data;
        
        return <article>
               <ol>
                {
                 timeLine.map((da,ind)=>{
                    
                     return <li key={ind}>{new Date(da).format("hh:mm:ss") }</li>
                 })
                }
               </ol>
               <ul>
              {
                   list.map((da,ind)=>{
                    let{nodeName}=da;
                    return <li key={ind}>{ nodeName}</li>
                  })  
              }
              </ul>
        </article>
    }
}

export default VIewIndex;
//export default connect(mapStateToProps,mapDispatchToProps)(VIewIndex);