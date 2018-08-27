import React, { Component } from "react";
import ("./css/tools.scss");
class SlideDialog extends Component{
    constructor(arg){
        super(arg)
        this.state={
            list:[]
        }
    }
    componentDidMount(){

    }
    componentWillReceiveProps(){

    }
    render(){
        let {data}=this.props;
        let style = data.length? {transform:"translateX(0%)"}:{}
        return <article className="slideDialog" style={{top:(this.props.top||0)+"px",...style}}>
                <table>
                    <tbody>
                        {
                            this.props.data.map((da,ind)=>{
                                return <tr key={ind}>
                                        <td>id:{da.id}</td>
                                        <td>node:{da.node}</td>
                                        <td>tid:{da.tid}</td>
                                        <td>时长:{parseInt(da.procEndTime)-parseInt(da.procBeginTime)}/ms</td>
                                       </tr>
                            })
                        }
                    </tbody>
                </table>
        </article>
    }
}
export default SlideDialog;