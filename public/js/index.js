import React, { Component } from "react";
import reactDom from 'react-dom';
import  Prouter from "@js/router/index.js";

class Index extends Component{
    state={

    }
    componentDidMount(){
        console.log("index2")
     }
    render(){
        return <section>
            <Prouter />
        </section>
    }
}

reactDom.render(<Index />,document.querySelector("#Router"))