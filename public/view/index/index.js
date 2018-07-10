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
            list:{}, //数据
            timeLine:[], //时间线
            timeLineLi:{
                width:100,
                height:40
            },
            blockLi:{
                warpWidth:0,//总宽
                width:80,//单元格宽
            }
        }
       
    }
    componentDidMount(){
        this.props.onLoad(dispatch=>this.dispatch=dispatch);
        this.init();//初始化
       
    }
    componentWillReceiveProps(next){
       
    }
    componentWillUnmount(){
        this.A_EventRemove();
    }
     init(){
         this.C_setTimeline();//初始化生成线阵
         this.A_EventToutch();//绑定touch
    }
    getProsition=(da,step)=>{
         let {startTime,endTime}=da;
         let start = this.local.timeLine.indexOf(startTime);
         let end = this.local.timeLine.indexOf(endTime);
         
             return {
                 start:start*step,
                 end:end*step
             }
    }
    createTimeLineLi=(da)=>{
        
       let dom=[],num=0,h=40,l=10;
       let {width} = this.local.blockLi;
     
           for(let li in da){
              dom.push(<li key={num} index={num} style={{width:width+"px",left:num*width+"px"}}>
                  <h6 className="title">{li}</h6>
                  <div className="content">
                  {
                     da[li].map((arg,ind)=>{
                         let {start,end}=this.getProsition(arg,40);
                       //  console.log((end-start));
                         return <span 
                                    key={ind} className="line" 
                                    style={{top:start+"px",height:Math.abs(end-start)+"px",left:(ind*10)+5+"px"}}
                                ></span>
                     })
                  }
                  </div>
              </li>);
               num+=1; 
           }
           
        return dom
    }
    render(){
        let {storeIndex} = this.props
        let {list={},timeLine=[]}=storeIndex.data;
        let h=this.local.timeLineLi.height;
        let {width}=this.local.blockLi;
        this.local.blockLi.warpWidth = list.length*this.local.timeLineLi.width;
        return <article className="timeLine">
               <ol className="timeLineBox" style={{top:h+"px",left:"10px",height:timeLine.length*h+"px",width:width+"px"}}>
                {
                 timeLine.map((da,ind)=>{
                    
                     return <li style={{top:h*ind+"px",height:h+"px"}} key={ind}>{ new Date(da).format("hh:mm:ss")  }</li>
                 })
                }
               </ol>
               <ul className="timeLineBlock" style={{left:width+"px",top:"10px",height:timeLine.length*h+"px",width:this.local.blockLi.warpWidth+"px"}}>
              {
                  this.createTimeLineLi(list)
                  /*  list.map((da,ind)=>{
                    let{nodeName}=da;
                    return <li style={{left:w2*ind+"px",width:w2+"px"}} key={ind}>{ nodeName}</li>
                  }) */  
              }
              </ul>
        </article>
    }
}

export default VIewIndex;
//export default connect(mapStateToProps,mapDispatchToProps)(VIewIndex);