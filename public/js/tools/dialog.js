import React, { Component } from "react";
import ("./css/tools.scss");
class Dialog extends Component{
    constructor(arg){
        super(arg);
        //console.log(this.props);
        let local={
            title:"名称",
            content:"",
            show:false
        }
        this.state={...local,...this.props}
    }
    componentWillMount(){
       
    }
    componentDidMount(){
       
    }
    componentWillReceiveProps(state){
        this.setState(state);
    }
    close(){
        
        this.setState({show:false}) 
    }
    render(){
        let data = this.state;
       // debugger
        
        return <article className={data.show? "dialog show":"dialog"}>
            <h4>{data.title}<span onClick={this.props.close? this.props.close.bind(this,data):this.close.bind(this)}>X</span></h4>
            <section>{data.content}</section>
        </article>
    }
}
export default Dialog