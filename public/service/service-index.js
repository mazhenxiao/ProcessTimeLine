import Axios from "./decorator-index";
@Axios
 class serviceIndex{
    constructor(){
        console.log("this=>",this);
       
    }
    getData(){
       
    }
 }

export let{ getData }=new serviceIndex()


