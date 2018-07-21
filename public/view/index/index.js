import React, { Component } from "react";
import controllerIndex from "./controller-index";
import actionIndex from "./action-index";
import {connect} from "react-redux";
import {mixin,time} from "@js/tools";
import { SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG } from "constants";
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
                width:120,
                height:40
            },
            blockLi:{
                warpWidth:0,//总宽
                width:120,//单元格宽
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
         let {procBeginTime,procEndTime}=da;
         let start = this.local.timeLine.indexOf(parseInt(procBeginTime));
         let end = this.local.timeLine.indexOf(parseInt(procEndTime));

             return {
                 start:start*step,
                 end:end*step
             }
    }
    createTimeLineLi=(da)=>{
        
       let dom=[],num=0,h=40,l=10;
       let {width} = this.local.blockLi;
       
           for(let li in da){
               let {r,g,b} = this.setColor();
              //da[li][symbol]=li.toString;
              dom.push(<li key={num} index={num} style={{width:width+"px",left:num*width+"px"}}>
                  <h6 className="title">{li}</h6>
                  <div className="content">
                  {
                     da[li].map((arg,ind)=>{
                         let {start,end}=this.getProsition(arg,40);
                       //  console.log((end-start));
                         return <span 
                                    key={ind} className="line" 
                                    style={{top:start+"px",backgroundColor:`rgb(${r},${g},${b})`,color:`rgb(${255-r},${255-g},${255-b})`,height:Math.abs(end-start)+"px",left:(ind*10)+5+"px"}}
                                ><i className="nodeId">{arg.id}</i></span>
                     })
                  }
                  </div>
              </li>);
               num+=1; 
           }
           
        return dom
    }
    setColor=()=>{
        let r = Math.floor(Math.random()*255),
            g = Math.floor(Math.random()*255),
            b = Math.floor(Math.random()*255);
            return {r,g,b}
        //return `rgb(${)},${},${})`
    }
    render(){
        let {storeIndex} = this.props
        let {list={},timeLine=[]}=storeIndex.data;
        let {height:h,width:w}=this.local.timeLineLi;
        let {width}=this.local.blockLi;
        this.local.blockLi.warpWidth = list.length*this.local.timeLineLi.width;
        return <article className="timeLine">
               <ol className="timeLineBox" style={{top:h+"px",left:"10px",height:timeLine.length*h+"px",width:width+"px"}}>
                {
                 timeLine.map((da,ind)=>{
                    
                     return <li style={{top:h*ind+"px",height:h+"px"}} key={ind}>{ da  }</li>
                 })
                }
               </ol>
               <ul className="timeLineBlock" style={{left:w+20+"px",top:"10px",height:timeLine.length*h+"px",width:this.local.blockLi.warpWidth+"px"}}>
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