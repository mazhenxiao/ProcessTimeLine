
import React, { Component } from "react";
import {connect} from "react-redux";
import {mixin} from "@js/tools";
import controllerTable from "./controller-table";
import actionTable from "./action-table";
import ("./css/index.scss");

const mapStateToProps=(state)=>{

    return {storeTabel:state.storeTable}
}
const mapDispatchToProps=(dispatch)=>{
   return {
        onLoad(callback){ callback(dispatch) }
   }
}
@connect(mapStateToProps,mapDispatchToProps)
@mixin(controllerTable,actionTable)

class ViewTable extends Component{
    constructor(props, context){
        super(props, context);
        this.dispatch=null;
        this.local={
            list:{} //数据
           
        }
        this.state={
            all:false //是否显示全部数据
        }
       
    }
    componentDidMount(){
        this.props.onLoad(dispatch=>this.dispatch=dispatch); 
        this.init();
    }
    init(){
        this.T_getWX();
    }
    render(){
        let {storeTabel} = this.props
        if(!storeTabel){ return <div>加载中。。。</div>}
       let {list} =  storeTabel.data;
      // console.log(this.state)
        
       if(!this.state.all){
          list = list.slice(0,10);
       }
        return  <section className="table">
                <div className="tableHeader"><lable>显示全部：<input type="checkbox" onChange ={this.ACheckboxChange.bind(this)} /></lable></div>
               <table className="tableUl"><tbody>{
                   list.map((da,ind)=>{
                       let keys = Object.keys(da)[0],value=Object.values(da)[0];
                       value=value.replace(/[\:\s]+/ig,",").split(",");
                       console.log(value);
                     return <tr key={ind}><td key={ind+"_1"}>{keys}</td>{
                         value.map((d,i)=>{
                             return <td key={i}>{d||"null"}</td>
                         })
                     }</tr>
                   })
               }</tbody></table>
        </section>
    }
}

export default ViewTable;